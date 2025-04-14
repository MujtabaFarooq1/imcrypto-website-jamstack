export default {
  name: "blackpaper_hero",
  title: "Black Paper Hero Section",
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
  ],
  preview: {
    prepare() {
      return {
        title: "Black Paper Hero Section",
      };
    },
  },
};
