export default {
  name: "guides_section",
  title: "Guides Section",
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
      name: "sections",
      title: "Sections",
      type: "array",
      of: [{ type: "options" }],
    },
    {
      name: "view_button",
      title: "View Button",
      type: "button",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Guides Section",
      };
    },
  },
};
