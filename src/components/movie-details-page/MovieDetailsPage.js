import React, { useEffect } from "react";
import { fetchMovies } from "../../state_management/moviesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetails from "../movie-details/MovieDetails";
import StandardContainer from "../utilities/standard-container/StandardContainer";

function MovieDetailsPage() {
  const dispatch = useDispatch();
  const fetchMoviesStatus = useSelector((state) => state.movies.status);
  const moviesBySlug = useSelector((state) => state.movies.moviesBySlug);
  const { id } = useParams();

  useEffect(() => {
    if (fetchMoviesStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [fetchMovies, dispatch, fetchMoviesStatus]);

  switch (fetchMoviesStatus) {
    case "loading":
      return <div>Loading</div>;
    case "succeeded":
      return (
        <StandardContainer>
          <MovieDetails movie={moviesBySlug[id]} />
        </StandardContainer>
      );

    default:
      return null;
  }
}

export default MovieDetailsPage;
