const path = require("path");
const sanityBlockContentToHTML = require("@sanity/block-content-to-html");
const { paginate } = require("gatsby-awesome-pagination");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  // const walletLinksData = await graphql(`
  //   {
  //     allSanityDownloadWalletLinks {
  //       edges {
  //         node {
  //           links {
  //             fromLink
  //             toLink
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const downloadWalletLinks =
  //   walletLinksData?.allSanityDownloadWalletLinks?.edges?.node?.links;
  // console.clear();
  // console.log("download links is ", downloadWalletLinks);

  // if (downloadWalletLinks) {
  //   downloadWalletLinks.map(({ fromLink, toLink }) =>
  //     createRedirect({
  //       fromPath: fromLink,
  //       toPath: toLink,
  //       isPermanent: true,
  //       redirectInBrowser: false,
  //     })
  //   );
  // }

  // Wallet Redirects ======================================
  createRedirect({
    fromPath: `/ios`,
    toPath: `https://testflight.apple.com/join/IDmg8YQd`,
    isPermanent: true,
    redirectInBrowser: false,
  });

  createRedirect({
    fromPath: `/android`,
    toPath: `https://play.google.com/store/apps/details?id=com.internetmoneywallet.app`,
    isPermanent: true,
    redirectInBrowser: false,
  });

  createRedirect({
    fromPath: `/chrome`,
    toPath: `https://chrome.google.com/webstore/detail/internet-money-crypto-wal/ckklhkaabbmdjkahiaaplikpdddkenic`,
    isPermanent: true,
    redirectInBrowser: false,
  });

  // ==================================================================
  // ==================================================================
  // ==================================================================

  const merchTemplate = path.resolve("./src/templates/merch-template.js");
  const ecosystemTemplate = path.resolve(
    "./src/templates/ecosystem-template.js"
  );
  const aboutUsPageTemplate = path.resolve("./src/templates/about-us.js");
  const pointsSummaryTemplate = path.resolve(
    "./src/templates/points-summary.js"
  );
  const sacrificePageTemplate = path.resolve(
    "./src/templates/sacrifice-page.js"
  );

  const im_wallet_template = path.resolve(
    "./src/templates/imwallet-template/index.js"
  );
  const internetMoneyIMTemplate = path.resolve(
    "./src/templates/internet-money-im-template/index.js"
  );
  const internetMoneyWDTemplate = path.resolve(
    "./src/templates/internet-money-wd-template/index.js"
  );
  const merchDetailTemplate = path.resolve(
    "./src/templates/merchDetailTemplate.js"
  );
  const videoDetailTemplate = path.resolve(
    "./src/templates/video-detail-template.js"
  );
  const articleDetailTemplate = path.resolve(
    "./src/templates/articles-detail-template.js"
  );
  const resourceTemplate = path.resolve(
    "./src/templates/resources-template.js"
  );

  const resources = await graphql(`
    {
      allSanityResourcesPage {
        edges {
          node {
            title
            seo {
              title
              og_title
              og_description
              meta_description
              _type
              twitter_creator
              twitter_description
              twitter_title
              twitter_url
              twitter_card {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
              twitter_image {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            header {
              logo_link
              navItems {
                label
                link
                _key
                assets {
                  file {
                    asset {
                      url
                    }
                  }
                  label
                  _key
                }
              }
              join_button {
                button_label
                button_link
              }
              download_button {
                button_label
                button_link
              }
              logo {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            footer {
              logo {
                asset {
                  url
                  alt
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              description
              nav_label
              contact_details {
                email_id
                link
              }
              id
              social_media_logos {
                image {
                  asset {
                    gatsbyImageData(
                      formats: WEBP
                      placeholder: NONE
                      layout: FULL_WIDTH
                    )
                  }
                }
                logo_link
              }
              other_menu_items {
                label
                link
                _key
                assets {
                  asset {
                    url
                  }
                }
              }
              copy_right_text
            }
            slug {
              current
            }
            sections {
              _type
              title
              sub_title
              description
              background_image {
                asset {
                  gatsbyImageData(formats: AUTO, placeholder: NONE)
                }
              }
            }
          }
        }
      }
    }
  `);

  // Black Paper Stuff --------------------

  const blackPaperTemplate = path.resolve("./src/templates/blackpaper.js");
  const blackPaperPageData = await graphql(`
    {
      allSanityBlackpaper {
        edges {
          node {
            slug {
              _key
              _type
              current
            }
            _id
          }
        }
      }
    }
  `);

  const blackPaperPages = blackPaperPageData?.data?.allSanityBlackpaper?.edges;

  blackPaperPages.forEach((entry) => {
    const slug = entry?.node?.slug?.current;

    const page = {
      path: `/${slug}`,
      component: blackPaperTemplate,
      context: {
        data: entry?.node,
      },
    };

    createPage(page);
  });

  //-------------------------------------------

  // All Blogs Page Stuff --------------------------
  const allBlogsPageTemplate = path.resolve("./src/templates/allblogs.js");
  const allBlogsPageData = await graphql(`
    {
      allSanityBlogsPage {
        edges {
          node {
            slug {
              _key
              _type
              current
            }
            _id
          }
        }
      }
    }
  `);

  const allBlogsPage = allBlogsPageData?.data?.allSanityBlogsPage?.edges;

  allBlogsPage.forEach((entry) => {
    const slug = entry?.node?.slug?.current;

    const page = {
      path: `/${slug}`,
      component: allBlogsPageTemplate,
      context: {
        data: entry?.node,
      },
    };

    createPage(page);
  });

  //-------------------------------------------

  // All Blogs Details Pages Stuff ------------
  const blogDetailsTemplate = path.resolve(
    "./src/templates/blog-detail-template.js"
  );
  const allBlogDetailsPagesData = await graphql(`
    {
      allSanityBlogs {
        edges {
          node {
            slug {
              _key
              _type
              current
            }
            _id
            title
            desc
            blog_image {
              asset {
                gatsbyImageData
              }
            }
            created_date
            tags {
              tag_name
            }
            author {
              author_name
              author_image {
                asset {
                  gatsbyImageData
                }
              }
              slug {
                current
              }
            }
            blog_categories {
              category_name
              slug {
                _key
                _type
                current
              }
            }
          }
        }
      }
    }
  `);

  const allBlogDetailsPages =
    allBlogDetailsPagesData?.data?.allSanityBlogs?.edges;

  allBlogDetailsPages.forEach((entry, index) => {
    const slug = entry?.node?.slug?.current;
    const nextNodeSlug =
      index + 1 >= allBlogDetailsPages?.length
        ? null
        : allBlogDetailsPages[index + 1]?.node?.slug?.current;

    const prevNodeSlug =
      index - 1 < 0
        ? null
        : allBlogDetailsPages[index - 1]?.node?.slug?.current;

    let newArr = allBlogDetailsPages.filter(
      ({ node }) => node.title !== entry?.node?.title
    );

    let arrayWithSimilarTags = newArr.filter(({ node }) =>
      node.tags.some(({ tag_name }) =>
        entry?.node?.tags.some((subtag) => subtag.tag_name === tag_name)
      )
    );

    let arrayWithSimilarCategories = newArr.filter(({ node }) =>
      node.blog_categories.some(({ category_name }) =>
        entry?.node?.blog_categories.some(
          (subtag) => subtag.category_name.slug === category_name.slug
        )
      )
    );

    let arrToShow = [...arrayWithSimilarTags];

    [...arrayWithSimilarCategories].forEach((item) =>
      arrToShow.some(({ node }) => node.title !== item.title)
    ) && arrToShow.push(item);

    const page = {
      path: `/blogs/${slug}`,
      component: blogDetailsTemplate,
      context: {
        data: {
          ...entry?.node,
          nextNodeSlug,
          prevNodeSlug,
          similarBlogs: [...arrToShow],
        },
      },
    };

    createPage(page);
  });
  //-------------------------------------------

  const allResourcesPages = resources?.data?.allSanityResourcesPage?.edges;

  allResourcesPages.forEach((entry) => {
    const slug = entry?.node?.slug?.current;

    const page = {
      path: `/${slug}`,
      component: resourceTemplate,
      context: {
        data: entry?.node,
      },
    };

    createPage(page);
  });

  const Merch = await graphql(`
    {
      allSanityMerch {
        edges {
          node {
            _type
            _key
            title
            seo {
              title
              og_title
              og_description
              meta_description
              _type
              twitter_creator
              twitter_description
              twitter_title
              twitter_url
              twitter_card {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
              twitter_image {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            sections {
              ... on SanityMerchHeroSection {
                _key
                _type
                title
                sub_title
                description
                background_image {
                  asset {
                    gatsbyImageData(formats: WEBP, placeholder: NONE)
                  }
                }
              }
              ... on SanityProductsCardSection {
                _key
                _type
                title
                search_placeholder
                button {
                  button_label
                  button_link
                  background
                  _key
                }
                sorting_placeholder
                down_arrow_button {
                  asset {
                    gatsbyImageData(formats: WEBP, placeholder: NONE)
                  }
                }
                product_card {
                  product_card {
                    title
                    stars
                    price
                    add_to_cart_button {
                      _key
                      background
                      button_label
                      button_link
                    }
                    image {
                      asset {
                        gatsbyImageData(formats: WEBP, placeholder: NONE)
                      }
                    }
                  }
                  slug {
                    current
                  }
                  categories {
                    category_name
                    slug {
                      current
                    }
                  }
                  tags {
                    tag_name
                  }
                }
              }
              ... on SanityMerchBlogSection {
                _key
                _type
                latest_blogs {
                  slug {
                    current
                    _type
                  }
                  category
                  sub_title
                  background_image {
                    asset {
                      gatsbyImageData(formats: WEBP, placeholder: NONE)
                    }
                  }
                  image {
                    asset {
                      gatsbyImageData(formats: WEBP, placeholder: NONE)
                    }
                  }
                  date
                  description {
                    children {
                      text
                    }
                  }
                }
              }
            }
            slug {
              current
            }
            header {
              logo_link
              navItems {
                label
                link
                _key
                assets {
                  file {
                    asset {
                      url
                    }
                  }
                  label
                  _key
                }
              }
              join_button {
                button_label
                button_link
              }
              download_button {
                button_label
                button_link
              }
              logo {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            footer {
              logo {
                asset {
                  url
                  alt
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              description
              nav_label
              contact_details {
                email_id
                link
              }
              id
              social_media_logos {
                image {
                  asset {
                    gatsbyImageData(
                      formats: WEBP
                      placeholder: NONE
                      layout: FULL_WIDTH
                    )
                  }
                }
                logo_link
              }
              other_menu_items {
                label
                link
                _key
                assets {
                  asset {
                    url
                  }
                }
              }
              copy_right_text
            }
          }
        }
      }
      allSanityProducts {
        edges {
          node {
            title
            slug {
              current
              _type
              _key
            }
            product_card {
              title
              stars
              price
              add_to_cart_button {
                _key
                background
                button_label
                button_link
              }
              image {
                asset {
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
            }
          }
        }
      }
    }
  `);

  const AboutUsPageData = await graphql(`
    {
      allSanityAboutUs {
        edges {
          node {
            slug {
              _key
              _type
              current
            }
            _id
          }
        }
      }
    }
  `);

  const allAboutUsPages = AboutUsPageData?.data?.allSanityAboutUs?.edges;

  allAboutUsPages.forEach((entry) => {
    const slug = entry?.node?.slug?.current;

    const page = {
      path: `/${slug}`,
      component: aboutUsPageTemplate,
      context: {
        data: entry?.node,
      },
    };

    createPage(page);
  });

  // -------- All Points Summary Page

  const allPointsSummary = await graphql(`
    {
      allSanityPointsSummary {
        edges {
          node {
            slug {
              _key
              _type
              current
            }
            _id
          }
        }
      }
    }
  `);

  const allPointsSummaryPages =
    allPointsSummary?.data?.allSanityPointsSummary?.edges;

  allPointsSummaryPages.forEach((entry) => {
    const slug = entry?.node?.slug?.current;

    const page = {
      path: `/${slug}`,
      component: pointsSummaryTemplate,
      context: {
        data: entry?.node,
      },
    };

    createPage(page);
  });

  // -------- All Points Summary Page

  // -------- All Sacrifice Page

  const allSacrifice = await graphql(`
    {
      allSanitySacrificePage {
        edges {
          node {
            slug {
              _key
              _type
              current
            }
            _id
          }
        }
      }
    }
  `);

  const allSacrificePages = allSacrifice?.data?.allSanitySacrificePage?.edges;

  allSacrificePages.forEach((entry) => {
    const slug = entry?.node?.slug?.current;

    const page = {
      path: `/${slug}`,
      component: sacrificePageTemplate,
      context: {
        data: entry?.node,
      },
    };

    createPage(page);
  });

  // -------- All sacrifice Page

  if (Merch.errors) {
    throw Merch.errors;
  }
  const allMerch = Merch?.data?.allSanityMerch?.edges;
  const allMerchproduct = Merch?.data?.allSanityProducts?.edges;
  // createPage({
  //   path: `/${Merch?.data?.sanityMerch?.slug?.current}`,
  //   component: merchPage,
  //   context: { data: Merch?.data?.sanityMerch || {} },
  // });

  allMerch.forEach((entry) => {
    const slug = entry?.node?.slug?.current;
    const products =
      entry?.node?.sections?.find(
        (section) => section?._type === "products_card_section"
      )?.product_card || [];
    const page = {
      createPage,
      items: products,
      itemsPerPage: 6,
      pathPrefix: `/${slug}`,
      component: merchTemplate,
      context: {
        pathPrefix: `/${slug}`,
        products: products,
        data: entry?.node,
      },
    };
    // const page = {
    //   path: `/${slug}`,
    //   component: merchTemplate,
    //   context: {
    //     data: entry?.node
    //   }
    // }
    paginate(page);
    // createPage(page)
  });

  const Ecosystem = await graphql(`
    {
      allSanityEcosystem {
        edges {
          node {
            title
            seo {
              title
              og_title
              og_description
              meta_description
              _type
              twitter_creator
              twitter_description
              twitter_title
              twitter_url
              twitter_card {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
              twitter_image {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            sections {
              ... on SanityEcosystemSection {
                _key
                _type
                title
                section_title
                description
                background_image {
                  asset {
                    gatsbyImageData(formats: WEBP, placeholder: NONE)
                  }
                }
              }
              ... on SanityWalletTypeSection {
                _key
                _type
                wallets {
                  ... on SanityInternetMoneyWallet {
                    id
                    page_title
                    title
                    top_description

                    slug {
                      current
                    }
                    image {
                      asset {
                        gatsbyImageData(formats: WEBP)
                      }
                    }
                    preview_title
                    preview_button
                    preview_description: _rawPreviewDescription
                    coming_soon
                  }
                  ... on SanityInternetMoneyIm {
                    id
                    page_title
                    title
                    top_description
                    top_btn {
                      button_label
                      button_link
                    }
                    slug {
                      current
                    }
                    image {
                      asset {
                        gatsbyImageData(formats: WEBP)
                      }
                    }
                    preview_title
                    preview_button
                    preview_description: _rawPreviewDescription
                    coming_soon
                  }
                  ... on SanityInternetMoneyWd {
                    id
                    page_title
                    title
                    top_description
                    slug {
                      current
                    }
                    image {
                      asset {
                        gatsbyImageData(formats: WEBP)
                      }
                    }
                    preview_title
                    preview_button
                    preview_description: _rawPreviewDescription
                    coming_soon
                  }
                }
              }
              ... on SanityRecentBlogsSection {
                _key
                _type
                section_title
                title
                view_all_button {
                  button_label
                  button_link
                  background
                  _key
                }
                description
              }
            }
            slug {
              _key
              _type
              current
            }
            header {
              logo_link
              navItems {
                label
                link
                _key
                assets {
                  file {
                    asset {
                      url
                    }
                  }
                  label
                  _key
                }
              }
              join_button {
                button_label
                button_link
              }
              download_button {
                button_label
                button_link
              }
              logo {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            footer {
              logo {
                asset {
                  url
                  alt
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              description
              nav_label
              contact_details {
                email_id
                link
              }
              id
              social_media_logos {
                image {
                  asset {
                    gatsbyImageData(
                      formats: WEBP
                      placeholder: NONE
                      layout: FULL_WIDTH
                    )
                  }
                }
                logo_link
              }
              other_menu_items {
                label
                link
                _key
                assets {
                  asset {
                    url
                  }
                }
              }
              copy_right_text
            }
            email
          }
        }
      }
    }
  `);

  if (Ecosystem.errors) {
    throw Ecosystem.errors;
  }
  const allEcosystem = Ecosystem?.data?.allSanityEcosystem?.edges;

  allEcosystem.forEach((entry) => {
    const slug = entry?.node?.slug?.current;
    const page = {
      path: `/${slug}`,
      component: ecosystemTemplate,
      context: {
        data: entry?.node,
      },
    };
    createPage(page);
  });

  const im_wallet = await graphql(`
    {
      allSanityInternetMoneyWallet {
        edges {
          node {
            page_title
            title
            seo {
              title
              og_title
              og_description
              meta_description
              _type
              twitter_creator
              twitter_description
              twitter_title
              twitter_url
              twitter_card {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
              twitter_image {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            top_description
            header {
              logo_link
              navItems {
                label
                link
                _key
                assets {
                  file {
                    asset {
                      url
                    }
                  }
                  label
                  _key
                }
              }
              join_button {
                button_label
                button_link
              }
              download_button {
                button_label
                button_link
              }
              logo {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            footer {
              logo {
                asset {
                  url
                  alt
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              description
              nav_label
              contact_details {
                email_id
                link
              }
              id
              social_media_logos {
                image {
                  asset {
                    gatsbyImageData(
                      formats: WEBP
                      placeholder: NONE
                      layout: FULL_WIDTH
                    )
                  }
                }
                logo_link
              }
              other_menu_items {
                label
                link
                _key
                assets {
                  asset {
                    url
                  }
                }
              }
              copy_right_text
            }
            slug {
              current
            }
            section {
              ... on SanityEcoHeroSection {
                _key
                _type
                title
                sub_title
                section_title
                description_rich: _rawDescription
                image {
                  asset {
                    gatsbyImageData(formats: WEBP)
                  }
                }
                button {
                  background
                  button_label
                  button_link
                }
              }
              ... on SanityImwMainSection {
                _key
                _type
                title
                section_title
                description
                sub_main_section {
                  title
                  description
                  background_image {
                    asset {
                      gatsbyImageData(formats: WEBP)
                    }
                  }
                  button {
                    button_label
                    background
                    button_link
                  }
                  image {
                    asset {
                      gatsbyImageData(formats: WEBP)
                    }
                  }
                  logos {
                    asset {
                      gatsbyImageData(formats: WEBP)
                    }
                  }
                }
              }
            }
            background_image {
              asset {
                gatsbyImageData(formats: WEBP, placeholder: NONE)
              }
            }
          }
        }
      }
    }
  `);

  if (im_wallet.errors) {
    throw im_wallet.errors;
  }
  const internetMoneyData =
    im_wallet?.data?.allSanityInternetMoneyWallet?.edges;

  internetMoneyData.forEach((entry) => {
    const slug = entry?.node?.slug?.current;
    const page = {
      path: `/${slug}`,
      component: im_wallet_template,
      context: {
        data: entry?.node,
      },
    };
    createPage(page);
  });

  const internetMoneyIM = await graphql(`
    {
      allSanityInternetMoneyIm {
        edges {
          node {
            title
            seo {
              title
              og_title
              og_description
              meta_description
              _type
              twitter_creator
              twitter_description
              twitter_title
              twitter_url
              twitter_card {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
              twitter_image {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            top_description
            header {
              logo_link
              navItems {
                label
                link
                _key
                assets {
                  file {
                    asset {
                      url
                    }
                  }
                  label
                  _key
                }
              }
              join_button {
                button_label
                button_link
              }
              download_button {
                button_label
                button_link
              }
              logo {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            footer {
              logo {
                asset {
                  url
                  alt
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              description
              nav_label
              contact_details {
                email_id
                link
              }
              id
              social_media_logos {
                image {
                  asset {
                    gatsbyImageData(
                      formats: WEBP
                      placeholder: NONE
                      layout: FULL_WIDTH
                    )
                  }
                }
                logo_link
              }
              other_menu_items {
                label
                link
                _key
                assets {
                  asset {
                    url
                  }
                }
              }
              copy_right_text
            }
            slug {
              current
            }
            page_title
            image {
              asset {
                gatsbyImageData(formats: WEBP)
              }
            }
            background_image {
              asset {
                gatsbyImageData(formats: WEBP)
              }
            }
            sections {
              ... on SanityEcoHeroSection {
                _key
                _type
                title
                sub_title
                section_title
                description_rich: _rawDescription
                image {
                  asset {
                    gatsbyImageData(formats: WEBP)
                  }
                }
                button {
                  button_label
                  button_link
                }
              }
              ... on SanityEcoGraphSection {
                _key
                _type
                image {
                  asset {
                    gatsbyImageData(formats: WEBP)
                  }
                }
                buttons: button {
                  button_label
                  button_link
                }
              }
              ... on SanityEcoWalletSection {
                _key
                _type
                wallet_title
                wallet_description
                image {
                  asset {
                    gatsbyImageData(formats: WEBP)
                  }
                }
                wallet_button {
                  button_link
                  button_label
                  background
                }
                wallet_logos {
                  asset {
                    gatsbyImageData(formats: WEBP)
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  if (internetMoneyIM.errors) {
    throw internetMoneyIM.errors;
  }
  const internetMoneyIMData =
    internetMoneyIM?.data?.allSanityInternetMoneyIm?.edges;

  internetMoneyIMData.forEach((entry) => {
    const slug = entry?.node?.slug?.current;
    const page = {
      path: `/${slug}`,
      component: internetMoneyIMTemplate,
      context: {
        data: entry?.node,
      },
    };
    createPage(page);
  });

  /** Ecosystem inner-page **/
  const internetMoneyWD = await graphql(`
    {
      allSanityInternetMoneyWd {
        edges {
          node {
            title
            seo {
              title
              og_title
              og_description
              meta_description
              _type
              twitter_creator
              twitter_description
              twitter_title
              twitter_url
              twitter_card {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
              twitter_image {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            top_description
            header {
              logo_link
              navItems {
                label
                link
                _key
                assets {
                  file {
                    asset {
                      url
                    }
                  }
                  label
                  _key
                }
              }
              join_button {
                button_label
                button_link
              }
              download_button {
                button_label
                button_link
              }
              logo {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            footer {
              logo {
                asset {
                  url
                  alt
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              description
              nav_label
              contact_details {
                email_id
                link
              }
              id
              social_media_logos {
                image {
                  asset {
                    gatsbyImageData(
                      formats: WEBP
                      placeholder: NONE
                      layout: FULL_WIDTH
                    )
                  }
                }
                logo_link
              }
              other_menu_items {
                label
                link
                _key
                assets {
                  asset {
                    url
                  }
                }
              }
              copy_right_text
            }
            slug {
              current
            }
            page_title
            image {
              asset {
                gatsbyImageData(formats: WEBP)
              }
            }
            background_image {
              asset {
                gatsbyImageData(formats: WEBP)
              }
            }
            sections {
              ... on SanityPurposeSection {
                _key
                _type
                background_image {
                  asset {
                    _id
                    gatsbyImageData(formats: WEBP, placeholder: NONE)
                  }
                }
                section_title
                title
                description
                section_button {
                  _key
                  button_label
                  button_link
                }
                wallet_title
                wallet_description
                wallet_button {
                  _key
                  button_label
                  button_link
                }
                wallet_logos {
                  asset {
                    _id
                    gatsbyImageData(formats: WEBP, placeholder: NONE)
                  }
                }
                image {
                  asset {
                    gatsbyImageData(formats: WEBP, placeholder: NONE)
                  }
                }
              }
              ... on SanityEcoGraphSection {
                _key
                _type
                image {
                  asset {
                    gatsbyImageData(formats: WEBP)
                  }
                }
                buttons: button {
                  button_label
                  button_link
                }
              }
              ... on SanityEcoHeroSection {
                _key
                _type
                button {
                  button_link
                  button_label
                  background
                }
                title
                sub_title
                section_title
                description_rich: _rawDescription
                image {
                  asset {
                    gatsbyImageData(formats: WEBP)
                  }
                }
              }
              ... on SanityEcoWalletSection {
                _key
                _type
                wallet_title
                wallet_description
                image {
                  asset {
                    gatsbyImageData(formats: WEBP)
                  }
                }
                wallet_button {
                  button_link
                  background
                  button_label
                }
                wallet_logos {
                  asset {
                    gatsbyImageData(formats: WEBP)
                  }
                }
              }
              ... on SanityWdWorkSection {
                _key
                _type
                description_cards {
                  _rawDescription
                }
                section_title
                title
                description
              }
            }
          }
        }
      }
    }
  `);

  if (internetMoneyWD.errors) {
    throw internetMoneyWD.errors;
  }
  const internetMoneyWDData =
    internetMoneyWD?.data?.allSanityInternetMoneyWd?.edges;

  internetMoneyWDData.forEach((entry) => {
    const slug = entry?.node?.slug?.current;
    const page = {
      path: `/${slug}`,
      component: internetMoneyWDTemplate,
      context: {
        data: entry?.node,
      },
    };
    createPage(page);
  });

  const merchDetail = await graphql(`
    {
      allSanityProducts {
        edges {
          node {
            header {
              logo_link
              navItems {
                label
                link
                _key
                assets {
                  file {
                    asset {
                      url
                    }
                  }
                  label
                  _key
                }
              }
              join_button {
                button_label
                button_link
              }
              download_button {
                button_label
                button_link
              }
              logo {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            seo {
              title
              og_title
              og_description
              meta_description
              _type
              twitter_creator
              twitter_description
              twitter_title
              twitter_url
              twitter_card {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
              twitter_image {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            footer {
              logo {
                asset {
                  url
                  alt
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              description
              nav_label
              contact_details {
                email_id
                link
              }
              id
              social_media_logos {
                image {
                  asset {
                    gatsbyImageData(
                      formats: WEBP
                      placeholder: NONE
                      layout: FULL_WIDTH
                    )
                  }
                }
                logo_link
              }
              other_menu_items {
                label
                link
                _key
                assets {
                  asset {
                    url
                  }
                }
              }
              copy_right_text
            }
            background_image {
              asset {
                gatsbyImageData(formats: WEBP, placeholder: NONE)
              }
            }
            product_card {
              stars
              title
              price
              qty
              description
              image {
                asset {
                  url
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              add_to_cart_button {
                button_label
                button_link
                background
                _key
              }
              card_sub_object {
                _key
                _type
                product_image {
                  asset {
                    url
                    gatsbyImageData(formats: WEBP, placeholder: NONE)
                  }
                }
              }
            }
            description_card {
              _key
              _type
              description {
                children {
                  _key
                  text
                }
                _key
                _type
              }
            }
            categories {
              _id
              _key
              slug {
                current
                _key
              }
              category_name
            }
            tags {
              tag_name
              _key
              _id
            }
            slug {
              current
              _key
            }
          }
        }
      }
    }
  `);

  if (merchDetail.errors) {
    throw merchDetail.errors;
  }
  const merchDetailData = merchDetail?.data?.allSanityProducts?.edges;

  merchDetailData.forEach((entry) => {
    const slug = entry?.node?.slug?.current;
    const page = {
      path: `/merch/${slug}`,
      component: merchDetailTemplate,
      context: {
        data: entry?.node,
      },
    };
    createPage(page);
  });

  const videoDetail = await graphql(`
    {
      allSanityVideoDetailPage {
        edges {
          node {
            header {
              logo_link
              navItems {
                label
                link
                _key
                assets {
                  file {
                    asset {
                      url
                    }
                  }
                  label
                  _key
                }
              }
              join_button {
                button_label
                button_link
              }
              download_button {
                button_label
                button_link
              }
              logo {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            seo {
              title
              og_title
              og_description
              meta_description
              _type
              twitter_creator
              twitter_description
              twitter_title
              twitter_url
              twitter_card {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
              twitter_image {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            footer {
              logo {
                asset {
                  url
                  alt
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              description
              nav_label
              contact_details {
                email_id
                link
              }
              id
              social_media_logos {
                image {
                  asset {
                    gatsbyImageData(
                      formats: WEBP
                      placeholder: NONE
                      layout: FULL_WIDTH
                    )
                  }
                }
                logo_link
              }
              other_menu_items {
                label
                link
                _key
                assets {
                  asset {
                    url
                  }
                }
              }
              copy_right_text
            }
            slug {
              current
              _key
              _type
            }
            thumbnail {
              asset {
                gatsbyImageData(formats: WEBP, placeholder: NONE)
              }
            }
            url
            tags {
              tag_name
              _id
            }
            title
            descrp: _rawDescription
            recent_section {
              title
              description
            }
            sub_description
            background_image {
              asset {
                gatsbyImageData(formats: WEBP, placeholder: NONE)
              }
            }
          }
        }
      }
    }
  `);

  if (videoDetail.errors) {
    throw videoDetail.errors;
  }
  const videoDetailData = videoDetail?.data?.allSanityVideoDetailPage.edges;

  videoDetailData.forEach((entry) => {
    const slug = entry?.node?.slug?.current;
    const page = {
      path: `/resources/${slug}`,
      component: videoDetailTemplate,
      context: {
        data: entry?.node,
      },
    };
    createPage(page);
  });
  const articleDetail = await graphql(`
    {
      allSanityArticlesDetailPage {
        edges {
          node {
            header {
              logo_link
              navItems {
                label
                link
                _key
                assets {
                  file {
                    asset {
                      url
                    }
                  }
                  label
                  _key
                }
              }
              join_button {
                button_label
                button_link
              }
              download_button {
                button_label
                button_link
              }
              logo {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            seo {
              title
              og_title
              og_description
              meta_description
              _type
              twitter_creator
              twitter_description
              twitter_title
              twitter_url
              twitter_card {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
              twitter_image {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
            }
            footer {
              logo {
                asset {
                  url
                  alt
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
              description
              nav_label
              contact_details {
                email_id
                link
              }
              id
              social_media_logos {
                image {
                  asset {
                    gatsbyImageData(
                      formats: WEBP
                      placeholder: NONE
                      layout: FULL_WIDTH
                    )
                  }
                }
                logo_link
              }
              other_menu_items {
                label
                link
                _key
                assets {
                  asset {
                    url
                  }
                }
              }
              copy_right_text
            }
            slug {
              current
              _key
              _type
            }
            section_background_image {
              asset {
                gatsbyImageData(formats: WEBP, placeholder: NONE)
              }
            }
            background_image {
              asset {
                gatsbyImageData(formats: WEBP, placeholder: NONE)
              }
            }
            title
            tags {
              tag_name
              _id
            }
            recent_section {
              title
              description
            }
            sub_description
            description: _rawDescription
          }
        }
      }
    }
  `);

  if (articleDetail.errors) {
    throw articleDetail.errors;
  }
  const articleDetailData =
    articleDetail?.data?.allSanityArticlesDetailPage.edges;

  articleDetailData.forEach((entry) => {
    const slug = entry?.node?.slug?.current;
    const page = {
      path: `/resources/${slug}`,
      component: articleDetailTemplate,
      context: {
        data: entry?.node,
      },
    };
    createPage(page);
  });
  // Terms and Conditions Stuff --------------------

  const termsandCoditionsTemplate = path.resolve(
    "./src/templates/terms-and-conditions-template/index.js"
  );
  const termsandCoditionsPageData = await graphql(`
    {
      allSanityTermsAndConditions {
        edges {
          node {
            slug {
              _key
              _type
              current
            }
            _id
          }
        }
      }
    }
  `);

  const termsandCoditionsPages =
    termsandCoditionsPageData?.data?.allSanityTermsAndConditions?.edges;

  termsandCoditionsPages.forEach((entry) => {
    const slug = entry?.node?.slug?.current;

    const page = {
      path: `/${slug}`,
      component: termsandCoditionsTemplate,
      context: {
        data: entry?.node,
        slug: slug,
      },
    };

    createPage(page);
  });

  // Privacy Policy Stuff --------------------

  const privacyPolicyTemplate = path.resolve(
    "./src/templates/privacy-policy-template/index.js"
  );
  const privacyPolicyPageData = await graphql(`
    {
      allSanityPrivacyPolicy {
        edges {
          node {
            slug {
              _key
              _type
              current
            }
            _id
          }
        }
      }
    }
  `);

  const privacyPolicyPages =
    privacyPolicyPageData?.data?.allSanityPrivacyPolicy?.edges;

  privacyPolicyPages.forEach((entry) => {
    const slug = entry?.node?.slug?.current;

    const page = {
      path: `/${slug}`,
      component: privacyPolicyTemplate,
      context: {
        data: entry?.node,
        slug: slug,
      },
    };

    createPage(page);
  });
};

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "blocktype",
    extend(options) {
      return {
        resolve(source) {
          // capitalize
          const type = source._type;
          const cap = type.charAt(0).toUpperCase() + type.slice(1);
          return cap;
        },
      };
    },
  });

  actions.createFieldExtension({
    name: "sanityBlockContent",
    args: {
      fieldName: "String",
    },
    extend(options) {
      return {
        resolve(source) {
          const html = sanityBlockContentToHTML({
            blocks: source[options.fieldName],
          });
          return html;
        },
      };
    },
  });

  actions.createFieldExtension({
    name: "navItemType",
    args: {
      name: {
        type: "String!",
        defaultValue: "Link",
      },
    },
    extend(options) {
      return {
        resolve() {
          switch (options.name) {
            case "Group":
              return "Group";
            default:
              return "Link";
          }
        },
      };
    },
  });

  // abstract interfaces
  actions.createTypes(/* GraphQL */ `
    interface HomepageBlock implements Node {
      id: ID!
      blocktype: String
    }

    interface HomepageLink implements Node {
      id: ID!
      href: String
      text: String
    }

    interface HeaderNavItem implements Node {
      id: ID!
      navItemType: String
    }

    interface NavItem implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      href: String
      text: String
      icon: HomepageImage
      description: String
    }

    interface NavItemGroup implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      name: String
      navItems: [NavItem]
    }

    interface HomepageImage implements Node {
      id: ID!
      alt: String
      gatsbyImageData: GatsbyImageData
      url: String
    }

    interface HomepageHero implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String!
      kicker: String
      subhead: String
      image: HomepageImage
      text: String
      links: [HomepageLink]
    }

    interface HomepageFeature implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      kicker: String
      text: String
      image: HomepageImage
      links: [HomepageLink]
    }

    interface HomepageFeatureList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      text: String
      content: [HomepageFeature]
    }

    interface HomepageCta implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      text: String
      image: HomepageImage
      links: [HomepageLink]
    }

    interface HomepageLogo implements Node {
      id: ID!
      image: HomepageImage
      alt: String
    }

    interface HomepageLogoList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      text: String
      logos: [HomepageLogo]
    }

    interface HomepageTestimonial implements Node {
      id: ID!
      quote: String
      source: String
      avatar: HomepageImage
    }

    interface HomepageTestimonialList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      content: [HomepageTestimonial]
    }

    interface HomepageBenefit implements Node {
      id: ID!
      heading: String
      text: String
      image: HomepageImage
    }

    interface HomepageBenefitList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      content: [HomepageBenefit]
    }

    interface HomepageStat implements Node {
      id: ID!
      value: String
      label: String
      heading: String
    }

    interface HomepageStatList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      text: String
      image: HomepageImage
      icon: HomepageImage
      content: [HomepageStat]
      links: [HomepageLink]
    }

    interface HomepageProduct implements Node {
      id: ID!
      heading: String
      text: String
      image: HomepageImage
      links: [HomepageLink]
    }

    interface HomepageProductList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      kicker: String
      text: String
      content: [HomepageProduct]
    }

    interface Homepage implements Node {
      id: ID!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }

    interface LayoutHeader implements Node {
      id: ID!
      navItems: [HeaderNavItem]
      cta: HomepageLink
    }

    enum SocialService {
      TWITTER
      FACEBOOK
      INSTAGRAM
      YOUTUBE
      LINKEDIN
      GITHUB
      DISCORD
      TWITCH
    }

    interface SocialLink implements Node {
      id: ID!
      username: String!
      service: SocialService!
    }

    interface LayoutFooter implements Node {
      id: ID!
      links: [HomepageLink]
      meta: [HomepageLink]
      socialLinks: [SocialLink]
      copyright: String
    }

    interface Layout implements Node {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    interface AboutPage implements Node {
      id: ID!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }

    interface AboutHero implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      image: HomepageImage
    }

    interface AboutStat implements Node {
      id: ID!
      value: String
      label: String
    }

    interface AboutStatList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      content: [AboutStat]
    }

    interface AboutProfile implements Node {
      id: ID!
      image: HomepageImage
      name: String
      jobTitle: String
    }

    interface AboutLeadership implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      subhead: String
      content: [AboutProfile]
    }

    interface AboutLogoList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      links: [HomepageLink]
      logos: [HomepageLogo]
    }

    interface Page implements Node {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage
      html: String!
    }
  `);

  // CMS-specific types for Homepage
  actions.createTypes(/* GraphQL */ `
    type SanityHomepageLink implements Node & HomepageLink {
      id: ID!
      href: String
      text: String
    }

    type SanityImageAsset implements Node & HomepageImage {
      id: ID!
      alt: String @proxy(from: "altText")
      gatsbyImageData: GatsbyImageData
      url: String
    }

    type SanityHomepage implements Node & Homepage {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      content: [HomepageBlock] @link
    }

    type SanityHomepageHero implements Node & HomepageHero & HomepageBlock {
      id: ID!
      _type: String
      blocktype: String @blocktype
      heading: String!
      kicker: String
      subhead: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      text: String
      links: [HomepageLink] @link
    }

    type SanityHomepageFeature implements Node & HomepageFeature & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      kicker: String
      text: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      links: [HomepageLink] @link
    }

    type SanityHomepageFeatureList implements Node & HomepageFeatureList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      text: String
      content: [HomepageFeature]
    }

    type SanityHomepageCta implements Node & HomepageCta & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      text: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      links: [HomepageLink] @link
    }

    type SanityHomepageLogo implements Node & HomepageLogo {
      id: ID!
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      alt: String
    }

    type SanityHomepageLogoList implements Node & HomepageLogoList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      text: String
      logos: [HomepageLogo]
    }

    type SanityHomepageTestimonial implements Node & HomepageTestimonial {
      id: ID!
      quote: String
      source: String
      avatar: HomepageImage @link(by: "id", from: "avatar.asset._ref")
    }

    type SanityHomepageTestimonialList implements Node & HomepageTestimonialList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      content: [HomepageTestimonial]
    }

    type SanityHomepageBenefit implements Node & HomepageBenefit {
      id: ID!
      heading: String
      text: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
    }

    type SanityHomepageBenefitList implements Node & HomepageBenefitList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      text: String
      content: [HomepageBenefit]
    }

    type SanityHomepageStat implements Node & HomepageStat {
      id: ID!
      value: String
      label: String
      heading: String
    }

    type SanityHomepageStatList implements Node & HomepageStatList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      text: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      icon: HomepageImage @link(by: "id", from: "icon.asset._ref")
      content: [HomepageStat]
      links: [HomepageLink] @link
    }

    type SanityHomepageProduct implements Node & HomepageProduct {
      id: ID!
      heading: String
      text: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      links: [HomepageLink] @link
    }

    type SanityHomepageProductList implements Node & HomepageProductList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      kicker: String
      text: String
      content: [HomepageProduct]
    }

    type SanityNavItem implements Node & NavItem & HeaderNavItem {
      id: ID!
      navItemType: String @navItemType(name: "Link")
      href: String
      text: String
      icon: HomepageImage @link(by: "id", from: "icon.asset._ref")
      description: String
    }

    type SanityNavItemGroup implements Node & NavItemGroup & HeaderNavItem {
      id: ID!
      navItemType: String @navItemType(name: "Group")
      name: String
      navItems: [NavItem] @link
    }

    type SanityLayoutHeader implements Node & LayoutHeader {
      id: ID!
      navItems: [HeaderNavItem] @link(from: "navItems._ref")
      cta: HomepageLink @link
    }

    type SanitySocialLink implements Node & SocialLink {
      id: ID!
      username: String!
      service: SocialService!
    }

    type SanityLayoutFooter implements Node & LayoutFooter {
      id: ID!
      links: [HomepageLink] @link
      meta: [HomepageLink] @link
      socialLinks: [SocialLink] @link
      copyright: String
    }

    type SanityLayout implements Node & Layout {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    type SanityAboutPage implements Node & AboutPage {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      content: [HomepageBlock]
    }

    type SanityAboutHero implements Node & AboutHero & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      text: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
    }

    type SanityAboutStat implements Node & AboutStat {
      id: ID!
      value: String
      label: String
    }

    type SanityAboutStatList implements Node & AboutStatList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      content: [AboutStat]
    }

    type SanityAboutProfile implements Node & AboutProfile {
      id: ID!
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      name: String
      jobTitle: String
    }

    type SanityAboutLeadership implements Node & AboutLeadership & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      subhead: String
      content: [AboutProfile]
    }

    type SanityAboutLogoList implements Node & AboutLogoList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      links: [HomepageLink]
      logos: [HomepageLogo]
    }

    type SanityPage implements Node & Page {
      id: ID!
      slug: String! @proxy(from: "slug.current")
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      html: String! @sanityBlockContent(fieldName: "content")
    }
  `);
};

exports.onPostBuild = ({ store }) => {
  const { redirects } = store.getState();
  // console.clear();
  console.log(redirects);
};
