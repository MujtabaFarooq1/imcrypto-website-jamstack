export default {
  name: "purpose_section",
  title: "Purpose Section",
  type: "object",
  fields: [
    {
      name: "background_image",
      title: "Background_Image",
      type: "image",
    },
    {
      name: "section_title",
      title: "Section Title",
      type: "string",
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
      name: "section_button",
      title: "Section Button",
      type: "button",
    },

    {
      name: "wallet_title",
      title: "Wallet Title",
      type: "string",
    },
    {
      name: "wallet_description",
      title: "Wallet Description",
      type: "text",
    },
    {
      name: "wallet_button",
      title: "Wallet Button",
      type: "button",
    },
    {
      name: "wallet_logos",
      title: "Wallet Logos",
      type: "array",
      of: [{ type: "logo" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Purpose Section",
      };
    },
  },
};
