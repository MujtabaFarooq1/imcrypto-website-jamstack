import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import DynamicComponent from "../components/dynamicComponent";
import "react-toastify/dist/ReactToastify.css";

export default function Homepage({ data, ...props }) {
  const { sanityHome } = data || {};
  const { sections, seo } = sanityHome || {};
  // console.log(sections, "SECTION");
console.log(data)
  return (
    <Layout seo={seo} {...sanityHome} location={props.location}>
      {Array.isArray(sections) &&
        sections.map((i) => <DynamicComponent {...i} />)}
    </Layout>
  );
}

export const query = graphql`
  query IndexPage {
    sanityHome {
      id
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
            url
            gatsbyImageData(formats: WEBP)
          }
        }
        twitter_image {
          asset {
            url
            gatsbyImageData(formats: WEBP)
          }
        }
      }
      sections {
        ... on SanityHeroSection {
          _key
          _type
          app_logos {
            asset {
              gatsbyImageData(formats: WEBP, placeholder: NONE)
              _id
            }
          }
          sub_title
          sub_title_description
          title
          button {
            _key
            button_label
            button_link
          }
          app_title
          background_image {
            asset {
              gatsbyImageData(formats: WEBP, placeholder: NONE)
            }
          }
          mobile_background_image {
            asset {
              gatsbyImageData(formats: WEBP, placeholder: NONE)
            }
          }
        }
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
        ... on SanityFeaturesSection {
          _key
          _type
          section_title
          title
          description
          section {
            _key
            _type
            title
            description
            button {
              _key
              button_label
              button_link
            }
            image {
              asset {
                gatsbyImageData(formats: WEBP, placeholder: NONE)
                _id
              }
            }
          }
          sub_section_title
          sub_title
          sub_description
          sub_sections {
            _key
            _type
            title
            description
            image {
              asset {
                _id
                gatsbyImageData(formats: WEBP, placeholder: NONE)
              }
            }
          }
        }
        ... on SanityGuidesSection {
          _key
          _type
          description
          section_title
          title
          sections {
            _key
            description
            title
            background_image {
              asset {
                _id
                alt
                gatsbyImageData(formats: WEBP, placeholder: NONE)
              }
            }
            button {
              button_label
              button_link
              _key
            }
          }
          view_button {
            _key
            button_label
            button_link
          }
        }
        ... on SanityProductsSection {
          _key
          _type
          title
          description
          section_title
          view_all_button {
            button_label
          }
        }
        ... on SanityFaqSection {
          _key
          _type
          section_title
          title
          description
          add_questions {
            _key
            description_rich: _rawDescription
            label
          }
        }
        ... on SanityEmailBoxSection {
          _key
          _type
          button {
            _key
            button_label
            button_link
          }
          description
          section_title
          placeholder
          background_image {
            asset {
              gatsbyImageData(formats: WEBP, placeholder: NONE)
            }
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
