import React from "react";
import "./MovieDetails.scss";
import StarRating from "./StarRating";

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
