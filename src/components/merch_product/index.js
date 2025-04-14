import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context";
import React, { createContext, useContext, useEffect, useState } from "react";
import Button from "../button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./merchproduct.scss";
import "../../styles/globalstyle.scss";
import Stars, { averageStars } from "../stars";
import Paginator from "../paginator";
import {
  clearParam,
  clearParams,
  getParam,
  getURL,
  setParam,
} from "../../utils/helper";
import PriceFilter from "../price-filter";
import { GlobalContext } from "../../context";
import { graphql, Link, useStaticQuery } from "gatsby";
import { useScrollRestoration } from "gatsby";

export const CartContext = createContext();

const Product = (props) => {
  const { bodyClass } = React.useContext(GlobalContext);
  const { handleClick, handleRemove } = bodyClass || {};
  const { button, down_arrow_button, product_card, extra_props } = props || {};
  const { pagination, location } = extra_props || {};
  const { merch } = useContext(GlobalContext);
  const { data, method } = merch;
  const { sort, cart } = data;
  const { setSort, setCart } = method;
  const { skip, limit, total } = pagination || {};
  const categorySlug = getParam(location, `category`);
  const categoryCount = getParam(location, `count`);
  const [clicked, setClicked] = useState(false);
  const ulScrollRestoration = useScrollRestoration(`page-component-div`);
  const [currTags, setcurrTags] = useState([]);
  const tagItem = getParam(location, `tags`)?.split("__");

  const search_param = getParam(location, `search_key`) ?? "";
  const [searchValue, setSearchValue] = useState(search_param);
  const search_Product_list = product_card?.filter((i) =>
    i?.product_card?.title?.toLowerCase()?.includes(searchValue?.toLowerCase())
  );
  const tags_filter_prod_list = product_card?.filter(
    (i) =>
      i?.tags?.filter(
        (tg) =>
          tagItem?.filter(
            (i) => i == tg?.tag_name?.replace(/[^a-zA-Z0-9 ]/g, "")
          )?.length > 0
      )?.length > 0
  );

  const getFilter = (card, second) => {
    var include = true;
    const price_high = getParam(location, `price_high`);
    const price_low = getParam(location, `price_low`);
    const rating = getParam(location, `rating`);
    if (price_high) {
      include =
        include &&
        parseInt(card?.product_card?.price?.slice(1)) <= parseInt(price_high);
    }
    if (price_low) {
      include =
        include &&
        parseInt(card?.product_card?.price?.slice(1)) >= parseInt(price_low);
    }
    if (rating) {
      include =
        include &&
        Math.ceil(avarage_rating(card?.slug?.current)) == parseInt(rating);
    }
    if (tagItem) {
      include =
        include &&
        card?.tags?.filter(
          (tg) =>
            tagItem?.filter(
              (i) => i == tg?.tag_name?.replace(/[^a-zA-Z0-9 ]/g, "")
            )?.length > 0
        )?.length > 0;
    }
    if (search_param) {
      include =
        include &&
        card?.product_card?.title
          ?.toLowerCase()
          ?.includes(searchValue?.toLowerCase());
    }
    const selected_category =
      (categorySlug?.toString() || "")?.trim().length > 0
        ? (categorySlug?.toString() || "").split("__")
        : [];
    if (selected_category?.length > 0) {
      if (!selected_category.includes(card.categories?.category_name)) {
        include = false;
      }
    }
    return include;
  };
  const { categories, tags, allProductReview } = useStaticQuery(graphql`
    {
      categories: allSanityCategories {
        edges {
          node {
            category_name
            slug {
              current
            }
          }
        }
      }
      tags: allSanityTags {
        edges {
          node {
            tag_name
          }
        }
      }
      allProductReview: allSanityProductReview {
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

  const avarage_rating = (current) =>
    isNaN(
      Array.isArray(allProductReview?.edges) &&
        allProductReview.edges
          ?.filter((i) => i?.node?.item_slug === current)
          ?.map((i) => i.node.rating)
          .reduce((a, b) => a + b, 0) /
          allProductReview.edges?.filter((i) => i?.node?.item_slug === current)
            ?.length
    )
      ? 0
      : Array.isArray(allProductReview?.edges) &&
        allProductReview.edges
          ?.filter((i) => i?.node?.item_slug === current)
          ?.map((i) => i.node.rating)
          .reduce((a, b) => a + b, 0) /
          allProductReview.edges?.filter((i) => i?.node?.item_slug === current)
            ?.length;
  const getSort = (x, y) => {
    switch (sort) {
      case "price_lh":
        return (
          parseInt(x.product_card.price?.slice(1)) -
          parseInt(y.product_card.price?.slice(1))
        );
      case "price_hl":
        return (
          parseInt(y.product_card.price?.slice(1)) -
          parseInt(x.product_card.price?.slice(1))
        );
      case "rating_lh":
        return parseInt(x.product_card.stars) - parseInt(y.product_card.stars);
      case "rating_hl":
        return parseInt(y.product_card.stars) - parseInt(x.product_card.stars);
      default:
        return;
    }
  };
  const getPaginatorProps = (pagination) => {
    const items = product_card
      ?.filter((card) => getFilter(card, true))
      .filter((i) =>
        clicked
          ? i?.product_card?.title
              .toLowerCase()
              .trim()
              .includes(searchValue.toLowerCase())
          : i
      );
    if (items.length == parseInt(pagination.total * pagination.limit)) {
      return pagination;
    }
    const new_total = Math.ceil(
      parseInt(parseInt(items.length) / parseInt(pagination.limit))
    );
    var updated_obj = { ...pagination, total: new_total > 0 ? new_total : 1 };
    return updated_obj;
  };
  const paginator_props = getPaginatorProps(pagination);
  const homePageProductCard = (i, key) => {
    const { slug } = i;
    const { title, stars, price, image, add_to_cart_button } = i?.product_card;
    return (
      <>
        <li key={key}>
          <div className="product-container">
            <Link
              to={
                slug?.current?.startsWith("/")
                  ? slug?.current?.slice(1)
                  : slug?.current
              }
            >
              <GatsbyImage image={getImage(image?.asset)} />
            </Link>
            <h4>
              {slug.current ? (
                <Link
                  to={
                    slug?.current?.startsWith("/")
                      ? slug?.current?.slice(1)
                      : slug?.current
                  }
                >
                  {title}
                </Link>
              ) : (
                <a>{title}</a>
              )}
            </h4>
            {/* <Stars number={stars} /> */}
            <span>{averageStars(avarage_rating(slug?.current))}</span>
            <h5>{price}</h5>
            <div className="product-cart">
              <button
                className="snipcart-add-item btn_global"
                data-item-id={slug?.current || "testing"}
                data-item-price={
                  i?.product_card?.price?.replace("$", "") || "50"
                }
                data-item-description={
                  i?.product_card?.description || "testing"
                }
                data-item-image={
                  getImage(i?.product_card?.image?.asset)?.images?.fallback?.src
                }
                data-item-name={i?.product_card?.title || "testing"}
              >
                <a href="">{add_to_cart_button?.button_label || ""}</a>
              </button>
            </div>
          </div>
        </li>
      </>
    );
  };
  const showCategories = (category) => {
    const count = product_card?.filter(
      (item) =>
        item?.categories?.category_name?.toString() === category?.toString()
    ).length;

    return (
      <>
        <a
          onClick={() => {
            let categories = (getParam(location, "category") || "")
              .split("__")
              ?.filter((i) => i.trim().length > 0);
            if (
              categories.length > 0 &&
              categories.filter((i) => i !== category)?.length == 0
            ) {
              clearParam(location, "category");
              return;
            }
            if (Array.isArray(categories) && categories.includes(category)) {
              setParam(location, [
                {
                  key: "category",
                  value: `${categories
                    .filter((i) => i !== category)
                    ?.join("__")}`,
                },
              ]);
              return;
            }
            categories.push(category);
            setParam(location, [
              { key: "category", value: `${categories?.join("__")}` },
            ]);
            return;
          }}
          className={
            (getParam(location, "category") || "")
              .split("__")
              ?.includes(category)
              ? "active"
              : ""
          }
        >
          {category}({count})
        </a>
      </>
    );
  };
  const showTags = (tag) => {
    return (
      <>
        <a
          onClick={() =>
            setcurrTags((state) => {
              if (state.includes(tag.trim()?.replace(/[^a-zA-Z0-9 ]/g, ""))) {
                return state.filter(
                  (i) => i !== tag.trim()?.replace(/[^a-zA-Z0-9 ]/g, "")
                );
              } else {
                return [...state, tag.trim()?.replace(/[^a-zA-Z0-9 ]/g, "")];
              }
            })
          }
        >
          {" "}
          {tag}{" "}
        </a>
      </>
    );
  };

  const [cartItems, setCartItem] = useState([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      //   if (user) { // This just shows if the user is loggedIn
      setCartItem(JSON.parse(localStorage.getItem("cart")));
      //   }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      //   if (user) { // This just shows if the user is loggedIn
      localStorage.setItem("cart", JSON.stringify(cartItems));
      //   }
    }
  }, [cartItems]);
  // const handleAddToCartButton = (item) => {
  //   const isPresent = cart?.some((i) => i?.key == item?.key);
  //   if (isPresent) {
  //     setCart(
  //       cart.map((i) => {
  //         if (i.key === item.key) {
  //           return { ...i, count: (i.count ?? 0) + 1 };
  //         }
  //         return i;
  //       })
  //     );
  //   }
  //   if (!isPresent) {
  //     setCart([...(cart ?? []), item]);
  //   }
  // };
  // const handleRemoveCartItem = (itemNumber) => {
  //   const currItems = cartItems?.filter((i) => itemNumber !== i?.key);
  //   setCartItem(currItems);
  //   typeof window !== "undefined" && window.location.reload();
  // };

  useEffect(() => {
    setParam(location, {
      key: `search_key`,
      value: searchValue?.toString()?.toLowerCase(),
    });
    searchValue === "" && setClicked(false);
    !searchValue && clearParams(location);
  }, [searchValue]);

  useEffect(() => {
    if (currTags.length > 0) {
      setParam(location, {
        key: `tags`,
        value: currTags.map((i) => i).join("__"),
      });
    } else {
      clearParam(location, "tags");
    }
  }, [currTags]);

  return (
    <div className="merchproduction-section" {...ulScrollRestoration}>
      <div className="container">
        <div className="merchproduct-inner">
          <div className="merchproduct-list">
            <div className="product-details">
              <div className="product-top-nav">
                <form
                  className="search-bar"
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.target.search.value
                      ? setSearchValue(e.target.search.value)
                      : setSearchValue("");
                    setClicked(true);
                  }}
                >
                  <input
                    name="search"
                    type="text"
                    placeholder="Search by products"
                    // value={searchValue || ""}
                  />
                  <Button
                    link={button?.button_link}
                    onClick={() => setClicked(true)}
                  >
                    {button?.button_label || ""}
                  </Button>
                </form>
                <div className="product-sorting">
                  <select
                    onChange={(e) => setSort(e.target.value)}
                    value={sort}
                  >
                    <option value={``} disabled selected hidden>
                      Default sorting
                    </option>
                    <option value={`price_lh`}>Price (Low to High)</option>
                    <option value={`price_hl`}>Price (High to Low)</option>
                    <option value={`rating_lh`}>Rating (Low to High)</option>
                    <option value={`rating_hl`}>Rating (High to Low)</option>
                  </select>
                </div>
              </div>
              {/* <GatsbyImage image={getImage(down_arrow_button?.asset)} /> */}
              <ul className="list-items">
                {product_card?.filter(getFilter)?.length > 0 ? (
                  product_card                   
                    ?.filter(getFilter)
                    ?.sort(getSort)
                    ?.slice(skip, parseInt(skip) + parseInt(limit))
                    ?.map((i, index) => homePageProductCard(i, index))
                ) : (
                  <div className="no-product-section">
                    <h4> No Product Found! </h4>
                  </div>
                )}
              </ul>
              <Paginator
                {...paginator_props}
                location={location}
                currLen={
                  product_card?.filter((i) =>
                    clicked
                      ? i?.product_card?.title
                          .toLowerCase()
                          .trim()
                          .includes(searchValue.toLowerCase())
                      : tagItem?.length > 0
                      ? i?.tags?.filter(
                          (tg) =>
                            tagItem?.filter(
                              (i) =>
                                i == tg?.tag_name?.replace(/[^a-zA-Z0-9 ]/g, "")
                            )?.length > 0
                        )
                      : i
                  )?.length
                }
              />
            </div>
            <div className="merchproduct-cart">
              <div className="showcart-btn">
                <button className="snipcart-checkout" onClick={handleClick}>
                  Show Cart
                </button>
              </div>
              {/* <div className="merch-sidebarcart">
                <Cart
                  handleDeleteCartItem={(index) => handleRemoveCartItem(index)}
                />
              </div> */}
              <PriceFilter
                location={location}
                max={Math.max(
                  ...product_card?.map((i) =>
                    parseInt(i?.product_card?.price?.slice(1))
                  )
                )}
                pathPrefix={paginator_props.pathPrefix}
              />
              <div className="merch-category">
                <h6> PRODUCT CATEGORIES </h6>
                {Array.isArray(categories?.edges) &&
                  categories?.edges.map((category) =>
                    showCategories(
                      category?.node?.category_name,
                      category?.node?.slug
                    )
                  )}
              </div>
              <div className="merch-tags">
                <h6> TAGS </h6>
                {Array.isArray(tags?.edges) &&
                  tags?.edges?.map((tag) => showTags(tag?.node?.tag_name))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
