export default {
  name: "act_section",
  title: "Act Section",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "img_sections" }],
    },
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
      name: "button",
      title: "Button",
      type: "button",
    },
    {
      name: "user_status",
      title: "User Status",
      type: "array",
      of: [{ type: "status_sections" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Act Section",
      };
    },
  },
};
