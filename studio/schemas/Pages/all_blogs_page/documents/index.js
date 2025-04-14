export default {
  name: "all_blogs_page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "blog_hero" }],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input?.toLowerCase()?.replace(/\s+/g, "-")?.slice(0, 200) || "blogs",
      },
    },
  ],
};
