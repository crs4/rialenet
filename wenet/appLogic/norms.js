const norms = [
    {
       "description":null,
       "whenever":"is_received_do_transaction('cannotAnswer',Content) and get_profile_id(Me)",
       "thenceforth":"add_message_transaction() and send_message(Me,'cannotAnswer',Content)",
       "ontology":null
    },
    {
       "description":null,
       "whenever":"is_received_do_transaction('needClarification',Content) and get_profile_id(Me)",
       "thenceforth":"add_message_transaction() and send_message(Me,'needClarification',Content)",
       "ontology":null
    },
    {
       "description":null,
       "whenever":"is_received_do_transaction('notSure',Content) and get_profile_id(Me)",
       "thenceforth":"add_message_transaction() and send_message(Me,'notSure',Content)",
       "ontology":null
    },
    {
       "description":null,
       "whenever":"is_received_do_transaction('myAnswer',Content) and get_profile_id(Me)",
       "thenceforth":"add_message_transaction() and send_message(Me,'myAnswer',Content)",
       "ontology":null
    },
    {
       "description":null,
       "whenever":"is_received_do_transaction('goToAttachment',Content) and get_profile_id(Me)",
       "thenceforth":"add_message_transaction() and send_message(Me,'goToAttachment',Content)",
       "ontology":null
    },
    {
       "description":null,
       "whenever":"is_received_do_transaction('goToTimelinePosition',Content) and get_profile_id(Me)",
       "thenceforth":"add_message_transaction() and send_message(Me,'goToTimelinePosition',Content)",
       "ontology":null
    },
    {
       "description":null,
       "whenever":"is_received_do_transaction('goToTag',Content) and get_profile_id(Me)",
       "thenceforth":"add_message_transaction() and send_message(Me,'goToTag',Content)",
       "ontology":null
    },
    {
       "description":null,
       "whenever":"is_received_do_transaction('rightAnswer',Content) and get_profile_id(Me)",
       "thenceforth":"add_message_transaction() and send_message(Me,'rightAnswer',Content)",
       "ontology":null
    },
    {
       "description":null,
       "whenever":"is_received_do_transaction('freeAnnotation',Content) and get_profile_id(Me)",
       "thenceforth":"add_message_transaction() and send_message(Me,'freeAnnotation',Content)",
       "ontology":null
    }
 ]