export default {
  name: "blog_hero",
  title: "Blog Hero Section",
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
      name: "desc",
      title: "Description",
      type: "string",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Blog Hero Section",
      };
    },
  },
};
