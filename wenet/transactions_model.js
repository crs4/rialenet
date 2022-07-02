
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


const transactionFieldMapper = {
    "cannotAnswer": "reason",
    "needClarification": "note",
    "notSure": "note",
    "myAnswer": "answer",
    "goToAttachment": "attachment",
    "goToTimelinePosition": "timelineLink",
    "goToTag": "tag",
    "rightAnswer" : "message",
    "freeAnnotation" : "message"
}

exports.transactionFieldMapper = transactionFieldMapper;

