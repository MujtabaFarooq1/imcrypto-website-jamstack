export default {
  name: "sacrifice_what_are_details_section",
  title: "What Are Details Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "markdown",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "What Are Details Section",
      };
    },
  },
};
