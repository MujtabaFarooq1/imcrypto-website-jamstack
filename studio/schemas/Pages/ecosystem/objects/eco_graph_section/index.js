export default {
    name: "eco_graph_section",
    title: "Eco Graph Section",
    type: "object",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "button",
            title: "Button",
            type: 'array',
            of: [{ type: "button", }]
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Eco Graph Section'
            }
        }
    }
};