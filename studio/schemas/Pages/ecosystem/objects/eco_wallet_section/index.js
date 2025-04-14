export default {
    name: "eco_wallet_section",
    title: "Wallet Section",
    type: "object",
    fields: [


        {
            name: "wallet_title",
            title: "Wallet Title",
            type: "string",
        },
        {
            name: "wallet_description",
            title: "Wallet Description",
            type: "text",
        },
        {
            name: "wallet_button",
            title: "Wallet Button",
            type: "button",
        },
        {
            name: "wallet_logos",
            title: "Wallet Logos",
            type: "array",
            of: [{ type: "logo" }],
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
    ],

};