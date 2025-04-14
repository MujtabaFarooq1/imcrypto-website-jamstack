export default {
  name: "eco_hero_section",
  title: "Hero Section",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
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
      name: "description",
      title: "Description",
      type: 'array',
      of: [
          {
              type: 'block'
          }
      ]
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button'
    },
    {
      name: 'sub_title',
      title: "Sub Title",
      type: "string",
    }
  ],
  preview: {
    prepare() {
        return {
            title: 'Hero Section'
        }
    }
  }
};