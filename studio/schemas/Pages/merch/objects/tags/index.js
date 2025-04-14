export default {
  name: "tags_card",
  type: "object",
  fields: [
    {
      name: "tags_title",
      title: "Tags Title",
      type: "string",
    },
    {
      name: "list_of_tags",
      title: "List Of Tags",
      type: "array",
      of: [{ type: "taglist" }],
    },
  ],
};
