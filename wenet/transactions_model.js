
//https://internetofus.github.io/developer/docs/tech/conversation/norms
//is_received_do_transaction(Label,Attributes)
/* User actions
send_user_message(Label,Content) This action posts a callback message 
to the user. If it is done over an active transaction it is stored in it and notify 
the incentive server and the social context builder that the message is sent.
add_created_transaction()
*/

const rialenet_example_tasks = {
    "offset": 0, "total": 2,
    "tasks": [{
        "id": "62a9ff27925841535833b6a1", "_creationTs": 1655308072, "_lastUpdateTs": 1655835879,
        "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671",
        "appId": "xUi1mwCJ0X", "goal": {
            "name": "Primo Task rivolto allo studente Pantera assonnata",
            "description": "Descrizione del primo Task rivolto allo studente Pantera assonnata",
            "keywords": ["social interaction", "lab"]
        }, "norms": [], "attributes": {}, "closeTs": null,
        "communityId": "624703620e5af47df0eed5eb",
        "transactions": [{
            "taskId": "62a9ff27925841535833b6a1", "label": "needClarification",
            "attributes": { "note": "Avrei bisogno di aiuto perchè non ho capito la domanda" },
            "actioneerId": "928", "messages": [], "id": "0", 
            "_creationTs": 1655835879, "_lastUpdateTs": 1655835879
        }]
    }, {
        "id": "62aa04a3925841535833b6a2", "_creationTs": 1655309475, "_lastUpdateTs": 1655835291, 
        "taskTypeId": "62a87b53925841535833b69d", "requesterId": "671", "appId": "xUi1mwCJ0X", "goal": { "name": "Secondo Task da Lupo Solitario a Pantera assonnata", "description": "Descrizione del Secondo Task da Lupo Solitario a Pantera assonnata", "keywords": ["social interaction", "lab"] }, "norms": [], "attributes": {}, "closeTs": null, "communityId": "624703620e5af47df0eed5eb", "transactions": [{
            "taskId": "62aa04a3925841535833b6a2", 
            "label": "CREATE_TASK", "attributes": {}, "actioneerId": "928", "messages": [],
            "id": "0", "_creationTs": 1655835291, "_lastUpdateTs": 1655835291
        }]
    }]
}

// Echo app logic
//https://internetofus.github.io/developer/docs/tech/conversation/app-logic

[
    {
        "whenever": "is_received_do_transaction(Label,Attributes)",
        "thenceforth": "add_created_transaction()"
    },

    {
        "whenever": "is_received_created_task()",
        "thenceforth": "add_created_transaction()"
    },
    {
        "whenever": "is_received_do_transaction('echo',Content) and get_profile_id(Me)",
        "thenceforth": "add_message_transaction() and send_message(Me,'echo',Content)"
    },
    {
        "whenever": "is_received(_,'echo',Content) and get_task_id(TaskId) and get_attribute(Message,message,@(null),Content)",
        "thenceforth": "send_user_message('echo',json([taskId=TaskId,message=Message]))"
    }
]

//https://github.com/InternetOfUs/components-documentation
const c = {
    "comment_on_cannotAnswer": "inserisci un commento",
    "comment_on_needClarification": "Inserisci un commento",
    "comment_on_notSure": "Inserisci un commento",
    "comment_on_myAnswer": "Inserisci la risposta",
    "comment_on_goToAttachment": "Inserisci il nome dell'allegato",
    "comment_on_goToTimelinePosition": "Inserisci il link alla timeline",
    "comment_on_goToTag": "Inserisci il nome del Tag"
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
            "transactionId" : {
                "description" : "The id of the transaction this one is referred to"
            },
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
            "transactionId" : {
                "description" : "The id of the transaction this one is referred to"
            },
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
            "transactionId" : {
                "description" : "The id of the transaction this one is referred to"
            },
            "tag": {
                "description": "The Tag name",
                "type": "string",
                "nullable": true
            }
        }
    }
}


const logNorms = [{
    "description": null,
    "whenever": "is_received_created_task() and get_profile_id(Me)",
    "thenceforth": "add_message_task() and send_message(Me,'log',Content) and send_user_message('log',json([label='task']))",
    "ontology": null
},
{
    "description": null,
    "whenever": "is_received_do_transaction('log',Content) and get_profile_id(Me)",
    "thenceforth": "add_message_transaction() and send_message(Me,'log',Content) and send_user_message('log',json([label='transaction']))",
    "ontology": null
},
{
    "description": null,
    "whenever": "is_received(_,'log',Content) and get_task_id(TaskId) and get_attribute(Message,message,@(null),Content)",
    "thenceforth":
        "send_user_message('log',json([label='lll',taskId=TaskId,message=Message]))",
    "ontology": null
}]
