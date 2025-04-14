export default {
  name: "other_menu_items",
  title: "Nav Item",
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
      hidden: ({ document, parent, ...props }) => {
        const assets =
          document?.navItems?.find((i) => i._key === parent._key)?.assets || [];
        return assets?.length > 0;
      },
    },
    {
      name: "target",
      title: "Open In New Tab ?",
      type: "boolean",
    },
    {
      name: "assets",
      title: "Assets",
      type: "array",
      hidden: ({ document, parent }) => {
        const link =
          document?.navItems?.find((i) => i._key === parent._key)?.link || null;
        return !["header"].includes(document?._type || "") || link?.length > 0;
      },
      of: [
        {
          type: "asset_item",
        },
      ],
    },
  ],
};
