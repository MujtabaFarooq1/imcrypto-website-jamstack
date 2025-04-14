export default {
  name: "merch_blog_section",
  title: "Blog Section",
  type: "object",
  fields: [
    {
      name: "latest_blogs",
      title: "Latest Blogs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blog_detail" }] }],
    },
  ],
  preview: {
    prepare() {
        return {
            title: 'Merch Blog Section'
        }
    }
  }
};