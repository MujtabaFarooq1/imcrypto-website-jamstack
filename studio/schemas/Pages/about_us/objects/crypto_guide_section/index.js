export default {
  name: "crypto_guide_section",
  title: "Crypto Guide Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "sub_title",
      title: "Sub Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "video_url",
      title: "Video Url",
      type: "url",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Crypto Guide Section",
      };
    },
  },
};
