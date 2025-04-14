export default {
    name : "subscriber",
    title : "Subscriber",
    type : "document",
    __experimental_actions: [/*'create',*/ /*'update',*/ 'delete', 'publish'], 
    fields : [
        {
            name : 'email',
            type : "string"
        }
    ]
}