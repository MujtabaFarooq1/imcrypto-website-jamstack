export default {
  name: "product_card",
  type: "object",
  fields: [
    { name: "image", title: "Image", type: "image" },
    {
      name: "stars",
      title: "Stars",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "qty",
      title: "QTY",
      type: "string",
    },
    {
      name: "number",
      title: "Number",
      type: "string",
    },
    {
      name: "qty_increment_button",
      title: "QTY Increment Button",
      type: "button",
    },
    {
      name: "qty_decrement_button",
      title: "QTY Decrement Button",
      type: "button",
    },
    {
      name: "add_to_cart_button",
      title: "Add To Cart Button",
      type: "button",
    },
    {
      name: "card_sub_object",
      title: "Card Sub Object",
      type: "array",
      of: [{ type: "card_sub_object" }],
    },
  ],
};
