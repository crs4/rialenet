const moment = require("moment");
const wenet_config = require("../wenet_config");
const fetch = require("node-fetch");
const transactionFieldMapper = require("./transactions_model")
const FormData = require("form-data");
const formdata = require("formdata-node")
const { findByPlaceholderText } = require("@testing-library/react");

const WENET_URL = wenet_config.WENET_URL
const APP_ID = wenet_config.APP_ID
const CLIENT_ID = wenet_config.CLIENT_ID
const CLIENT_SECRET = wenet_config.CLIENT_SECRET
const COMMUNITY_ID = wenet_config.COMMUNITY_ID
const TASK_TYPE_ID =  wenet_config.TASK_TYPE_ID //da connettore conversazionale/App logic

//@audit info getTasks()
//https://swagger.u-hopper.com/?url=https://raw.githubusercontent.com/InternetOfUs/components-documentation/master/sources/wenet-service_api-openapi.yaml#/Task/get_tasks
const getTasks = async (tokens,offset, limit, goalName, requesterId) => {
    console.log(`Richiamo getTasks() con accessToken:${tokens.access_token}`);
    if (offset==null) offset = 0;
    if (limit==null) limit = 100;
    let url = `${WENET_URL}/prod/api/service/tasks?appId=${APP_ID}&offset=${offset}&limit=${limit}`

    if (goalName!=null) url +=`&goalName=${goalName}`;
    if (requesterId!=null) url+=`&requesterId=${requesterId}`;

    console.log("getTasks() url:", url);
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

  const getUserProfile = async (wenetUserId,tokens) => {
    if (tokens==null) return null;
    console.log(`Richiamo getUserProfile() con accessToken:${tokens.access_token}`);
    const url = `${WENET_URL}/prod/api/service/user/profile/${wenetUserId}`
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
      console.log("error from server in getUserProfile:", e)
      return null;
    }
  }

  // return only students that are also wenet users that subscribed the rialenet app
  const getWenetStudents = async(students, tokens) =>
  {
     let wenetUsers = []
     for (let i=0;i<students.length;i++)
     {
       const student = {...students[i]};
       console.log("\n\nWS: analizzo studente:", student);
       const studentProfile = await getUserProfile(student["wenet_id"],tokens)
       console.log("WS: profile wenet studente:", studentProfile);
       if (studentProfile!=null && studentProfile["message"]==null)
       {
         student["name"]= studentProfile["name"]["first"];
         student["surname"]= studentProfile["name"]["last"];
         wenetUsers.push(student);
       }
     }
     return wenetUsers;
  }

  const getAppUsers = async (tokens) => {
    console.log(`Richiamo getAppUsers() con accessToken:${tokens.access_token}`);
    const url = `${WENET_URL}/prod/api/service/app/${APP_ID}/users`
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
      return details
    } catch (e) {
      console.log("error from server in getAppUsers:", e)
      return `Error:${e}`
    }
  }

  
  const createNewTask = async (tokens,external_id,content) => {
    const url = `${WENET_URL}/prod/api/service/task`
    //console.log("requestTokenDetails: Tokens:", tokens);
    //console.log("requestTokenDetails: Access Token:", tokens.access_token)
    try {
      const taskBody = createTaskBody(external_id,content);
      console.log("NEW TASK BODY:", taskBody);

      const response = await
        fetch(url, {
          headers: {
            "Authorization": `bearer ${tokens.access_token}`,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(taskBody)
        })
      const details = await response.json()
      console.log("CREATE TASK RESPONSE:", details)
      return details
    } catch (e) {
      console.log("error from server in createTask:", e)
      return `Error:${e}`
    }
  }

  const createTaskBody = (external_id,content) => {
    return (
      {
        "taskTypeId": `${TASK_TYPE_ID}`, //  "626a6745925841535833b638",
        "appId": `${APP_ID}`, //"GOJt2zQA6B",
        "communityId": `${COMMUNITY_ID}`,    //"624594390e5af47df0eed5ea",
        "requesterId": `${external_id}`, //"528",
        "goal": {
          "name": `${content["name"]}`,
          "description": `${content["description"]}`,
          "keywords": [
            "social interaction",
            "lab"
          ]
        }
      }
    )
  }


  const createNewTransaction = async (tokens,task_id, external_id,content) => {
    const url = `${WENET_URL}/prod/api/service/task/transaction`
    //console.log("requestTokenDetails: Tokens:", tokens);
    //console.log("requestTokenDetails: Access Token:", tokens.access_token)
    try {
      const transactionBody = (content["transactionID"]==null ? 
      createTransactionBody(task_id,external_id,content):
      createFeedbackTransactionBody(task_id,external_id,content));

      console.log("NEW TRANSACTION BODY:", transactionBody);

      const response = await
        fetch(url, {
          headers: {
            "Authorization": `bearer ${tokens.access_token}`,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(transactionBody)
        })
      const details = await response.json()
      console.log("CREATE TRANSACTION RESPONSE:", details)
      console.log("CREATE TRANSACTION RESPONSE STATUS CODE:", response.status)
      return details
    } catch (e) {
      console.log("error from server in createTransaction:", e)
      return `Error:${e}`
    }
  }

const createTransactionBody = (taskId, external_id,content) =>
{ 
  const attrib = transactionFieldMapper.transactionFieldMapper[`${content["label"]}`]
  console.log("transactionFieldMapper:", transactionFieldMapper);
  console.log("transactionFieldMapper label:", attrib);
  return (
  {
    "_creationTs": moment.now(),
    "_lastUpdateTs": moment.now(),
    "taskId":  `${taskId}`,
    "label":   `${content["label"]}`, // "cannotAnswer",
    "attributes": {
        [attrib] : `${content["message"]}`
    },
    "actioneerId": `${external_id}`,
    "messages": []
 }
)
}

const createFeedbackTransactionBody = (taskId, external_id,content) =>
{ 
  const attrib = transactionFieldMapper.transactionFieldMapper[`${content["label"]}`]
  console.log("transactionFieldMapper:", transactionFieldMapper);
  console.log("transactionFieldMapper label:", attrib);
  return (
  {
    "_creationTs": moment.now(),
    "_lastUpdateTs": moment.now(),
    "taskId":  `${taskId}`,
    "label":   `${content["label"]}`, // "cannotAnswer",
    "attributes": {
        [attrib] : `${content["message"]}`,
        "transactionID" : `${content["transactionID"]}`
    },
    "actioneerId": `${external_id}`,
    "messages": []
 }
)
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
  

  
 exports.getTasks = getTasks;
 exports.getAppUsers = getAppUsers;
 exports.getUserProfile = getUserProfile;
 exports.createNewTask = createNewTask;
 exports.createNewTransaction = createNewTransaction;
 exports.requestToken = requestToken;
 exports.getWenetStudents = getWenetStudents;

 /*
  const loginToWenet = async (username_or_email, password) => {
    const url = `${WENET_URL}/prod/hub/frontend/user/login?client_id=xUi1mwCJ0X&external_id=671`
    console.log("Login of user: ", username_or_email);
    console.log("Login url: ", url);
    try {
      //const formData = {"username_or_email" : username_or_email, "password" : password}
      //https://stackoverflow.com/questions/46640024/how-do-i-post-form-data-with-fetch-api
      

      let wformData = new formdata.FormData()
      wformData.set("LoginForm[username_or_email]" , username_or_email);
      wformData.set("LoginForm[password]" , password);
      //wformData.set("rememberMe" , new formdata.Blob(["0","1"]));
      wformData.set("LoginForm[rememberMe]" , "0");
      
      let wformData = new formdata.FormData()
      wformData.set("loginform-username_or_email]" , username_or_email);
      wformData.set("loginform-password" , password);
      //wformData.set("rememberMe" , new formdata.Blob(["0","1"]));
      wformData.set("loginform-rememberme" , "0");


      
      //let wformData = new FormData()
      //wformData.append("LoginForm[username_or_email]" , username_or_email);
      //wformData.append("LoginForm[password]" , password);
      //wformData.append("LoginForm[rememberMe]" , "0");
    

      console.log("Login FormData:", wformData);
      //application/x-www-form-urlencoded
      //multipart/form-data
      const response = await
        fetch(url, {
          method: "POST",
          //headers: {"Content-Type": "application/x-www-form-urlencoded"},
          body: wformData
        })
        console.log("Login response:", response);
      const result = await response.text()
      console.log("login to wenet response text:", result)
      return result
    } catch (e) {
      console.log("error from login to wenet:", e)
      return null;
    }
  }
  exports.loginToWenet = loginToWenet;
 */
