export default {
  name: "statistic",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "sub_title",
      title: "SubTitle",
      type: "string",
    },
    {
      name: "coming_soon",
      type: "boolean",
    },
    {
      name: "main_card",
      title: "Main Card",
      type: "internet_money_title",
      hidden: ({ parent }) => parent?.coming_soon,
    },
    {
      name: "other_cards",
      title: "Other cards",
      type: "array",
      of: [{ type: "current_section_text" }],
      hidden: ({ parent }) => parent?.coming_soon,
    },
  ],
  preview: {
    select: {
      title: "title",
      sub_title: "sub_title",
    },
    prepare: ({ title, sub_title }) => {
      return { title : title??sub_title };
    },
  },
};
