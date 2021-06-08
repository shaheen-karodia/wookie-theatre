import React from "react";
import "./StarRating.scss";

const StarRating = ({ imdb_rating }) => {
  let scaledRating = imdb_rating / 2;
  const starItems = [];

  for (let i = 0; i < 5; i++) {
    if (scaledRating >= 1) {
      starItems.push(
        <img
          key={i}
          className="star-item"
          src="/images/icons/star_full.svg"
          alt="star"
        />
      );
    } else if (scaledRating < 1 && scaledRating > 0.4) {
      starItems.push(
        <img
          key={i}
          className="star-item"
          src="/images/icons/star_half.svg"
          alt="half star"
        />
      );
    } else {
      starItems.push(
        <img
          key={i}
          className="star-item"
          src="/images/icons/star_empty.svg"
          alt="no star"
        />
      );
    }

    scaledRating -= 1;
  }

  return <div className="star-rating">{starItems}</div>;
};
export default StarRating;
