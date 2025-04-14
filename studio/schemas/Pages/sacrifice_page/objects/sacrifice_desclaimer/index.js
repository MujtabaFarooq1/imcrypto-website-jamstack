export default {
  name: "sarifice_desclaimer",
  title: "Sacrifice Desclaimer Section",
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
  ],
  preview: {
    prepare() {
      return {
        title: "Sacrifice Desclaimer Section",
      };
    },
  },
};
