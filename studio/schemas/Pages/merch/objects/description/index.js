export default {
    name: "description_card",
    type: "object",
    fields: [
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }]
        },
    ]
}