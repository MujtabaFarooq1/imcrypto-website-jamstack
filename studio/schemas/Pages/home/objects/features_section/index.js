export default {
  name: "features_section",
  title: "Features Section",
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
      name: "section",
      title: "Section",
      type: "array",
      of: [{ type: "sections" }],
    },
    {
      name: "sub_section_title",
      title: "Sub Section Title",
      type: "string",
    },
    {
      name: "sub_title",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "sub_description",
      title: "Sub Description",
      type: "text",
    },
    {
      name: "sub_sections",
      title: "Sub Sections",
      type: "array",
      of: [{ type: "sub_sections" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Features Section",
      };
    },
  },
};
