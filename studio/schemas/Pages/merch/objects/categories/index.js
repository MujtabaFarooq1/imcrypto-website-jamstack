export default{
    name:"product_categories",
    type:"object",
    fields:[
        {
            name:"product_categories_title",
            title:"Product Categories Title",
            type:"string"
        },
        {
            name:"list_of_categories",
            title:"List Of Categories",
            
            type:"array",
            of:[{type:"categories_list"}]
        }
    ]
}