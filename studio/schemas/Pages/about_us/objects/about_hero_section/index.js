export default {
  name: "about_hero_section",
  title: "About Hero Section",
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

    { name: "left_section", title: "Left Section", type: "image" },

    {
      name: "rs_title",
      title: "Right Section Title",
      type: "string",
    },
    {
      name: "rs_sub_title",
      title: "Right Section Subtitle",
      type: "string",
    },
    {
      name: "rs_description",
      title: "Right Section Description",
      type: "string",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "About Hero Section",
      };
    },
  },
};
