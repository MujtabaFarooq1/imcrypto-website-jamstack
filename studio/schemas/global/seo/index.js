export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'meta_description',
            title: 'Meta Description',
            type: 'text'
        },
        {
            name: 'og_title',
            title: 'Og:Title',
            type: 'string'
        },
        {
            name: 'og_description',
            title: 'Og:Description',
            type: 'text'
        },
        {
            name: 'twitter_card',
            title: 'Twitter:Card',
            type: 'image'
        },
        {
            name: 'twitter_title',
            title: 'Twitter:Title',
            type: 'string'
        },
        {
            name: 'twitter_url',
            title: 'Twitter:Url',
            type: 'url'
        },
        {
            name: 'twitter_description',
            title: 'Twitter:Description',
            type: 'text'
        },
        {
            name: 'twitter_image',
            title: 'Twitter:Image',
            type: 'image'
        },
        {
            name: 'twitter_creator',
            title: 'Twitter:Creator',
            type: 'string'
        }
    ]
}