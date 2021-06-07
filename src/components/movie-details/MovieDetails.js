import React from "react";
import "./movie-details.scss";

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

function MovieDetails({ movie }) {
  const {
    title,
    classification,
    overview,
    imdb_rating,
    length,
    released_on,
    director,
    cast,
    poster,
  } = movie;

  return (
    <div className="movie-details">
      <img className="poster" src={poster} alt={title} />
      <div className="meta-details-wrapper">
        <div className="title-wrapper">
          <h2 className="title">
            {title} ({classification})
          </h2>

          <StarRating imdb_rating={imdb_rating} />
        </div>
        <h3>
          {new Date(released_on).getFullYear()} | {length} |{" "}
          {typeof director === "string" ? director : director.join(", ")}
        </h3>
        <h3>Cast: {cast.join(", ")}</h3>
        <div className="description">{overview}</div>
      </div>
    </div>
  );
}

export default MovieDetails;
