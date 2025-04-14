import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Carousel from "react-multi-carousel";
import { Strings } from "../../resources";
// import "react-multi-carousel/lib/styles.css";
import Articles from "../articles";
import Button from "../button";
import "./blogs.scss";

const Blogs = (props) => {
  const { articles, main } = useStaticQuery(graphql`
    query BlogsQuery {
      main: allSanityBlogsSection {
        edges {
          node {
            id

            all_blogs_button {
              button_label
              button_link
            }
            section_title
            title

            description
          }
        }
      }
      articles: allSanityBlogs {
        edges {
          node {
            _type
            slug {
              current
            }
            tags {
              tag_name
            }
            title
            author {
              author_name
            }
            blog_categories {
              slug {
                current
              }
              category_name
            }
            blog_image {
              asset {
                gatsbyImageData(formats: WEBP)
              }
            }
            desc
            created_date
          }
        }
      }
    }
  `);
  const node = main.edges[0]?.node;
  // console.clear();
  console.log(node);
  const { all_blogs_button, title, section_title, description } = node || {};
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 4,
      slidesToShow: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToShow: 1,
    },
  };

  return (
    <div id="recent-blogs" className="recentblogs-scetion">
      <div className="container">
        <div className="recentblogs-inner-section">
          <div className="section-header">
            <h2>{section_title || "BLOGS"} </h2>
          </div>
          <div className="recentblog-main-content">
            {/* <div className="recentblog-slider-info">
              <div className="section-header">
                <h6> {section_title} </h6>
                <h2> {title} </h2>
                <p> {description} </p>
              </div>
              <div className="view-all-btn">
                <Button
                  link={
                    all_blogs_button?.button_link
                  }
                >
                  {all_blogs_button?.button_label ||
                    "View All Blogs"}
                </Button>
              </div>
            </div> */}
            <div className="recentblog-main-slider">
              {/* <div className='blogs-col-cover'>
                                    {articles?.edges?.map((a) => (
                                        <Articles {...a?.node} />
                                    ))}
                             </div> */}
              <div className="blogs-col-cover">
                <Carousel
                  swipeable={true}
                  draggable={true}
                  responsive={responsive}
                  infinite={true}
                  autoPlaySpeed={1000}
                  customTransition="all 1s"
                  transitionDuration={500}
                  ltr={true}
                  ssr={true}
                  containerClass="carousel-container"
                  itemClass="carousel-item-padding-40-px"
                >
                  {articles?.edges?.map((a) => (
                    <Articles {...a?.node} />
                  ))}
                </Carousel>
              </div>
            </div>
            <div class="blur-cover"></div>
            <div class="blog-comingsoon">
              <div class="overlay-text">
                <div class="overlay-header">
                  <h2>Coming Soon...</h2>
                  <h6>We are still working on it.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
