export default {
  name: "download_wallet_redirect_link",
  title: "Download Wallet Link",
  type: "object",

  fields: [
    {
      name: "linkLabel",
      type: "string",
      title: "Link Lablel",
    },
    {
      name: "fromLink",
      type: "string",
      title: "From Link",
    },
    {
      name: "toLink",
      type: "string",
      title: "To Link",
    },
    {
      name: "icon",
      type: "image",
      title: "Link Icon",
    },
  ],
};
