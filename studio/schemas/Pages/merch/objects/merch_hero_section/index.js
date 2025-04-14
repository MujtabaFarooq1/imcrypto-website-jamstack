export default {
  name: "merch_hero_section",
  title: "Merch Hero Section",
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
      name: "sub_title",
      title: "Sub Title",
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
        title: "Hero Section",
      };
    },
  },
};
