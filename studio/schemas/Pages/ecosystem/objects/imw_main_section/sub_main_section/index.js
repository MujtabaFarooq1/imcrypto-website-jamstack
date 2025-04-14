export default {
    name: 'sub_main_section',
    title: 'Sub Main Section',
    type: 'object',
    fields: [
        {
            name: 'background_image',
            title: 'Background Image',
            type: 'image'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
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
            name: 'button',
            title: 'Button',
            type: 'button'
        },
        {
            name: 'logos',
            title: 'Logos',
            type: 'array',
            of: [{ type: 'logo' }]
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Sub Main Section'
            }
        }
      }
}