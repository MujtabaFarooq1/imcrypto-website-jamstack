import React from "react";
import BlackpaperGallerySection from "../components/BlackpaperGallerySection";
import BlackpaperHeroSection from "../components/BlackpaperHeroSection";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function BlackPaperPage({ location, data }) {
  const { sanityBlackpaper } = data;
  const { seo } = sanityBlackpaper

  return (
    <Layout seo={seo} location={location}>
      <section id="blackpaperSection" className="blackpaper">
        <BlackpaperHeroSection
          {...sanityBlackpaper?.sections?.find(
            (item) => item.__typename === "SanityBlackpaperHero"
          )}
        />
        <BlackpaperGallerySection
          {...sanityBlackpaper?.sections?.find(
            (item) => item.__typename === "SanityBlackpaperGallery"
          )}
        />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlackPaperPage {
    # --------------------------
    # --------------------------
    # --------------------------
    # Black Paper Section Start
    # --------------------------
    # --------------------------
    # --------------------------

    sanityBlackpaper {
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
        ... on SanityBlackpaperHero {
          __typename
          background_image {
            asset {
              url
            }
          }
          title
          sub_title
        }

        ... on SanityBlackpaperGallery {
          __typename
          im_title
          im_subtitle
          im_thumb {
            asset {
              url
            }
          }
          im_btn {
            button_label
            button_link
          }
          wd_title
          wd_subtitle
          wd_thumb {
            asset {
              url
            }
          }
          wd_btn {
            button_label
            button_link
          }
        }
      }
    }

    # --------------------------
    # --------------------------
    # --------------------------
    # Blackpaper Section End
    # --------------------------
    # --------------------------
    # --------------------------
  }
`;
