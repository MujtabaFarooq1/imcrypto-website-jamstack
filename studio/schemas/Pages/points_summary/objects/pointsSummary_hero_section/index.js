export default {
  name: "poinstsSummary_hero_section",
  title: "Points Summary Hero Section",
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
      type: "string",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Points Summary Hero Section",
      };
    },
  },
};
