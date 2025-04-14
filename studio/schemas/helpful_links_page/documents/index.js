export default {
    name: "helpful_links_page",
    title: 'Helpful Links Page',
    type: "document",
    fields: [
        {
            name: "section_title",
            title: "Section Title",
            type: "string"
        },
        {
            name: "background_image",
            title: "Background Image",
            type: "image",
        },
        {
            name: "title",
            title: "Title",
            type: "title_link"

        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "reference", to: [{ type: "tags" }] }],
        },
    ],
};