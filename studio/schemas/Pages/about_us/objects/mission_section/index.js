export default {
  name: "mission_section",
  title: "Mission Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "sub_title",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "sections",
      title: " Sections",
      type: "array",
      of: [{ type: "extra_sections" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Mission Section",
      };
    },
  },
};
