import React from "react";
import { graphql } from "gatsby";
import SecondaryHeroSection from "../../components/SecondaryHeroSection";
import Layout from "../../components/layout";
import DynamicComponent from "../../components/dynamicComponent";

export default function BlackPaperPage({ location, data }) {
  const { sanityPrivacyPolicy } = data;
  const { seo } = sanityPrivacyPolicy || {};
  console.log(data);
  return (
    <Layout seo={seo} location={location} hideBlogs={true}>
      <section id="privacypolicy" className="privacypolicy">
        {sanityPrivacyPolicy?.sections?.map((i) => (
          <DynamicComponent {...i} _type={i.__typename} />
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query PrivacyPolicy($slug: String) {
    # --------------------------
    # --------------------------
    # --------------------------
    # Privacy Policy Start
    # --------------------------
    # --------------------------
    # --------------------------

    sanityPrivacyPolicy(slug: { current: { eq: $slug } }) {
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
        ... on SanitySecondaryHeroSection {
          __typename
          background_image {
            asset {
              url
            }
          }
          title
          sub_title
        }
        ... on SanityRichText {
          __typename
          content: _rawContent
        }
      }
    }

    # --------------------------
    # --------------------------
    # --------------------------
    # Privacy Policy  End
    # --------------------------
    # --------------------------
    # --------------------------
  }
`;
