import Tabs from 'sanity-plugin-tabs';

export default {
  name: "ecosystem",
  inputComponent: Tabs,
  fieldsets: [
    {name: 'main', title: 'Main'},
    {name: 'seo', title: 'SEO'}
  ],
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        { type: "ecosystem_section" },
        { type: "wallet_type_section" },
        { type: "recent_blogs_section" },
        { type: "email_section" },
      ],
      fieldset: 'main'
    },
    {
      name: 'email',
      title: 'Show_Email_Section',
      type: 'boolean',
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
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
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
