export default {
  name: "ecosystem_section",
  title: "Inner-Hero Section",
  type: "object",
  fields: [
    {
      name: "background_image",
      title: "Background Image",
      type: "image",
    },
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
  ],
  preview: {
    prepare() {
      return {
        title: "Inner-Hero Section",
      };
    },
  },
}; 
