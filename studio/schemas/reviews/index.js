export default {
    name : "product_review",
    title : "Review",
    type : "document",
    __experimental_actions: [/*'create',*/ /*'update',*/ 'delete', 'publish'], 
    fields : [
        {
            name : 'name',
            type : "string"
        },
        {
            name : 'message',
            type : "string"
        },
        {
            name : 'email',
            type : "string"
        },
        {
            name : 'rating',
            type : "number"
        },
        {
            name : 'date',
            title : 'Date',
            type : 'date'
        },
        {
            name: 'item_slug',
            type: 'string'
        }
    ]
}