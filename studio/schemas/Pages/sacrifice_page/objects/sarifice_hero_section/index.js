export default {
  name: "sarifice_hero_section",
  title: "Sacrifice Hero Section",
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
      name: "left_asset",
      title: "Left Image",
      type: "image",
    },
    {
      name: "right_asset",
      title: "Right Image",
      type: "image",
    },
    {
      name: "begins_title",
      title: "Sacrifice Begins Title",
      type: "string",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Sacrifice Hero Section",
      };
    },
  },
};
