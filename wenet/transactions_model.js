
//https://github.com/InternetOfUs/components-documentation
 const c = {
    "comment_on_cannotAnswer" : "inserisci un commento",
    "comment_on_needClarification" : "Inserisci un commento",
    "comment_on_notSure" : "Inserisci un commento",
    "comment_on_myAnswer" : "Inserisci la risposta",
    "comment_on_goToAttachment" : "Inserisci il nome dell'allegato",
    "comment_on_goToTimelinePosition" : "Inserisci il link alla timeline",
    "comment_on_goToTag" : "Inserisci il nome del Tag"
 }


""
const transactionFieldMapper = {
    "cannotAnswer": "note",
    "needClarification": "note",
    "notSure": "note",
    "myAnswer": "answer",
    "goToAttachment": "attachment",
    "goToTimelinePosition": "timelineLink",
    "goToTag": "tag"
}

exports.transactionFieldMapper = transactionFieldMapper;

const model = {
    "cannotAnswer": {
        "title": "The student is not able to answer.",
        "type": "object",
        "properties": {
            "reason": {
                "description": "The reason why cannot answer",
                "type": "string",
                "nullable": true
            }
        }
    },

    "needClarification": {
        "title": "The student asks for clarification.",
        "type": "object",
        "properties": {
            "note": {
                "description": "Some more detail.",
                "type": "string",
                "nullable": true
            }
        }
    },

    "notSure": {
        "title": "The student is not sure about the answer.",
        "type": "object",
        "properties": {
            "note": {
                "description": "Some more detail.",
                "type": "string",
                "nullable": true
            }
        }
    },
    "myAnswer": {
        "title": "The student gives the answer.",
        "type": "object",
        "properties": {
            "answer": {
                "description": "The answer",
                "type": "string",
                "nullable": true
            }
        }
    },


    "goToAttachment": {
        "title": "The teacher gives the reference to an attachment the user should watch.",
        "type": "object",
        "properties": {
            "attachment": {
                "description": "The attachment name",
                "type": "string",
                "nullable": true
            }
        }
    },

    "goToTimelinePosition": {
        "title": "The teacher gives the time reference in the Timeline at the position the user should watch.",
        "type": "object",
        "properties": {
            "timelineLink": {
                "description": "The Timeline link",
                "type": "string",
                "nullable": true
            }
        }
    },

    "goToTag": {
        "title": "The teacher gives the reference to a Tag the user should point.",
        "type": "object",
        "properties": {
            "tag": {
                "description": "The Tag name",
                "type": "string",
                "nullable": true
            }
        }
    }
}


const logNorms = [{ "description": null, 
"whenever": "is_received_created_task() and get_profile_id(Me)", 
"thenceforth": "add_message_task() and send_message(Me,'log',Content) and send_user_message('log',json([label='task']))", 
"ontology": null },
{ "description": null, 
"whenever": "is_received_do_transaction('log',Content) and get_profile_id(Me)", 
"thenceforth": "add_message_transaction() and send_message(Me,'log',Content) and send_user_message('log',json([label='transaction']))", 
"ontology": null }, 
{ "description": null, 
"whenever": "is_received(_,'log',Content) and get_task_id(TaskId) and get_attribute(Message,message,@(null),Content)", 
"thenceforth": 
"send_user_message('log',json([label='lll',taskId=TaskId,message=Message]))", 
"ontology": null }]
