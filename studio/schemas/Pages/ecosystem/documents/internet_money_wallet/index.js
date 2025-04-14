import Tabs from "sanity-plugin-tabs";

export default {
  name: "internet_money_wallet",
  title: "Internet Money Wallet",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
    { name: "preview", title: "Preview" },
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
      name: "top_description",
      title: "Top Description",
      type: "text",
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
      name: "section",
      title: "Section",
      type: "array",
      of: [{ type: "eco_hero_section" }, { type: "imw_main_section" }],
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
      name: "seo",
      type: "seo",
      fieldset: "seo",
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
