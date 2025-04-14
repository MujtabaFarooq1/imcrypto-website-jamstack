import React, { useEffect, useState } from "react";
import { clearParams, getParam, setParam } from "../../utils/helper";
import Button from "../button";
import "./pricefilter.scss";
import star_blank from "../../images/blank-star.png";
import star_fill from "../../images/single-star.png";
import PriceFilterTest from "../PriceFilter";

const PriceFilter = (props) => {
  const { location, max, pathPrefix } = props || {};
  const arr = new Array(5).fill(0);
  const [price_high, setPriceHigh] = useState(100);
  const [price_low, setPriceLow] = useState(0);
  const curRatingParams = getParam(location, "rating") || 0;
  const [rating, setRating] = useState(curRatingParams);
  const ratingTags = ["Poor", "Normal", "Good", "Great", "Excellent"];

  useEffect(() => {
    setRating(curRatingParams);
  }, [curRatingParams]);

  const filters = () => {
    let filters = [];
    if (price_high) {
      filters.push({ key: `price_high`, value: price_high });
    }
    if (price_low) {
      filters.push({ key: `price_low`, value: price_low });
    }
    if (rating) {
      filters.push({ key: `rating`, value: rating });
    }
    return filters;
  };

  return (
    <div className="price-filter">
      <div className="merch-filter">
        <h6>FILTER BY PRICE</h6>
        <span>Price</span>
        {/* <input
          type="range"
          id="vol"
          name="vol"
          min="0"
          max={max}
          step="1"
          className="slider-dot"
          defaultValue={getParam(location, `price_high`) === null ? 0 : getParam(location, `price_high`)}
          onChange={(e) => setPriceHigh(e.target.value)}
          value={price_high || 0}
        />
        
        <label> Price: ${price_high || 0}</label> */}

        <PriceFilterTest max={max} min={0} location={location} onChange={({ min, max }) => { setPriceHigh(max); setPriceLow(min) }} />
        <label> Price: ${price_low || 0} - ${price_high || max}</label>
      </div>

      <div className="merchpage-rating">
        <div className="dividerline"></div>
        <span>Rating</span>
        <div className="product-rating-details">
          <ul>
            {[...new Array(5)]?.fill(1, 0, rating)?.map((i, index) => (
              <li>
                <img
                  onClick={() => setRating(index + 1)}
                  src={i === 1 ? star_fill : star_blank}
                />
              </li>
            ))}
          </ul>
          <p> {ratingTags[parseInt(curRatingParams) - 1]} </p>
        </div>

        <div className="filter-button">
          <Button
            onClick={() => {
              setParam(
                { pathname: pathPrefix, search: location.search },
                filters(),
                true
              );
            }}
          >
            FILTER
          </Button>
          <Button
            onClick={(e) => {
              setPriceHigh(max);
              setPriceLow(0);
              setRating(null);
              clearParams(location);
            }}
            preventScrollReset
          >
            CLEAR ALL FILTERS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;