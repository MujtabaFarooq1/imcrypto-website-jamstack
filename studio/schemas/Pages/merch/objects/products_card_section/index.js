export default {
  name: "products_card_section",
  title: "Products Card Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "search_placeholder",
      title: "Search Placeholder",
      type: "string",
    },
    {
      name: "button",
      title: "Button",
      type: "button",
    },
    {
      name: "sorting_placeholder",
      title: "Sorting Placeholder",
      type: "string",
    },
    {
      name: "down_arrow_button",
      title: "Down Arrow Button",
      type: "image",
    },
    {
      name: "product_card",
      title: "Product Card",
      type: "array",
      of: [{ type: "reference", to: [{ type: "products" }] }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Products Card Section",
      };
    },
  },
};
