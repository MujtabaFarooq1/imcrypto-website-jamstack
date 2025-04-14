export default {
  name: "team_section",
  title: "Team Section",
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
      name: "experts",
      title: "Experts",
      type: "array",
      of: [{ type: "team_sections" }],
    },
    {
      name: "button",
      title: "Button",
      type: "button",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Team Section",
      };
    },
  },
};
