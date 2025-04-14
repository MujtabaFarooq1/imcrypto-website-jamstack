import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Button from "../button";
import Stars from "../stars";

const ProductCard = ({ data, ...props }) => {
  const { title, price, image, stars, add_to_cart_button } = props || {};

  return (
    <>
      {title?.toLowerCase().includes(data.toLowerCase()) && (<li>
        <div className="products-row">
          <div className="products-img">
            <GatsbyImage image={getImage(image?.asset)} />
          </div>
          <div className="products-details">
            <div className="products-details-left">
              <h4>{title}</h4>
              <h5>{price}</h5>
            </div>
            <div className="products-details-right">
              <div className="products-rating">
                {/* <GatsbyImage image={getImage(item?.star_image?.asset)} /> */}
                <Stars number={stars} />
              </div>
              <div className="products-cart">
                <Button link={add_to_cart_button?.button_link}>
                  {add_to_cart_button?.button_label || ""}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </li>)}

    </>
  );
};

export default ProductCard;
