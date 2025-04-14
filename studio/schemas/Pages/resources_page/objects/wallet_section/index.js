export default {
    name: "wallet_section_details",
    title: "wallet_Section_Details",
    type: "object",
    fields: [
        {
            title: 'Names',
            name: 'names',
            type: 'array',
            of: [{type: 'wallet_section'}]
          }
    ]
}