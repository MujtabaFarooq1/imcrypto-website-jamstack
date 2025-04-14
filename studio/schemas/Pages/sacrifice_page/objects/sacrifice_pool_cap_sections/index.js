export default {
  name: "sacrifice_pool_cap_sections",
  title: "Sacrifice Pool Cap Section",
  type: "object",
  fields: [
    {
      name: "Pool_a_title",
      title: "Pool A Title",
      type: "string",
    },
    {
      name: "Pool_a_cap_value",
      title: "Pool A Cap Value",
      type: "string",
    },
    {
      name: "Pool_a_cap_percentage",
      title: "Pool A Cap Percentage Text",
      type: "string",
    },
    {
      name: "Pool_a_desc",
      title: "Pool A Description",
      type: "string",
    },

    {
      name: "Pool_b_title",
      title: "Pool B Title",
      type: "string",
    },
    {
      name: "Pool_b_cap_value",
      title: "Pool B Cap Value",
      type: "string",
    },
    {
      name: "Pool_b_cap_percentage",
      title: "Pool B Cap Percentage Text",
      type: "string",
    },
    {
      name: "Pool_b_desc",
      title: "Pool B Description",
      type: "string",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Sacrifice Pool Cap Section",
      };
    },
  },
};
