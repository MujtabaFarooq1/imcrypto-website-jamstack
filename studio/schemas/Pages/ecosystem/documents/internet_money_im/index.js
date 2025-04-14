import Tabs from "sanity-plugin-tabs";

export default {
  name: "internet_money_im",
  title: "Internet Money (IM)",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
    { name: "preview", title: "Preview" }
  ],
  type: "document",
  fields: [
    {
      name: "page_title",
      title: "Page Title",
      type: "string",
      fieldset: "main",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "main",
    },
    {
      name: "top_btn",
      title: "Top Button",
      type: "button",
      fieldset: "main",
    },
    {
      name: "top_description",
      title: "Top Description",
      type: "text",
      fieldset: "main",
    },

    {
      name: "sections",
      title: "Section",
      type: "array",
      of: [
        { type: "eco_hero_section" },
        { type: "eco_graph_section" },
        { type: "eco_wallet_section" },
      ],
      fieldset: "main",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fieldset: "main",
    },
    {
      name: "background_image",
      title: "Background Image",
      type: "image",
      fieldset: "main",
    },
    {
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
      fieldset: "main",
    },
    {
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      fieldset: "main",
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
      fieldset: "main",
    },
    {
      name: "seo",
      type: "seo",
      fieldset: "seo",
    },
    {
      name: "preview_title",
      title: "Title (Preview)",
      type: "string",
      fieldset: "preview",
    },
    {
      name: "preview_description",
      title: "Description (Preview)",
      type: "rich_text",
      fieldset: "preview",
    },
    {
      name: "preview_button",
      title: "Button Label (Preview)",
      type: "string",
      fieldset: "preview",
    },
    {
      name: "coming_soon",
      title: "Coming Soon",
      type: "boolean",
      fieldset: "preview",
    },
  ],
};
