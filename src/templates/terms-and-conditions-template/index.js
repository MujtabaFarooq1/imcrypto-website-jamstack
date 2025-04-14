import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import SecondaryHeroSection from "../../components/SecondaryHeroSection";
import DynamicComponent from "../../components/dynamicComponent";

export default function BlackPaperPage({ location, data }) {
  const { sanityTermsAndConditions } = data;
  const { seo } = sanityTermsAndConditions || {}

  return (
    <Layout seo={seo} location={location} hideBlogs={true}>
      <section id="termsandconditions" className="termsandconditions">
        {sanityTermsAndConditions?.sections?.map((i) => (
          <DynamicComponent {...i} _type={i.__typename} />
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query TermsandConditionQuery($slug : String) {
    # --------------------------
    # --------------------------
    # --------------------------
    # Terms and Condition Section Start
    # --------------------------
    # --------------------------
    # --------------------------

    sanityTermsAndConditions(slug: { current: { eq: $slug} }) {
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
    # Terms and Condition Section End
    # --------------------------
    # --------------------------
    # --------------------------
  }
`;
