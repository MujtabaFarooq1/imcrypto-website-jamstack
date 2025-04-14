export default {
  name: "products_section",
  title: "Products Section",
  type: "object",
  fields: [
    {
      name: "section_title",
      title: "Section Title",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "view_all_button",
      title: "View All Button",
      type: "button",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Products Section",
      };
    },
  },
};
