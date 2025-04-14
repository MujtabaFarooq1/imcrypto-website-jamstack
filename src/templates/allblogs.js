import { graphql } from "gatsby";
import React from "react";
import AllBlogsPageContent from "../components/AllBlogsPageContent";

import Layout from "../components/layout";
import SectionHero from "../components/shared/SectionHero/indes";
import Email from "../components/email";

const AllBlogs = ({ location, data }) => {
  const { sanityBlogsPage } = data;

  return (
    <Layout  location={location} hideBlogs={true}>
      <section id="allBlogsPage" className="allBlogsPage">
        <SectionHero
          {...sanityBlogsPage?.sections?.find(
            (item) => item.__typename === "SanityBlogsHeroSection"
          )}
        />

        <AllBlogsPageContent />

        <Email />
      </section>
    </Layout>
  );
};

export default AllBlogs;

export const query = graphql`
  query allBlogsPage {
    # --------------------------
    # --------------------------
    # --------------------------
    # AllBlogsPage Start
    # --------------------------
    # --------------------------
    # --------------------------

    sanityBlogsPage {
      _id
      title
      slug {
        _key
        _type
        current
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
      sections {
        ... on SanityBlogsHeroSection {
          title
          __typename
          background_image {
            asset {
              url
            }
          }
          sub_title
          description
        }
      }
    }

    # --------------------------
    # --------------------------
    # --------------------------
    #  AllBlogsPage Start End
    # --------------------------
    # --------------------------
    # --------------------------

    # --------------------------
    # --------------------------
    # --------------------------
    # All Blogs Data
    # --------------------------
    # --------------------------
    # --------------------------

    # --------------------------
    # --------------------------
    # --------------------------
    #  All Blogs Data End
    # --------------------------
    # --------------------------
    # --------------------------
  }
`;
