import Tabs from 'sanity-plugin-tabs';

export default {
  name: "about_us",
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
        { type: "story_section" },
        { type: "about_hero_section" },
        { type: "mission_section" },
        { type: "act_section" },
        { type: "crypto_guide_section" },
        { type: "team_section" },
        { type: "articles_section" },
        { type: "what_we_do_section" },
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
