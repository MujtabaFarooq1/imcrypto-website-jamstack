export default {
  name: "email_section",
  title: "Email Section",
  type: "object",
  fields: [
    {
      name: "background_image",
      title: "Background Image",
      type: "image",
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
      name: "placeholder",
      title: "Placeholder",
      type: "string",
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
        title: "Email Section",
      };
    },
  },
};
