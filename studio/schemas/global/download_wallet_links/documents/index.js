export default {
  name: "download_wallet_links",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },

    {
      name: "links",
      title: "Download Wallet Link",
      type: "array",
      of: [
        {
          type: "download_wallet_redirect_link",
        },
      ],
    },
  ],
};
