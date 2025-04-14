export default {
  name: "blackpaper_gallery",
  title: "Black Paper Gallery Section",
  type: "object",
  fields: [
    {
      name: "im_title",
      title: "IM Blackpaper Title",
      type: "string",
    },

    {
      name: "im_subtitle",
      title: "IM Blackpaper Subtitle",
      type: "string",
    },
    {
      name: "im_thumb",
      title: "IM Blackpaper Thumbnail",
      type: "image",
    },
    {
      name: "im_btn",
      title: "IM CA Button",
      type: "button",
    },

    {
      name: "wd_title",
      title: "WD Blackpaper Title",
      type: "string",
    },

    {
      name: "wd_subtitle",
      title: "WD Blackpaper Subtitle",
      type: "string",
    },
    {
      name: "wd_thumb",
      title: "WD Blackpaper Thumbnail",
      type: "image",
    },
    {
      name: "wd_btn",
      title: "WD CA Button",
      type: "button",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Black Gallery Section",
      };
    },
  },
};
