require("dotenv").config();
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KWJQLFK",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.3.3",
        publicApiKey:
          "MDZiOTdhZGUtYWQ4MC00ODE0LWIyOGEtODI1NWM5MDE3ODNhNjM4MDEwNDU0MTM2MTExNzk5", // use public api key here or in environment variable
        defaultLang: "en",
        currency: "usd",
        openCartOnAdd: true,
        useSideCart: true,
        // autopop: false,
        // be careful with this mode cart. The cart in this mode has a bug of scroll in firefox
        locales: {
          fr: {
            actions: {
              checkout: "Checkout",
            },
          },
        },
        templatesUrl: "/templates/snipcart-checkout.html",
        // "path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
        // not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
        // innerHTML: `
        //     <billing>
        //         <!-- The template must have a single root element -->
        //         <div class="root">
        //             <h2>Custom Item Line</h2>
        //             <div>This is my overridden item-line template.</div>
        //         </div>
        //     </billing>`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_PROJECT_DATASET,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: process.env.NODE_ENV === "development",
      },
    },
    "gatsby-background-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Sanity Homepage",
        short_name: "Internet Money",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
    // Full configuration:
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: "abcd1234",
        dataset: "production",

        // Additional params to include with every image.
        // This is optional and the default is shown
        // below—if you like what you see, don’t set it.
        defaultImageConfig: {
          quality: 100,
          // fit: "max",
          // auto: "format",
        },

        // If you prefer a different fragment name, such
        // as `MagicImage`, enter it here. This needs to
        // be unique your GraphQL types. `WithPreview`
        // will be appended for the second fragment (e.g.
        // MagicImageWithPreview).
        fragmentName: "Image",

        // By default, image fields are typed as SanityImage,
        // but there are cases where you might want to use
        // a custom schema or where custom image types are
        // not under the SanityImage type. In this case, you
        // can alter the type that the fragment is defined
        // on here without redefining the fragments.
        fragmentTypeName: "SanityImage",

        // If you prefer to retreive data another way or
        // if you want to define the fragment you use
        // separately, you can opt-out of having fragments
        // included entirely.
        includeFragments: true,

        // This config directive allows you to specify the
        // field that should be retrieved and used as alt
        // text when no `alt` prop is passed to the image
        // component. See docs for more detail.
        altFieldName: "alt",

        // Custom image types are also supported; refer to
        // full documentation for usage instructions.
        customImageTypes: [],
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://imaginovation.us14.list-manage.com/subscribe/post?u=679f5f8a6b630f2c78882365f&amp;id=29f4b98aed&amp;f_id=0076ace0f0", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-client-side-redirect`, // keep it in last in list
  ],
  siteMetadata: {
    // If you didn't use the resolveSiteUrl option this needs to be set
    siteUrl: `https://imcrypto-website-jamstack--development-pirkhe0l.web.app`,
  },
};
