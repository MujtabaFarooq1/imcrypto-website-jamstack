export default {
  name: "authors",
  title: "Authors",
  type: "document",
  fields: [
    {
      name: "author_name",
      title: "Author Name",
      type: "string",
    },
    {
      name: "author_image",
      title: "Author Image",
      type: "image",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "author_name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
