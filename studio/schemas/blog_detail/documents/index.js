import Tabs from 'sanity-plugin-tabs';

export default {
  name: "blog_detail",
  title: 'Blog Detail',
  inputComponent: Tabs,
  fieldsets: [
    {name: 'main', title: 'Main'},
    {name: 'seo', title: 'SEO'}
  ],
  type: "document",
  fields: [
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
      name: "title",
      title: "Title",
      type: "string",
      fieldset: 'main'
    },
    {
      name: "sub_title",
      title: "Sub Title",
      type: "string",
      fieldset: 'main'
    },
    {
      name: "person_image",
      title: "Person Image",
      type: "image",
      fieldset: 'main'
    },
    {
      name: "person_name",
      title: "Person Name",
      type: "string",
      fieldset: 'main'
    },
    {
      name: "date",
      title: "Date",
      type: "string",
      fieldset: 'main'
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      fieldset: 'main'
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fieldset: 'main'
    },
    {
      name: "tag_list",
      title: "Tag List",
      type: "array",
      of: [{ type: "tags_list" }],
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
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "buttons" }],
      fieldset: 'main'
    },
    {
      name: "comment_section",
      title: "Comment Section",
      type: "array",
      of: [{ type: "comment_section" }],
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
