export default {
  name: "what_we_do_section",
  title: "About What We Do Section",
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

    { name: "left_section_image", title: "Left Section Image", type: "image" },

    {
      name: "start_now_btn_text",
      title: "Start Now Button Text",
      type: "string",
    },
    {
      name: "start_now_btn_link",
      title: "Start Now Button Link",
      type: "string",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "About What We Do",
      };
    },
  },
};
