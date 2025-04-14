export default {
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'category_name',
            title: 'Category Name',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'category_name',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                .toLowerCase()
                .replace(/\s+/g, '-')
                .slice(0, 200)
            },
            validation: Rule => Rule.required()
          }
    ]

}