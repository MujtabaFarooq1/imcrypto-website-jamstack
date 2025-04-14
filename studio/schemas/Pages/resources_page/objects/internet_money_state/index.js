export default {
    name: "internet_money_state",
    title: "Internet_Money_State",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "sub_title",
            title: "Sub_Title",
            type: "string",
        },
        { 
            name: 'internet_money_div',
            title: 'Internet_Money_div',
            type: 'array',
            of: [{type: 'internet_money_title'},],
            
          },
          { 
            name: 'current_text',
            title: 'Current_Text',
            type: 'array',
            of: [{type: 'current_section_text'},],
            
          },
          { 
            name: 'internet_money_text',
            title: 'Internet_Money_Text',
            type: 'array',
            of: [{type: 'internet_money_title'},],
            
          },


    ],
    
};
