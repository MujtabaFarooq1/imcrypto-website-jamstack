import { PortableText } from "@portabletext/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import { getLink } from "../../utils/helper";
import "./article-details.scss";

const ArticleDetail = ({ article }) => {
  const { resources } = useContext(GlobalContext);
  const { data, method } = resources;
  const { tab } = data;
  const { setTab } = method;
  useEffect(() => {
    setTab("Articles");
  }, []);
  const {
    description,
    slug,
    sub_description,
    sub_title,
    tags,
    thumbnail,
    recent_section,
    title,
    url,
    section_background_image,
    background_image,
  } = article;
  const img = getImage(section_background_image.asset);
  const bgImg = convertToBgImage(img);
  const main_img = getImage(background_image.asset);
  const main_bgImg = convertToBgImage(main_img);
  const { allArticles } = useStaticQuery(graphql`
    {
      allArticles: allSanityArticlesDetailPage {
        edges {
          node {
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
            slug {
              current
              _key
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <div className="articledetails-section">
        <BackgroundImage fluid={bgImg?.fluid}>
          <div className="container">
            <div className="collapsible-article-details">
              <BackgroundImage fluid={main_bgImg?.fluid} className="articledetail-top-header">
                <div className="article-inner-content">
                    <h4>{title} </h4>
                    <div className="article-tags">
                      <ul>
                        {Array.isArray(tags) &&
                          tags?.map((tag) => (
                            <li>
                              <a> {tag?.tag_name} </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                </div>
              </BackgroundImage>
              <div className="article-description">
                <PortableText value={description} />
              </div>
            </div>
          </div>
        </BackgroundImage>
      </div>

     {recent_section &&  <div className="related-articles">
        <div className="container">
          <div className="section-header">
            {/* <h2> Related Videos </h2>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
            {/* <h2>{sub_title}</h2> */}
            <h2>{recent_section?.title}</h2>
            <p>{recent_section?.description}</p>
            {/* <p>{sub_description}</p> */}
          </div>
          <div className="related-article-inner">
            <ul>
              {Array.isArray(allArticles?.edges) &&
                allArticles.edges.filter(i=>i?.node?.slug?.current !== slug?.current).slice(0, 3).map((i) => {
                  const img = getImage(i.node.background_image.asset);
                  const bgImg = convertToBgImage(img);
                  return (
                    <li className="article-col">
                      <BackgroundImage fluid={bgImg?.fluid} className="article-col-bg">
                        <h4> {i?.node?.title} </h4>
                        <p> {i?.node?.sub_description} </p>
                        <div className="article-col-tags">
                          <ul>
                            {i?.node?.tags?.map((tag) => (
                              <li>
                                <a> {tag?.tag_name} </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="article-link">
                          <Link
                            to={"/resources" + getLink(i?.node?.slug?.current)}
                          >
                            LEARN MORE
                          </Link>
                        </div>
                      </BackgroundImage>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default ArticleDetail;
