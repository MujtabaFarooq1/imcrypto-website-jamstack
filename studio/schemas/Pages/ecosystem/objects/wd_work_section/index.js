export default {
    name: "wd_work_section",
    title: "WD Work Section",
    type: "object",
    fields: [


        {
            name: "section_title",
            title: "Section Title",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "description_cards",
            title: "Description Cards",
            type: "array",
            of: [{ type: 'description_card_array' }]
        },


    ],

};