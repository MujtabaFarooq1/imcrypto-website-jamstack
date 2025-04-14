import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React, { useContext, useEffect, useState } from "react";

import Button from "../button";
import "./merchdetail.scss";

import CategoryTagsCard from "../categoryTagsCard";
import Cart from "../cart";
import { GlobalContext } from "../../context";
import { graphql, Link, useStaticQuery } from "gatsby";
import Stars, { averageStars, PartialStars } from "../stars";
import { getLink, getParam, setParam } from "../../utils/helper";
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context";
import { client } from "../../utils/config/sanity-client";
import star_blank from "../../images/blank-star.png";
import star_fill from "../../images/single-star.png";
import { Validation } from "../../utils/validation";
import moment from "moment";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

// import MerchCart from '../merchCart'

const MerchDetailPage = ({ content, location }) => {

  const {
    product_card,
    description_card,
    categories,
    tags,
    background_image,
    slug: { current },
  } = content || {};

  const image = getImage(background_image?.asset);
  const bgImage = convertToBgImage(image);

  const [view, setView] = useState("description");

  const text = view ? (
    <div>
      {Array.isArray(description_card) &&
        description_card.map((i) =>
          i.description.map((j) => j.children.map((k) => <p>{k.text}</p>))
        )}
    </div>
  ) : (
    " "
  );

  const [cartItems, setCartItem] = useState([]);
  const { merch } = useContext(GlobalContext);
  const { data, method } = merch;
  const { sort, cart } = data;
  const { setCart } = method;
  const Qty = cart?.find((i) => i?.key == current)?.count;
  const [currItemCount, setCurrItemCount] = useState(1);
  const [currImage, setCurrImage] = useState(
    product_card.image?.asset?.gatsbyImageData
  );
  const [checkbox, setcheckBox] = useState(false);

  const [reviewMessage, setReviewMessage] = useState({
    _type: "product_review",
    name: "",
    rating: 0,
    message: "",
    email: "",
    date: null,
    item_slug: "",
  });
  const [error, setError] = useState({
    name: false,
    rating: false,
    message: false,
    email: false,
  });

  const validate = () => {
    var isValid = true;
    Object.entries(reviewMessage).map(([key, value]) => {
      switch (key) {
        case "email":
          setError((state) => ({
            ...state,
            email: !Validation.isValidEmail(value),
          }));
          isValid = isValid && Validation.isValidEmail(value);
          return;
        case "rating":
          setError((state) => ({ ...state, rating: !(value > 0) }));
          isValid = isValid && value > 0;
          return;
        case "name":
          setError((state) => ({ ...state, name: Validation.isEmpty(value) }));
          isValid = isValid && !Validation.isEmpty(value);
          return;
        default:
          return;
      }
    });
    return isValid;
  };

  const submitReview = async (e) => {
    if (validate()) {
      const doc = {
        ...reviewMessage,
        date: moment(new Date()).format("YYYY-MM-DD"),
        item_slug: current.toString(),
      };
      try {
        const res = await client.create(doc);
      } catch (error) {
        console.log(error, "error");
      }
    }
    setReviewMessage({
      _type: "product_review",
      name: "",
      rating: 0,
      message: "",
      email: "",
      date: null,
      item_slug: "",
    });
    setcheckBox(false);
    return;
  };

  const handleAddToCartButton = (item) => {
    const isPresent = cart?.some((i) => i?.key == item?.key);
    if (isPresent) {
      setCart(
        cart.map((i) => {
          if (i.key === item.key) {
            return { ...i, count: currItemCount };
          }
          return i;
        })
      );
    }
    if (!isPresent && currItemCount != (null || 0)) {
      setCart([...(cart ?? []), item]);
    }
  };
  const [inputError, setInputError] = useState(false);

  const { state, changeLanguage } = useContext(SnipcartContext);
  const { allProducts, allProductReview } = useStaticQuery(graphql`
    {
      allProducts: allSanityProducts(limit: 3) {
        edges {
          node {
            title
            slug {
              current
            }
            product_card {
              title
              stars
              image {
                asset {
                  gatsbyImageData(formats: WEBP)
                }
              }
              price
              add_to_cart_button {
                button_label
                button_link
                background
                _key
              }
            }
          }
        }
      }
      allProductReview: allSanityProductReview(
        sort: { fields: date, order: DESC }
      ) {
        edges {
          node {
            email
            name
            message
            rating
            date
            item_slug
          }
        }
      }
    }
  `);

  const avarage_rating = isNaN(
    Array.isArray(allProductReview.edges) &&
    allProductReview.edges
      ?.filter((i) => i?.node?.item_slug === current)
      ?.map((i) => i.node.rating)
      .reduce((a, b) => a + b, 0) /
    allProductReview.edges?.filter((i) => i?.node?.item_slug === current)
      ?.length
  )
    ? 0
    : Array.isArray(allProductReview.edges) &&
    allProductReview.edges
      ?.filter((i) => i?.node?.item_slug === current)
      ?.map((i) => i.node.rating)
      .reduce((a, b) => a + b, 0) /
    allProductReview.edges?.filter((i) => i?.node?.item_slug === current)
      ?.length;

  const relatedProducts = (product) => {
    return (
      <li>
        <Link to={getLink("merch/" + product?.slug?.current)}>
          <div className="products-row">
            <div className="products-img">
              <GatsbyImage
                image={getImage(product?.product_card?.image?.asset)}
              />
            </div>
            <div className="products-details">
              <div className="products-details-left">
                <h4>{product?.product_card?.title}</h4>
                <h5>{product?.product_card?.price}</h5>
              </div>
              <div className="products-details-right">
                <div className="products-rating">
                  <Stars number={product?.product_card?.stars} />
                </div>
                <div className="products-cart">
                  <Button
                    link={
                      product?.product_card?.add_to_cart_button?.button_link
                    }
                    onClick={() =>
                      handleAddToCartButton({
                        ...product?.product_card,
                        key: product?.slug?.current,
                      })
                    }
                  >
                    {product?.product_card?.add_to_cart_button?.button_label ||
                      ""}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  };

  useEffect(() => currItemCount != 0 && setInputError(false), [currItemCount]);

  return (
    <div className="merchdeails-section">
      <BackgroundImage {...bgImage}>
        <div className="container">
          <div className="merchdeails-inner">
            <div className="merch-product-details">
              <div className="merch-product-cover">

                <div className="product-info-details">
                  <div className="product-info-left">
                    <GatsbyImage image={getImage(currImage)} />
                    <ul>
                      <li>
                        {Array.isArray(product_card.card_sub_object) &&
                          product_card.card_sub_object.map((i) => {
                            return (
                              <div
                                onClick={() =>
                                  setCurrImage(
                                    i.product_image?.asset?.gatsbyImageData
                                  )
                                }
                              >
                                <GatsbyImage
                                  image={getImage(
                                    i.product_image?.asset?.gatsbyImageData
                                  )}
                                />
                              </div>
                            );
                          })}
                      </li>
                    </ul>
                  </div>

                  <div className="product-info-right">
                    <div className="product-review-star">
                      <span>{averageStars(avarage_rating)}</span>

                      <span>
                        (
                        {
                          allProductReview?.edges?.filter(
                            (i) => i?.node?.item_slug === current
                          )?.length
                        }{" "}
                        Customer reviews)
                      </span>
                    </div>
                    <h5>{product_card.title}</h5>
                    <h6>{product_card.price}</h6>
                    <div className="product-qty-box">
                      <div className="qty-label">
                        <span>{product_card.qty}</span>
                      </div>
                      <div className="qty-items">
                        <div className="qty-item-number">
                          <input
                            type="number"
                            name={currItemCount ?? Qty}
                            value={currItemCount ?? Qty}
                            onChange={(e) => {
                              setCurrItemCount(parseInt(e.target.value));
                            }}
                          />
                        </div>
                        <div className="qty-item-control">
                          <div
                            onClick={() =>
                              setCurrItemCount(
                                currItemCount
                                  ? currItemCount + 1
                                  : parseInt(Qty ?? 0) + 1
                              )
                            }
                          >
                            +
                          </div>
                          <div
                            onClick={() =>
                              (currItemCount ?? parseInt(Qty ?? 0)) > 1 &&
                              setCurrItemCount(
                                currItemCount
                                  ? currItemCount - 1
                                  : parseInt(Qty ?? 1) - 1
                              )
                            }
                          >
                            -
                          </div>
                        </div>
                      </div>
                      {/* {inputError && <span className="error-message"> select the quantity** </span>} */}
                    </div>
                    {inputError && (
                      <span className="error-message">
                        {" "}
                        select the quantity*{" "}
                      </span>
                    )}
                    {currItemCount != 0 ? (
                      <button
                        className="snipcart-add-item btn_global"
                        data-item-id={current || ""}
                        data-item-price={
                          product_card?.price?.replace("$", "") || ""
                        }
                        data-item-description={product_card?.description || ""}
                        data-item-image={product_card.image?.asset?.url}
                        data-item-name={product_card?.title || ""}
                        data-item-quantity={currItemCount}
                        date-item-url={"/merch/" + current}
                      >
                        <a href="">
                          {product_card.add_to_cart_button?.button_label || ""}
                        </a>
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          return setInputError(true);
                        }}
                      >
                        {" "}
                        <a href="">
                          {product_card.add_to_cart_button?.button_label || ""}
                        </a>{" "}
                      </button>
                    )}

                    {/* <Button
                        link={product_card.add_to_cart_button?.button_link}
                        onClick={() =>
                          handleAddToCartButton({
                            ...product_card,
                            key: current,
                          })
                        }
                      >
                        {product_card.add_to_cart_button?.button_label || ""}
                      </Button> */}
                  </div>
                </div>

              </div>

              <div className="merchdetails-description">
                <div className="description-tabs">
                  <button
                    className={view === "description" ? "active" : ""}
                    onClick={() => setView("description")}
                  >
                    DESCRIPTION
                  </button>
                  <button
                    className={view === "reviews" ? "active" : ""}
                    onClick={() => setView("reviews")}
                  >
                    REVIEWS
                  </button>
                </div>
                {view == "description" && (
                  <div className="product-details-description">{text}</div>
                )}
                {view == "reviews" && (
                  <div className="merchdetails-noreview">
                    <div className="review-section">
                      <div className="already-review">
                        <div className="review-header">
                          <h6>Rating & Reviews</h6>
                          <h5>
                            {
                              allProductReview?.edges?.filter(
                                (i) => i?.node?.item_slug === current
                              )?.length
                            }{" "}
                            reviews for Black T-shirt with Logo
                          </h5>
                        </div>
                        <div className="review-list">
                          {Array.isArray(allProductReview.edges) &&
                            allProductReview.edges
                              ?.filter(
                                (i) => i?.node?.item_slug === current.toString()
                              )
                              ?.map((rev) => {
                                return (
                                  <ul>
                                    <li>
                                      <div className="review-info-details">
                                        <div className="customer-profile">
                                          <StaticImage
                                            src="../../images/customer-profile.png"
                                            alt="customer"
                                          />
                                        </div>
                                        <div className="review-description-info">
                                          <div className="customer-header">
                                            <h6>{rev?.node?.name}</h6>
                                            <div className="customer-rating">
                                              {/* <StaticImage
                                            src="../../images/4-star.png"
                                            alt="customer"
                                          /> */}
                                              <Stars number={rev?.node?.rating} />
                                            </div>
                                          </div>
                                          <div className="customer-description">
                                            <p>{rev?.node?.message}</p>
                                          </div>
                                          <div className="review-time">
                                            <p>
                                              {rev?.node?.date?.toLocaleString()}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                );
                              })}
                        </div>
                      </div>
                      <div className="add-review">
                        <div className="review-header">
                          <h6>Add a review</h6>
                          <p>
                            Your email address will not be published. Required
                            fields are marked *
                          </p>
                        </div>
                        <div className="add-review-form">
                          <form>
                            <ul>
                              <li>
                                <div
                                  className={`input-item add-review-star ${error.rating ? "error" : ""
                                    }`}
                                >
                                  <label>Rating *</label>
                                  <ul id="rating">
                                    {[...new Array(5)]
                                      ?.fill(1, 0, reviewMessage?.rating)
                                      ?.map((i, index) => (
                                        <li>
                                          <img
                                            onClick={() => {
                                              setReviewMessage({
                                                ...reviewMessage,
                                                rating: index + 1,
                                              });
                                            }}
                                            src={i === 1 ? star_fill : star_blank}
                                          />
                                        </li>
                                      ))}
                                    <p>
                                      <span>.</span>select
                                    </p>
                                  </ul>
                                  {error.rating && <p className="error-msg">This field is required</p>}
                                </div>
                              </li>
                              <li>
                                <div
                                  className={`input-item ${error.message ? "error" : ""
                                    }`}
                                >
                                  <label>Your Review </label>
                                  <textarea
                                    placeholder="Write your review....."
                                    value={reviewMessage?.message}
                                    onChange={(e) => {
                                      setReviewMessage({
                                        ...reviewMessage,
                                        message: e.target.value,
                                      });
                                    }}
                                  ></textarea>
                                </div>
                              </li>
                              <li className="two-column">
                                <div className="input-item">
                                  <div className={error.name ? "error" : ""}>
                                    <label>Name *</label>
                                    <input
                                      id="name"
                                      placeholder="Enter your name..."
                                      value={reviewMessage?.name}
                                      onChange={(e) =>
                                        setReviewMessage({
                                          ...reviewMessage,
                                          name: e.target.value,
                                        })
                                      }
                                    />
                                    {error.name && <p className="error-msg">This field is required</p>}
                                  </div>
                                  <div className={error.email ? "error" : ""}>
                                    <label>Email *</label>
                                    <input
                                      id="email"
                                      placeholder="Enter your email..."
                                      value={reviewMessage?.email}
                                      onChange={(e) => {
                                        setReviewMessage({
                                          ...reviewMessage,
                                          email: e.target.value,
                                        });
                                      }}
                                    />
                                    {error.email && <p className="error-msg">This field is required</p>}
                                  </div>
                                </div>
                              </li>
                              <li className="checkbox-input">
                                {/* <input
                                    type="checkbox"
                                    value={checkbox}
                                    onChange={(e) => setcheckBox(e.target.checked)}
                                  />
                                  <span className="checkmark"></span>
                                  <label>
                                    Save my name, email and website in this browser
                                    for the next time i comment
                                  </label> */}

                                <label class="checkbox-container">
                                  {/* <input type="checkbox" /> */}
                                  <input
                                    type="checkbox"
                                    value={checkbox}
                                    onChange={(e) =>
                                      setcheckBox(e.target.checked)
                                    }
                                  />
                                  <span class={"checkmark"}></span>
                                  Save my name, email and website in this browser
                                  for the next time i comment
                                </label>
                              </li>
                            </ul>
                          </form>
                          {checkbox && (
                            <button onClick={submitReview}>submit review</button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="merch-details-related-products">
                <div className="products-header">
                  <div className="products-header-left">
                    <div className="section-header">
                      <h6> PRODUCTS </h6>
                      <h2> Related products </h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="products-content">
                  <div className="products-list">
                    <ul>
                      {Array.isArray(allProducts?.edges) &&
                        allProducts?.edges.map((i) => relatedProducts(i?.node))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="merchdetail-cart">
              <div className="merch-sidebarcart">
                {/* <Cart /> */}
                <div className="showcart-btn">
                  <button className="snipcart-checkout">Show Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default MerchDetailPage;
