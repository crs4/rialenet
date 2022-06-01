const fetch = require("node-fetch");
const express = require('express')
const session = require("express-session");
const wenet_config = require("./wenet_config");
const dbConnector = require("./db/db_connector");
const wenetConnector = require("./wenet/wenet_api");

const path = require('path');
const PORT = process.env.PORT || 3333
//https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b

//https://stackoverflow.com/questions/49048884/react-router-how-to-redirect-to-an-express-get

// Scenario APP WeNet
//https://docs.google.com/document/d/1KnJP-5QYUonym3w9pPGfs3sFzarsSOggwWPmNwbqR70/edit

// WENET CONFIG DATA 
const CLIENT_SECRET = wenet_config.CLIENT_SECRET
const APP_ID = wenet_config.APP_ID
const CLIENT_ID = wenet_config.CLIENT_ID

const WENET_URL = wenet_config.WENET_URL
const COMMUNITY_ID = wenet_config.COMMUNITY_ID
const TASK_TYPE_ID =  wenet_config.TASK_TYPE_ID //da connettore conversazionale/App logic


// ------------------ //
var SQLiteStore = require('connect-sqlite3')(session);

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

/*
//http://expressjs.com/en/resources/middleware/session.html
var sessionConfig = {
  secret: 'WENET_RIALE_SECRET_SESSION',
  cookie: {}
}
app.use(session(sessionConfig))
*/

//https://github.com/rawberg/connect-sqlite3
app.use(session({
  store: new SQLiteStore,
  secret: 'WENET_RIALE_SECRET_SESSION',
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 1 week
}));


app.get('/db', async (req, res) => {
  const data = await dbConnector.getAllUsersByRole(dbConnector.Role.student);
  res.send(data);
});

app.get('/connect', async (req, res) => {
  
  const passcode = req.query.passcode;
  console.log("connect-to_wenet request (per ottenere authcode (ed external_id)) da passcode:",passcode);
  const user = await dbConnector.getUserByPasscode(passcode)
  console.log("User->",user);
  const external_id = (user!= null && user.length>0) ? user[0]["wenet_id"] : null;
  // session data in express
  //https://stackoverflow.com/questions/47200350/save-data-in-express-session
  let sessData = req.session;
  sessData.passcode = passcode;
  sessData.external_id = external_id;
  console.log("Dati di sessione:", sessData);
  res.redirect(`${WENET_URL}/prod/hub/frontend/oauth/login?client_id=${CLIENT_ID}&external_id=${external_id}`)
})

app.get('/conversational_callback', async (req, res) => {
  res.send("Called conversational callback!")
});

app.get('/callback', async (req, res) => {
  /**
   * callback di autenticazione
   */
  const code = req.query.code
  const passcode = req.session.passcode

  //const externalId = req.query.external_id
  console.log("SERVER OAUTH CODE:", code)
  // request token
  const tokens = await requestToken(code);
  req.session.tokens = tokens;
  console.log("ACCESS TOKEN RICAVATO!");
  //res.redirect(`${WENET_URL}/prod/hub/frontend/oauth/complete?app_id=${APP_ID}`)
 
  return res.redirect(`/forum?passcode=${passcode}`);
})

app.get('/tasks', async (req, res) => {
  const passcode = req.query.passcode;
  /*
  if (req.session.passcode!=passcode)
  {
    console.log("Passcode dell'utente non coincide con quello di sessione!");
    res.status(401).send([]);
  }
  else
  */
  {
    const result = await wenetConnector.getAllTasks(req.session.tokens)
    res.send(result)
  }
  
})


app.post('/newtask', async (req, res) => {
  console.log("Request body content->>", req.body["content"])
  const result = await createNewTask(req.session.tokens,req.session.external_id,req.body["content"])
  res.send(`result di newTask:${result}`)
})

const createTaskBody = (external_id,content) => {
  return (
    {
      "taskTypeId": TASK_TYPE_ID, //  "626a6745925841535833b638",
      "appId": APP_ID, //"GOJt2zQA6B",
      "communityId": COMMUNITY_ID,    //"624594390e5af47df0eed5ea",
      "requesterId": external_id, //"528",
      "goal": {
        "name": "Help 4 for timeline master",
        "description": `${content}`,
        "keywords": [
          "social interaction",
          "lab"
        ]
      }
    }
  )
}


const createNewTask = async (tokens,external_id,content) => {
  const url = `${WENET_URL}/prod/api/service/task`
  //console.log("requestTokenDetails: Tokens:", tokens);
  //console.log("requestTokenDetails: Access Token:", tokens.access_token)
  try {
    const response = await
      fetch(url, {
        headers: {
          "Authorization": `bearer ${tokens.access_token}`,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(createTaskBody(external_id,content))
      })
    const details = await response.json()
    console.log("CREATE TASK RESPONSE:", details)
    return details
  } catch (e) {
    console.log("error from server in createTask:", e)
    return `Error:${e}`
  }
}

const requestToken = async (oauthCode) => {
  try {
    const response = await
      fetch(`${WENET_URL}/prod/api/oauth2/token`, {
        body: `grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${oauthCode}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
      })
    console.log("Response from sever:", response)
    const content = await response.json();
    console.log("Json content from response:", content)
    return content;
    /*
    {
      refresh_token: '8It8uoIVspPOlUUmC6Efp3L1N48Rjy9q',
      token_type: 'bearer',
      access_token: 'JBAsvsz1gBa9opce0jOcbN2kvxQBS45v',
      expires_in: 7200
    }
    */
  } catch (e) {
    console.log("error from server:", e)
    return `Error:${e}`
  }

}





app.get('/*', function (req, res) {
  console.log("Root called!!!!")
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(PORT, () => console.log(`Listening on ${PORT}`))