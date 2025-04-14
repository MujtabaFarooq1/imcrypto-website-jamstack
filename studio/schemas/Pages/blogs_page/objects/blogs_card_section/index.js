export default {
  name: "blogs_card_section",
  title: "Blogs Card Section",
  type: "object",
  fields: [
    {
      name: "blog_cards",
      title: "Blog Cards",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blog_detail" }] }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Blogs Card Section",
      };
    },
  },
};
