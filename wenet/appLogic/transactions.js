const transactions = {
   "cannotAnswer":{
      "title":"The student is not able to answer.",
      "type":"object",
      "properties":{
         "reason":{
            "description":"The reason why cannot answer",
            "type":"string",
            "nullable":true
         }
      }
   },
   "needClarification":{
      "title":"The student asks for clarification.",
      "type":"object",
      "properties":{
         "note":{
            "description":"Some more detail.",
            "type":"string",
            "nullable":true
         }
      }
   },
   "notSure":{
      "title":"The student is not sure about the answer.",
      "type":"object",
      "properties":{
         "note":{
            "description":"Some more detail.",
            "type":"string",
            "nullable":true
         }
      }
   },
   "myAnswer":{
      "title":"The student gives the answer.",
      "type":"object",
      "properties":{
         "answer":{
            "description":"The answer",
            "type":"string",
            "nullable":true
         }
      }
   },
   "goToAttachment":{
      "title":"The teacher gives the reference to an attachment the user should watch.",
      "type":"object",
      "properties":{
         "transactionID":{
            "description":"The id of the transaction this one is referred to",
            "type":"string",
            "nullable":true
         },
         "attachment":{
            "description":"The attachment name",
            "type":"string",
            "nullable":true
         }
      }
   },
   "goToTimelinePosition":{
      "title":"The teacher gives the time reference in the Timeline at the position the user should watch.",
      "type":"object",
      "properties":{
         "transactionID":{
            "description":"The id of the transaction this one is referred to",
            "type":"string",
            "nullable":true
         },
         "timelineLink":{
            "description":"The Timeline link",
            "type":"string",
            "nullable":true
         }
      }
   },
   "goToTag":{
      "title":"The teacher gives the reference to a Tag the user should point.",
      "type":"object",
      "properties":{
         "transactionID":{
            "description":"The id of the transaction this one is referred to",
            "type":"string",
            "nullable":true
         },
         "tag":{
            "description":"The Tag name",
            "type":"string",
            "nullable":true
         }
      }
   },
   "rightAnswer":{
      "title":"The teacher informs the student that the answer is correct",
      "type":"object",
      "properties":{
         "transactionID":{
            "description":"The id of the transaction this one is referred to",
            "type":"string",
            "nullable":true
         },
         "message":{
            "description":"The teacher message",
            "type":"string",
            "nullable":true
         }
      }
   },
   "freeAnnotation":{
      "title":"The teacher send to the student an annotation",
      "type":"object",
      "properties":{
         "transactionID":{
            "description":"The id of the transaction this one is referred to",
            "type":"string",
            "nullable":true
         },
         "message":{
            "description":"The teacher message",
            "type":"string",
            "nullable":true
         }
      }
   }
}