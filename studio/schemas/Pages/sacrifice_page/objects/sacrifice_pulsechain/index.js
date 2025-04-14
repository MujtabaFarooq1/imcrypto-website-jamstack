export default {
  name: "sarifice_pulsechain",
  title: "Sacrifice Pulsechain Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "button_text",
      title: "Button Text",
      type: "string",
    },
    {
      name: "button_link",
      title: "Button Link",
      type: "string",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Sacrifice Pulsechain Section",
      };
    },
  },
};
