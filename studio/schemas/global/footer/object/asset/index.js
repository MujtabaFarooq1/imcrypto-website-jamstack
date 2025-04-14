export default {
    name: 'asset_item',
    title : 'Asset',
    type: 'object',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string'
        },
        {
            name: 'file',
            title: 'File',
            type: 'file'
        },
    ],
    preview: {
        select: {
          title: 'label'
        },
    }
}