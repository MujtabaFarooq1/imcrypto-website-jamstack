export default {
    name: 'imw_main_section',
    title: 'Main Section',
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
            type: 'text'
        },
        {
            name: 'sub_main_section',
            title: 'Sub Main Section',
            type: 'array',
            of: [{ type: 'sub_main_section' }]
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Main Section'
            }
        }
      }
}