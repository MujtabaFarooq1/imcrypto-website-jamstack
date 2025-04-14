export default {
    name: "statistics_page",
    title: 'Statistics Page',
    type: "document",
    __experimental_actions : ["update", "publish"],
    fields: [
        {
            name: "section_title",
            title: "Section Title",
            type: "string",
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name : 'statistics',
            type : 'array',
            of : [{ type :'statistic'}]
        },
        {
            name: "sub_title",
            title: "Sub_Title",
            type: "string"
        },
        {
            name: 'contact_address',
            title: 'Contact Address',
            type: 'internet_money_title'
        },
        {
            name: 'current_card',
            title: 'Current Card',
            type: 'array',
            of: [{ type: 'current_section_text' }]

        },
        {
            name: 'total_liquidity',
            title: 'Total Liquidity',
            type: 'internet_money_title'
        },
        {
            name: 'title_subtitle',
            title: 'Title Subtitle',
            type: 'array',
            of: [{ type: 'internet_money_title' }]

        }
    ],
};