export default {
  name: "wallet_type_section",
  title: "Wallet Type Section",
  type: "object",
  fields: [
    {
      name: "wallets",
      title: "Wallets",
      type: "array",
      of: [{type: "reference", to: [{ type: "internet_money_wallet" }, { type: "internet_money_wd" }, { type: "internet_money_im" }] }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Wallet Type Section",
      };
    },
  },
};
