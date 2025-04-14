import React from "react";
import "./products.scss";
import { graphql, useStaticQuery } from "gatsby";
import Button from "../button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Stars from "../stars";


const Products = (props) => {
  const { description, section_title, title, view_all_button, } = props || {};
  
  // const { products } = useStaticQuery(graphql`
  //   query ProductCardsQuery {
  //     products: allSanityMerch(limit: 6) {
  //       edges {
  //         node {
  //           sections {
  //             ... on SanityProductsCardSection {
  //               _key
  //               _type
  //               product_card {
  //                 title
  //                 price
  //                 star_image {
  //                   asset {
  //                     gatsbyImageData(formats: WEBP, placeholder: NONE)
  //                   }
  //                 }
  //                 image {
  //                   asset {
  //                     gatsbyImageData(placeholder: NONE, formats: WEBP)
  //                   }
  //                 }
  //                 add_button {
  //                   button_label
  //                   background
  //                   button_link
  //                   _key
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  const { products } = useStaticQuery(graphql`
    query ProductCardsQuery {
      products: allSanityProducts {
        edges {
          node {
            title
            slug {
              current
              _type
              _key
            }
            product_card {
              title
              stars
              price
              add_to_cart_button {
                _key
                background
                button_label
                button_link
              }
              image {
                asset {
                  gatsbyImageData(formats: WEBP, placeholder: NONE)
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="products-section" id="products-section">
      <div className="container">
      
        <div className="products-inner-section">
          <div className="products-header">
            <div className="products-header-left">
              <div className="section-header">
                <h6>{section_title}</h6>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </div>
            {/* <div className="products-header-right">
              <Button link="/products">{view_all_button?.button_label}</Button>
            </div> */}
          </div>
          <div className="relativecss">
          <div className="products-content">
            <div className="products-list">
              <ul>
                {products?.edges?.slice(0, 6)?.map((i) =>
                  <li>
                    <div className="products-row">
                      <div className="products-img">
                        <GatsbyImage image={getImage(i.node?.product_card?.image?.asset)} />
                      </div>
                      <div className="products-details">
                        <div className="products-details-left">
                          <h4>{i.node?.product_card?.title}</h4>
                          <h5>{i.node?.product_card?.price}</h5>
                        </div>
                        <div className="products-details-right">
                          <div className="products-rating">
                            <Stars number={i.node?.product_card?.stars} />
                          </div>
                          <div className="products-cart">
                            {/* <Button link={i.node?.product_card?.add_to_cart_button?.button_link}>
                              {i.node?.product_card?.add_to_cart_button?.button_label || ""}
                            </Button> */}
                            <button
                                className="snipcart-add-item btn_global"
                                data-item-id={i?.node?.slug?.current || "testing"}
                                data-item-price={
                                  i?.node?.product_card?.price?.replace("$", "") ||
                                  "50"
                                }
                                data-item-image={
                                  getImage(i?.node?.product_card?.image?.asset)
                                    ?.images?.fallback?.src
                                }
                                data-item-name={
                                  i?.node?.product_card?.title || "testing"
                                }
                              >
                                <a href="">
                                  {i?.node?.product_card?.add_to_cart_button?.button_label || ""}
                                </a>
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )
                }
              </ul>
            </div>
          </div>
          <div className="blur-cover"></div>
          <div className="product-comingsoon">
                <div className="overlay-text">
                  <div className="overlay-header">
                    <h2>Coming Soon...</h2>
                    <h6>We are still working on it.</h6>
                  </div>
                  {/* <div className="visit-btn">
                    <a>Visit the Resources</a>
                  </div> */}
              </div>
          </div>     
          </div>  



        </div>
      </div>
    </div>
  );
};

export default Products;
