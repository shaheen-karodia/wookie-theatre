import React, { useEffect } from "react";
import MovieCarousel from "../movie-carousel/MovieCarousel";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../state_management/moviesSlice";
import "./home-page.scss";
import StandardContainer from "../utilities/standard-container/StandardContainer";

function HomePage() {
  const dispatch = useDispatch();
  const fetchMoviesStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (fetchMoviesStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, fetchMoviesStatus]);

  if (fetchMoviesStatus === "loading") return <div>Loading</div>;
  return (
    <div className="home-page">
      <StandardContainer>
        <GenraCarousels />
      </StandardContainer>
    </div>
  );
}

const GenraCarousels = () => {
  const moviesBySlug = useSelector((state) => state.movies.moviesBySlug);
  const movieSlugsByGenra = useSelector(
    (state) => state.movies.movieSlugsByGenra
  );

  return Object.entries(movieSlugsByGenra).map(([genra, movieSlugs]) => {
    const movies = movieSlugs.map((slug) => moviesBySlug[slug]);
    return (
      <div className="carousel-wrapper" key={genra}>
        <div className="genra-title">{genra}</div>
        <MovieCarousel movies={movies} />
      </div>
    );
  });
};

export default HomePage;
