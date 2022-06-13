//https://rialenet-forum.herokuapp.com
//https://swagger.u-hopper.com/?url=https://raw.githubusercontent.com/InternetOfUs/components-documentation/master/sources/wenet-service_api-openapi.yaml

const fetch = require("node-fetch");
const express = require('express')
const session = require("express-session");
const wenet_config = require("./wenet_config");
const dbConnector = require("./db/db_connector");
const wenetConnector = require("./wenet/wenet_api");
const md5 = require('md5');

const path = require('path');
const PORT = process.env.PORT || 3333
//https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b

//https://stackoverflow.com/questions/49048884/react-router-how-to-redirect-to-an-express-get

// Scenario APP WeNet
//https://docs.google.com/document/d/1KnJP-5QYUonym3w9pPGfs3sFzarsSOggwWPmNwbqR70/edit

// WENET CONFIG DATA 

const CLIENT_ID = wenet_config.CLIENT_ID
const WENET_URL = wenet_config.WENET_URL


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

app.get('/currentSession', async (req, res) => {
  res.send(req.session);
});

app.get('/logout', async (req, res) => {
  console.log("Logout: deleting session data of current user")
  req.session.destroy((err)=>{console.log("Risultato della rimozione della sessione: Errori presenti? ",err)})
  res.redirect("/")
});

app.get('/connect', async (req, res) => {
  const passcode = req.query.passcode;
  console.log("Richiesta connect su sessione:", req.session.id)
  console.log("connect-to_wenet request (per ottenere authcode (ed external_id)) da passcode:",passcode);
  const user = await dbConnector.getUserByPasscode(passcode)
  console.log("User->",user);
  const external_id = (user!= null && user.length>0) ? user[0]["wenet_id"] : null;
  // session data in express
  //https://stackoverflow.com/questions/47200350/save-data-in-express-session
  if (external_id!=null)
  {
    let sessData = req.session;
    console.log("Dati di sessione prima:", sessData);
    sessData.passcode = passcode;
    sessData.external_id = external_id;
    sessData.role_id = user[0]["role_id"];
    console.log("Dati di sessione dopo:", sessData);
    res.redirect(`${WENET_URL}/prod/hub/frontend/oauth/login?client_id=${CLIENT_ID}&external_id=${457845}`)
  }
  else res.redirect("/");

})

app.get('/conversational_callback', async (req, res) => {
  res.send("Called conversational callback!")
});

app.get('/callback', async (req, res) => {
  /**
   * callback di autenticazione
   */
  console.log("callback di autenticazione:", res.query);
  const code = req.query.code
  const passcode = req.session.passcode
  //const externalId = req.query.external_id
  console.log("SERVER OAUTH CODE:", code)
  // request token
  const tokens = await wenetConnector.requestToken(code);
  req.session.tokens = tokens;
  console.log("ACCESS TOKEN RICAVATO!");
  //res.redirect(`${WENET_URL}/prod/hub/frontend/oauth/complete?app_id=${APP_ID}`)
  return res.redirect(`/forum?passcode=${md5(passcode)}`);
})

app.get('/userprofile', async (req, res) => {
  const wenet_id = req.query.id;
  let result = await wenetConnector.getUserProfile(wenet_id || req.session.external_id,req.session.tokens)
  if (result!=null) {
    result["passcode"] = req.session.passcode;
    result["role_id"] = req.session.role_id;
}
  //{"name":{"first":"Stefano","last":"Monni"},"id":"528","avatar":null}
  res.send(result)
})

app.get('/users', async (req, res) => {
  const wenet_id = req.query.id;
  let result = await wenetConnector.getAppUsers(req.session.tokens)
  if (result!=null) {
    result["passcode"] = req.session.passcode;
    result["role_id"] = req.session.role_id;
}
  //{"name":{"first":"Stefano","last":"Monni"},"id":"528","avatar":null}
  res.send(result)
})

app.get('/tasks', async (req, res) => {
  console.log("Richiesta tasks su sessione:", req.session.id)
  const passcode = req.query.passcode;
   
  if (req.session.passcode==null)
  {
    console.log("Passcode dell'utente non corrisponde a quello di sessione");
    res.status(401).send([]);
  }
  else
   
  {
    const result = await wenetConnector.getAllTasks(req.session.tokens)
    res.send(result)
  }
  
})


app.post('/newtask', async (req, res) => {
  console.log("Request body content->>", req.body["content"])
  const result = await wenetConnector.createNewTask(req.session.tokens,req.session.external_id,req.body["content"])
  res.send(`result di newTask:${result}`)
})


app.get('/*', function (req, res) {
  console.log("Root called. Session ID:", req.session.id);
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(PORT, () => console.log(`Listening on ${PORT}`))