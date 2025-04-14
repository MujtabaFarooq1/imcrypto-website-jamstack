export default {
  name: "story_section",
  title: "Story Section",
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
      name: "description",
      title: "Description",
      type: "text",
    },

    {
      name: "story_title",
      title: "Story Title",
      type: "string",
    },
    {
      name: "sub_title",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "story_description",
      title: "Story Description",
      type: "text",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Story Section",
      };
    },
  },
};
