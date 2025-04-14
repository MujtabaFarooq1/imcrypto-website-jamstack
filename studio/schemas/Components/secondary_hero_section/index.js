export default {
  name: "secondary_hero_section",
  title: "Hero Section",
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
    select: {
      title: "title",
    },
  },
};
