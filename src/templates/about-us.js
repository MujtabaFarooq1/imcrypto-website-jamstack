import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import AboutHeroSection from "../components/AboutHeroSection";
import OurMissionSection from "../components/OurMissionSection";

import WhatWeDoSection from "../components/WhatWeDoSection";
import CryptoGuideSection from "../components/CryptoGuideSection";
import OurTeamSection from "../components/OurTeamSection";
import Blogs from "../components/blogs";
import Email from "../components/email";

export default function AboutUsPage({ data, ...props }) {
  const { sanityHome, sanityAboutUs } = data || {};
  const { sections, seo } = sanityAboutUs || {};

  return (
    <Layout seo={seo} {...sanityHome} location={props.location}>
      <AboutHeroSection
        {...sections?.find(
          (item) => item.__typename === "SanityAboutHeroSection"
        )}
      />
      <OurMissionSection
        {...sections?.find(
          (item) => item.__typename === "SanityMissionSection"
        )}
      />

      <WhatWeDoSection
        {...sections?.find(
          (item) => item.__typename === "SanityWhatWeDoSection"
        )}
      />

      {/* <CryptoGuideSection
        {...sections?.find(
          (item) => item.__typename === "SanityCryptoGuideSection"
        )}
      /> */}

      <OurTeamSection
        {...sections?.find((item) => item.__typename === "SanityTeamSection")}
      />

      {/* <Blogs
        {...sanityHome?.sections?.find(
          (item) => item.__typename === "SanityBlogsSection"
        )}
      /> */}
      <Email />
    </Layout>
  );
}

export const query = graphql`
  query AboutUsPage {
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

    # --------------------------
    # --------------------------
    # --------------------------
    # Sanity About Us Section Start
    # --------------------------
    # --------------------------
    # --------------------------

    sanityAboutUs {
      _id
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
      slug {
        _key
        _type
        current
      }
      sections {
        ... on SanityAboutHeroSection {
          __typename
          background_image {
            asset {
              url
            }
          }
          title
          sub_title
          left_section {
            asset {
              url
            }
          }
          rs_title
          rs_sub_title
          rs_description
        }
        ... on SanityMissionSection {
          __typename
          title
          sub_title
          description
          sections {
            title
            description
            image {
              asset {
                url
              }
            }
          }
        }
        ... on SanityCryptoGuideSection {
          __typename
          title
          sub_title
          description
          video_url
        }
        ... on SanityWhatWeDoSection {
          __typename
          background_image {
            asset {
              url
            }
          }
          title
          sub_title
          description
          left_section_image {
            asset {
              url
            }
          }
          start_now_btn_text
          start_now_btn_link
        }
        ... on SanityTeamSection {
          __typename
          title
          sub_title
          description
          button {
            button_label
            button_link
          }
          experts {
            title
            description
            image {
              asset {
                url
              }
            }
          }
        }
      }
    }

    # --------------------------
    # --------------------------
    # --------------------------
    # Sanity About Us Section End
    # --------------------------
    # --------------------------
    # --------------------------
  }
`;
