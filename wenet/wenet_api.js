
const wenet_config = require("../wenet_config");

const WENET_URL = wenet_config.WENET_URL
const APP_ID = wenet_config.APP_ID

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
      //console.log("GET TASKS RESPONSE:", details)
      return details
    } catch (e) {
      console.log("error from server in getTasks:", e)
      return `Error:${e}`
    }
  
  }

  
 exports.getAllTasks = getAllTasks;