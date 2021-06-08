import React from "react";
import { useSelector } from "react-redux";
import "./BrowseMovies.scss";
import MovieCarousel from "./MovieCarousel";

const getMoviesByGenra = (movies) => {
  const map = {};
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (!map.hasOwnProperty(genre)) {
        map[genre] = [];
      }
      map[genre].push(movie);
    });
  });

  return map;
};

const MovieCarouselGroup = ({ genra, movies }) => {
  return (
    <div className="carousel-wrapper" key={genra}>
      <div className="genra-title">{genra}</div>
      <MovieCarousel movies={movies} />
    </div>
  );
};

const BrowseMovies = () => {
  const moviesBySlug = useSelector((state) => state.movies.moviesBySlug);
  const movies = Object.values(moviesBySlug);
  const moviesByGenera = getMoviesByGenra(movies);

  return (
    <div className="browse-movies">
      {Object.entries(moviesByGenera).map(([genra, movies]) => {
        return <MovieCarouselGroup genra={genra} movies={movies} />;
      })}
    </div>
  );
};

export default BrowseMovies;
