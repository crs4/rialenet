const express = require('express')
const fetch = require("node-fetch");
const path = require('path');
const PORT = process.env.PORT || 3333
//https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b

// WENET CONFIG DATA 
const CLIENT_SECRET = "Ayj0D6wWRiN9QdKqkVof"
const APP_ID = "xUi1mwCJ0X"
const CLIENT_ID = "xUi1mwCJ0X"
const EXTERNAL_ID = "528"
const WENET_URL = "http://internetofus.u-hopper.com"
const COMMUNITY_ID = "624703620e5af47df0eed5eb"
const TASK_TYPE_ID = "626a6745925841535833b638" //da connettore conversazionale/App logic
let tokens = {}

// ------------------ //


const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/connect', (req, res) => {
  console.log("connect-to_wenet request (per ottenere authcode (ed external_id))");
  res.redirect(`${WENET_URL}/prod/hub/frontend/oauth/login?client_id=${CLIENT_ID}&external_id=${EXTERNAL_ID}`)
})

app.get('/conversational_callback', async (req, res) => {
  res.send("Called conversetional callback!")
});

app.get('/callback', async (req, res) => {
  /**
   * callback di autenticazione
   */
  const code = req.query.code
  //const externalId = req.query.external_id
  console.log("SERVER OAUTH CODE:", code)

  // request token
  tokens = await requestToken(code);
  return res.redirect(`${WENET_URL}/prod/hub/frontend/oauth/complete?app_id=${APP_ID}`)
})

app.get('/tasks', async (req, res) => {
  const result = await getAllTasks()
  res.send(result)
})

const getAllTasks = async () => {
  const url = `${WENET_URL}/prod/api/service/tasks?appId=${APP_ID}`
  try {
    const response = await
      fetch(url, {
        headers: {
          "Authorization": `bearer ${tokens.access_token}`,
          "Content-Type": "application/json"
        },
        method: "GET",
      })
    const details = await response.json()
    //console.log("GET TASKS RESPONSE:", details)
    return details
  } catch (e) {
    console.log("error from server in getTasks:", e)
    return `Error:${e}`
  }

}

app.post('/newtask', async (req, res) => {
  console.log("Request body content->>", req.body["content"])
  const result = await createNewTask(req.body["content"])
  res.send(`result di newTask:${result}`)
})

const createNewTask = async (content) => {
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
        body: JSON.stringify(createTaskBody(content))
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





app.get('/', function (req, res) {
  console.log("Root called!!!!")
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



 app.listen(PORT, () => console.log(`Listening on ${ PORT }`))