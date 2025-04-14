import * as React from "react";
import { createContext } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import "../styles/globalstyle.scss";
import Blogs from "./blogs";
import { GlobalContext } from "../context";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
const query = graphql`
  query MainLayout {
    sanityHome {
      id
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
          target
          assets {
            asset {
              url
            }
          }
        }
        copy_right_text
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
    }
  }
`;

const Layout = ({ location, hideBlogs = false, ...props }) => {
  const { global } = React.useContext(GlobalContext);
  const {
    title,
    meta_description,
    og_description,
    og_title,
    twitter_card,
    twitter_creator,
    twitter_description,
    twitter_title,
    twitter_url,
    twitter_image,
  } = props?.seo || {};

  console.log(props?.seo);

  const { data, method } = global;
  const { setLocation } = method;

  const { sanityHome } = useStaticQuery(query);

  // Handling SideEffects ------------
  React.useEffect(() => {
    setLocation(location);
  }, [location]);
  React.useEffect(() => {
    if (typeof window != undefined) {
      window.Snipcart?.api.theme.customization.registerPaymentFormCustomization(
        {
          input: {
            backgroundColor: "transparent",
            border: "0.5px solid white",
            borderradius: "5px",
            fontSize: "16px",
            color: "#fba81a",
            fontWeight: "600",
            letterSpacing: "1px",
          },
          label: {
            color: "rgba(240, 240, 240, 0.7)",
            fontSize: "14px",
          },
        }
      );
    }
  }, []);

  const navItems = sanityHome?.header?.navItems
  if (navItems && navItems.length) {
    const blacklisted = {
      '/merch': true,
      '/resources': true,
    }
    sanityHome.header.navItems = navItems.filter((item) => !blacklisted[item.link])
  }

  console.log(sanityHome?.header)
  // ---------------------------------
  return (
    <>
      <Helmet
        defer={false}
        title={title || ""}
        meta={[
          {
            name: `description`,
            content: meta_description || "",
          },
          {
            property: `og:title`,
            content: og_title || "",
          },
          {
            property: `og:description`,
            content: og_description || "",
          },
          {
            name: `og:image:secure_url`,
            content:
              twitter_card?.asset?.gatsbyImageData?.images?.fallback?.src || "",
          },
          {
            name: `twitter:creator`,
            content: twitter_creator || "",
          },
          {
            name: `twitter:description`,
            content: twitter_description || "",
          },
          {
            name: `twitter:title`,
            content: twitter_title || "",
          },
          {
            name: `twitter:url`,
            content: twitter_url || "",
          },
          {
            name: `twitter:image`,
            content:
              twitter_image?.asset?.gatsbyImageData?.images?.fallback?.src ||
              "",
          },
        ]}
      />
      <Header headerData={sanityHome?.header} />
      {props.children}
      {!hideBlogs && !location?.pathname?.toString()?.includes("video") && (
        <Blogs />
      )}
      <Footer footerData={sanityHome?.footer} />
    </>
  );
};

export default Layout;
