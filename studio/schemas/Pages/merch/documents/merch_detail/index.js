import Tabs from 'sanity-plugin-tabs';

export default {
  name: "products",
  title: "Products",
  inputComponent: Tabs,
  fieldsets: [
    {name: 'main', title: 'Main'},
    {name: 'seo', title: 'SEO'}
  ],
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: 'main'
    },
    {
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
      fieldset: 'main'
    },
    // {
    //   name: "product_card",
    //   title: "Product Card",
    //   type: "array",
    //   of: [{ type: "product_card" }],
    // },
    {
      name: "background_image",
      title: "Background Image",
      type: "image",
      fieldset: 'main'
    },
    {
      name: "product_card",
      title: "Product Card",
      type: "product_card",
      fieldset: 'main'
    },
    // {
    //     name:'cart_card',
    //     title:'Cart Card',
    //     type:'array',
    //     of:[{type:"cart_card"}]
    // },
    // {
    //     name:'filter_card',
    //     title:'Filter Card',
    //     type:'array',
    //     of:[{type:"filter_card"}]
    // },
    {
      name: "description_button",
      title: "Description Button",
      type: "button",
      fieldset: 'main'
    },
    {
      name: "reviews_button",
      title: "Reviews Button",
      type: "button",
      fieldset: 'main'
    },
    {
      name: "description_card",
      title: "Description Card",
      type: "array",
      of: [{ type: "description_card" }],
      fieldset: 'main'
    },
    {
      name: "categories",
      title: "Categories",
      type: "reference",
      to: [{ type: "categories" }],
      fieldset: 'main'
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tags" }] }],
      fieldset: 'main'
    },
    {
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      fieldset: 'main'
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      fieldset: 'main'
    },
    {
      name: 'seo',
      type: 'seo',
      fieldset: 'seo'
    },
  ],
};
