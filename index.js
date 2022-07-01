//https://rialenet-forum.herokuapp.com
//https://swagger.u-hopper.com/?url=https://raw.githubusercontent.com/InternetOfUs/components-documentation/master/sources/wenet-service_api-openapi.yaml

const fetch = require("node-fetch");
const express = require('express')
const session = require("express-session");
const wenet_config = require("./wenet_config");
const dbConnector = require("./db/db_connector");
const wenetConnector = require("./wenet/wenet_api");
const md5 = require('md5');
const bodyParser = require('body-parser');
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

/*
//http://expressjs.com/en/resources/middleware/session.html
var sessionConfig = {
  secret: 'WENET_RIALE_SECRET_SESSION',
  cookie: {}
}
app.use(session(sessionConfig))
*/
//@audit indo MAIN INDEX
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
  req.session.destroy((err) => { console.log("Risultato della rimozione della sessione: Errori presenti? ", err) })
  res.status(200).send("ok");
  res.redirect("/")
});

app.get('/connect', async (req, res) => {
  const passcode = req.query.passcode;
  console.log("Richiesta connect su sessione:", req.session.id)
  console.log("connect-to_wenet request (per ottenere authcode (ed external_id)) da passcode:", passcode);
  const user = await dbConnector.getUserByPasscode(passcode)
  console.log("User->", user);
  const external_id = (user != null && user.length > 0) ? user[0]["wenet_id"] : null;
  // session data in express
  //https://stackoverflow.com/questions/47200350/save-data-in-express-session
  if (external_id != null) {
    let sessData = req.session;
    console.log("Dati di sessione prima:", sessData);
    sessData.passcode = passcode;
    sessData.external_id = external_id; // the wenet id of authenticated user
    sessData.role_id = user[0]["role_id"];
    sessData.teacher_wenet_id = user[0]["teacher_wenet_id"];
    console.log("Dati di sessione dopo:", sessData);

    // login a wenet non supportato dalla piattaforma wenet!
    // login the user toWenet first
    //const password = "Ri@leNet!"
    //const username_or_email = `edutech.crs4+${passcode}@gmail.com`
    //const response = await wenetConnector.loginToWenet(username_or_email,password);
    //console.log("Risultato del login:", response);

    res.redirect(`${WENET_URL}/prod/hub/frontend/oauth/login?client_id=${CLIENT_ID}&external_id=${external_id}`)
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
  //const user = await dbConnector.getUserByPasscode(passcode)
  let redirectUrl = null;
  if (req.session.role_id == dbConnector.Role.student) { redirectUrl = "/student_dashboard" }
  else if (req.session.role_id == dbConnector.Role.admin ||
    req.session.role_id == dbConnector.Role.teacher) { redirectUrl = "/teacher_dashboard"; }
  console.log("redirectUrl:", redirectUrl);
  return (redirectUrl != null ? res.redirect(redirectUrl) : res.status(403).send('Forbidden: Invalid user id'))
})

app.get('/userprofile', async (req, res) => {
  const wenet_id = req.query.id;
  let result = await wenetConnector.getUserProfile(wenet_id || req.session.external_id, req.session.tokens)
  console.log("/userprofile result:", result);
  if (result != null) {
    //{"name":{"first":"Stefano","last":"Monni"},"id":"528","avatar":null}
    result["passcode"] = req.session.passcode;
    result["role_id"] = req.session.role_id;
    res.send(result)
  }
  else
    res.redirect("/");
})

/*
app.get('/users', async (req, res) => {
  const wenet_id = req.query.id;
  let result = await wenetConnector.getAppUsers(req.session.tokens)
  if (result != null) {
    result["passcode"] = req.session.passcode;
    result["role_id"] = req.session.role_id;
  }
  //{"name":{"first":"Stefano","last":"Monni"},"id":"528","avatar":null}
  res.send(result)
})
*/

app.get('/students', async (req, res) => {
  const students = await dbConnector.getStudentsProfileByTeacherWenetId(req.session.external_id)
  const wenetStudents = await wenetConnector.getWenetStudents(students,req.session.tokens)
  res.send(wenetStudents)
})

app.get('/tasks', async (req, res) => {
  console.log("Richiesta tasks su sessione:", req.session.id)
  //const passcode = req.query.passcode;
  const goalName = req.query.goalName;
  // i task che interessano al docente sono i propri, quelli che interessano
  // allo studente sono quelli del docente ad esso assegnato.
  // 
  const requesterId = req.session.teacher_wenet_id || req.session.external_id; // || req.query.requesterId;
  if (requesterId == null) {
    console.log("L'utente loggato non risulta nè un docente nè uno studente con un docente ad esso associato->");
    //res.status(401).send([]);
    res.redirect("/");
  }
  else {
    const result = await wenetConnector.getTasks(req.session.tokens, goalName, requesterId)
    res.send(result)
  }

})


app.post('/newtask', async (req, res) => {
  console.log("Request body:", req.body);
  console.log("Request body content->>", req.body["content"])
  const result = await wenetConnector.createNewTask(req.session.tokens, req.session.external_id, req.body["content"])
  res.send(`result di newTask:${result}`)
})

app.post('/newtransaction', async (req, res) => {
  console.log("Request body:", req.body);
  console.log("Request body content->>", req.body["content"])
  const bodyContent = req.body["content"];
  //tokens, task_id, external_id,content
  const result = await wenetConnector.createNewTransaction(req.session.tokens,
    bodyContent["taskId"], req.session.external_id, bodyContent["content"])
  res.send(`result di newTransaction:${result}`)
})


app.get('/*', function (req, res) {
  console.log("Root called. Session ID:", req.session.id);
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(PORT, () => console.log(`Listening on ${PORT}`))