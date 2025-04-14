import { PortableText } from "@portabletext/react";
import { graphql, Link, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import { getLink } from "../../utils/helper";
import './video-details.scss';

const VideoDetailSection = ({ videodetail }) => {
  const { resources } = useContext(GlobalContext);
  const { data, method } = resources;
  const { tab } = data;
  const { setTab } = method;
  useEffect(() => {
    setTab("Videos");
  }, []);
  const {
    descrp,
    slug,
    sub_description,
    sub_title,
    tags,
    thumbnail,
    recent_section,
    title,
    url,
    background_image
  } = videodetail;
  const img = getImage(background_image.asset);
  const bgImg = convertToBgImage(img);
  const { allVideosDetails } = useStaticQuery(graphql`
    {
      allVideosDetails: allSanityVideoDetailPage {
        edges {
          node {
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
            description {
              children {
                text
                _key
                _type
              }
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

  return (
    <div>
      
        <div className="videodetails-section">
        <BackgroundImage fluid={bgImg?.fluid}>
          <div className="container">
            <div className="collapsible-video-details">

              <div className="videos-frame">
                <iframe
                  width="560"
                  height="315"
                  src={url || ""}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen;"
                  allowfullscreen={true}
                ></iframe>
              </div>

              <div className="video-tags">
                <ul>
                  {Array.isArray(tags) && tags?.map((tag) => (
                    <li>
                      <a> {tag?.tag_name} </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="video-description">
                <h4>{title} </h4>
                <PortableText value={descrp} />
              </div>
            </div>
          </div>
          </BackgroundImage>
        </div>
      
      <div className="related-videos">
        <div className="container">
          <div className="section-header">
            {/* <h2> Related Videos </h2>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p> */}
            {/* <h2>{sub_title}</h2> */}
            <h2>{recent_section?.title}</h2>
            <p>{recent_section?.description}</p>
            {/* <p>{sub_description}</p> */}
          </div>
          <div className="related-video-inner">
            <ul>
              {Array.isArray(allVideosDetails?.edges) && allVideosDetails.edges.slice(0, 3).map((i) => (
                <li className="video-col">
                  <Link to={'/resources' + getLink(i?.node?.slug?.current)} >
                  <div className='video-col-img'>
                    <GatsbyImage
                      image={getImage(
                        i?.node?.thumbnail?.asset?.gatsbyImageData
                      )}
                    />
                    <div className="play-btn"></div>
                    </div>
                    <a className='title-link'> {i?.node?.title} </a>
                    
                  </Link>
                  <p> {i?.node?.sub_description} </p>
                  <div className="video-col-tags">
                    <ul>
                      {i?.node?.tags?.map((tag) => (
                        <li>
                          <a> {tag?.tag_name} </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailSection;
