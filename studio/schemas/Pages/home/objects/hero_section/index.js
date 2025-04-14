export default {
  name: "hero_section",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "background_image",
      title: "Background Image",
      type: "image",
    },
    {
      name: "mobile_background_image",
      title: "Mobile Background Image",
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
      name: "sub_title_description",
      title: "Subtitle Description",
      type: "string",
    },
    {
      name: "button",
      title: "Button",
      type: "button",
    },

    {
      name: "app_title",
      title: "App Title",
      type: "string",
    },
    {
      name: "app_logos",
      title: "App Logos",
      type: "array",
      of: [{ type: "logo" }],
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
