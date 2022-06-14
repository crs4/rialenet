
const wenet_config = require("../wenet_config");
const fetch = require("node-fetch");

const WENET_URL = wenet_config.WENET_URL
const APP_ID = wenet_config.APP_ID
const CLIENT_ID = wenet_config.CLIENT_ID
const CLIENT_SECRET = wenet_config.CLIENT_SECRET
const COMMUNITY_ID = wenet_config.COMMUNITY_ID
const TASK_TYPE_ID =  wenet_config.TASK_TYPE_ID //da connettore conversazionale/App logic


const getAllTasks = async (tokens) => {
    console.log(`Richiamo getAllTasks() con accessToken:${tokens.access_token}`);
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
      console.log("GET TASKS RESPONSE:", details)
      return details
    } catch (e) {
      console.log("error from server in getTasks:", e)
      return `Error:${e}`
    }
  }

  const getUserProfile = async (wenetUserId,tokens) => {
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
      return `Error:${e}`
    }
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
        "taskTypeId": TASK_TYPE_ID, //  "626a6745925841535833b638",
        "appId": APP_ID, //"GOJt2zQA6B",
        "communityId": COMMUNITY_ID,    //"624594390e5af47df0eed5ea",
        "requesterId": external_id, //"528",
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
  

  
 exports.getAllTasks = getAllTasks;
 exports.getAppUsers = getAppUsers;
 exports.getUserProfile = getUserProfile;
 exports.createNewTask = createNewTask;
 exports.requestToken = requestToken;