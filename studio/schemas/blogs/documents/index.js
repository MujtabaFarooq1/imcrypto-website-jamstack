export default {
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "blog_image",
      title: "Blog Image",
      type: "image",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "authors" }],
    },
    {
      name: "created_date",
      title: "Created At",
      type: "date",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tags" }] }],
    },

    {
      name: "blog_categories",
      title: "Blog Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "categories" }] }],
    },

    {
      name: "desc",
      title: "Description",
      type: "markdown",
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
    },
  ],
};
