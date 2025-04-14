export default {
  name: "recent_blogs_section",
  title: "Recent Blogs Section",
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
      name: "backward_button",
      title: "Backward Button",
      type: "button",
    },
    {
      name: "forward_button",
      title: "Forward Button",
      type: "button",
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
        title: "Recent Blogs Section",
      };
    },
  },
};
