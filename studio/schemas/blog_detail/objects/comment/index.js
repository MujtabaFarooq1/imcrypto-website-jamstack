export default {
  name: "comment_section",
  title: "Comment Section",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "comment_title",
      title: "Comment Title",
      type: "string",
    },
    {
      name: "comment_description",
      title: "Comment Description",
      type: "text",
    },
    {
      name: "name_title",
      title: "Name Title",
      type: "string",
    },
    {
      name: "name_content",
      title: "Name Content",
      type: "string",
    },
    {
      name: "email_title",
      title: "Email Title",
      type: "string",
    },
    {
      name: "email_content",
      title: "Email Content",
      type: "string",
    },
    {
      name: "website_title",
      title: "Website Title",
      type: "string",
    },
    {
      name: "website_content",
      title: "Website Content",
      type: "url",
    },
    {
      name: "save_my_name_email_and_website_in_this_browser_for_the_next_time_i_comment",
      title:
        "Save my name email and website in this browser for the next time I comment",
      type: "boolean",
    },
    {
      name: "post_button",
      title: "Post Button",
      type: "button",
    },
  ],
};
