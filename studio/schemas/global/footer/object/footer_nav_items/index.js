export default {
  name: "footer_nav_items",
  title: "Footer Nav Item",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "target",
      title: "Open In New Tab ?",
      type: "boolean",
    },
    {
      name: "assets",
      title: "Footer File",
      type: "file",
    },
  ],
};
