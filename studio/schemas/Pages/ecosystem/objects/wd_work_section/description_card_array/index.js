export default {
  name: "description_card_array",
  title: "Description Card Array",
  type: "object",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};