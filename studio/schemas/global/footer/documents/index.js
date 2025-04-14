export default {
  name: "footer",
  type: "document",
  fields: [
    {
      name: "Title",
      title: "Title",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "logo",
    },

    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "nav_label",
      title: "Nav_Label",
      type: "string",
    },
    {
      name: "contact_details",
      title: "Contact-Details",
      type: "contact_details",
    },
    {
      name: "other_menu_items",
      title: "Other Menu Items",
      type: "array",
      of: [{ type: "footer_nav_items" }],
    },

    {
      name: "social_media_logos",
      title: "Social Media Logos",
      type: "array",
      of: [{ type: "footer_logo" }],
    },
    {
      name: "copy_right_text",
      title: "Copy Right Text",
      type: "string",
    },
  ],
};
