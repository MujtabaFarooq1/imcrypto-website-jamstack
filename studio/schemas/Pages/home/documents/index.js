import Tabs from 'sanity-plugin-tabs';

export default {
  name: "home",
  title: "Home",
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
        { type: "hero_section" },
        { type: "purpose_section" },
        { type: "features_section" },
        { type: "guides_section" },
        { type: "products_section" },
        {type: "blogs_section"},
        { type: "faq_section" },
        { type: "email_box_section" },
      ],
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
