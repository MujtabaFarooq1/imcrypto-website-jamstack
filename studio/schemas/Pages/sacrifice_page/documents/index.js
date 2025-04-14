import Tabs from 'sanity-plugin-tabs';

export default {
  name: "sacrifice_page",
  type: "document",
  inputComponent: Tabs,
  fieldsets: [
    {name: 'main', title: 'Main'},
    {name: 'seo', title: 'SEO'}
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: 'main'
    },
    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        { type: "sarifice_desclaimer" },
        { type: "sarifice_pulsechain" },
        { type: "sarifice_hero_section" },
        { type: "sacrifice_what_are_details_section" },
        { type: "sacrifice_pool_cap_sections" },
      ],
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
