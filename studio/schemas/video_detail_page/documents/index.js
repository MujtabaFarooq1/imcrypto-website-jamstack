import Tabs from 'sanity-plugin-tabs';


export default {
    name: "video_detail_page",
    title: 'Video Detail Page',
    inputComponent: Tabs,
    fieldsets: [
      {name: 'main', title: 'Main'},
      {name: 'seo', title: 'SEO'}
    ],
    type: "document",
    fields: [
        {
            name: "section_title",
            title: "Section Title",
            type: "string",
            fieldset: 'main'
        },
        {
            name: "header",
            title: "Header",
            type: "reference",
            to: [{ type: "header" }],
            fieldset: 'main'
        },
        {
            name: "background_image",
            title: "Background Image",
            type: "image",
            fieldset: 'main'
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            fieldset: 'main'
        },
        {
            name: "url",
            title: "Url",
            type: "url",
            fieldset: 'main'
        },

        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "reference", to: [{ type: "tags" }] }],
            fieldset: 'main'
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            fieldset: 'main'
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: "block" }],
            fieldset: 'main'
        },

        {
            name: "sub_description",
            title: "Preview Description",
            type: "text",
            fieldset: 'main'
        },
        {
            name: "recent_section",
            title: "Recent Section",
            type: "reference",
            to: [{ type: "recent_section" }],
            fieldset: 'main'
        },
        {
            name: "footer",
            title: "Footer",
            type: "reference",
            to: [{ type: "footer" }],
            fieldset: 'main'
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "section_title",
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
            fieldset: 'main'
        },
        {
            name: 'seo',
            type: 'seo',
            fieldset: 'seo'
        },
    ],
};
