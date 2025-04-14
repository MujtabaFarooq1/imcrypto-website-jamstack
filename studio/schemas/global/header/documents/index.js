export default {
  name: "header",
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
      name: "logo_link",
      title: "Logo-Link",
      type: "url",
    },
    {
      name: "navItems",
      title: "Nav-Items",
      type: "array",
      of: [
        {
          type: "other_menu_items",

        },
      ],
    },
    {
      name: "join_button",
      title: "Join Button",
      type: "button",
    },
    {
      name: "download_button",
      title: "Download Button",
      type: "button",
    },
  ],
};
