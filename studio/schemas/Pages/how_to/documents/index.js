import Tabs from 'sanity-plugin-tabs';

export default {
  name: "how_to",
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
