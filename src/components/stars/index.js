import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import five_star from '../../images/5-star.png';
import four_star from '../../images/4-star.png'
import three_star from '../../images/3-star.png'
import two_star from '../../images/2-star.png'
import one_star from '../../images/1-star.png'
import zero_star from '../../images/0-star.png'
import quarter_star from '../../images/Star_point25.png'
import half_star from '../../images/Star_point5.png'
import above_half_star from '../../images/Star_point75.png'

import full_star from "../../images/single-star.png";
import blank_star from "../../images/blank-star.png";

export const isFloat = (n) => {
  return Number(n) === n && n % 1 !== 0;
}

export const PartialStars = ({ number }) => {
  if (number <= 0.33) {
    return <img src={quarter_star} />
  } else if (number <= 0.66) {
    return <img src={half_star} />
  } else if (number >= 0.66) {
    return <img src={above_half_star} />
  }
};

export const averageStars = (avarage_rating) => {
  return (
    <>
      {avarage_rating ? (
        isFloat(avarage_rating) ? (
          <>
            {[...new Array(Math?.floor(avarage_rating))]?.map((i) => (
              <img src={full_star} />
            ))}
            {[...new Array(5 - Math?.floor(avarage_rating))].map((i, index) =>
              index > 0 ? (
                <img src={blank_star} />
              ) : (
                <PartialStars
                  number={avarage_rating - Math.floor(avarage_rating)}
                />
              )
            )}
          </>
        ) : (
          <>
            {[...new Array(5)].fill(1, 0, avarage_rating)?.map((i) => (
              <>{i == 1 ? <img src={full_star} /> : <img src={blank_star} />}</>
            ))}
          </>
        )
      ) : (
        <>
          {[...new Array(5)].map((i) => (
            <img src={blank_star} />
          ))}
        </>
      )}
    </>
  );
};

const Stars = ({ number }) => {

  const stars = [zero_star, one_star, two_star, three_star, four_star, five_star]
  return <img src={stars[number || 0]} />
};

export default Stars;
