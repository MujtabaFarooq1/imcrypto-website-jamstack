export default {
  name: "rich_text",
  type: "object",
  fields: [
    {
      name: "content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
  preview : {
    prepare : ()=>{
        return { title : "Rich Text"}
    }
  }
};
