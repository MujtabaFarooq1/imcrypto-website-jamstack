export default {
    name: 'faq_section',
    title: 'FAQ_Section',
    type: 'object',
    fields: [
        {
            name: 'section_title',
            title: 'Section Title',
            type: 'string'
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'add_questions',
            title: 'Add Questions',
            type: 'array',
            of: [{ type: 'add_ques' }]
        }
    ]
}