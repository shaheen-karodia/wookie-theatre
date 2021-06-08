import React, { useEffect } from "react";
import { fetchMovies } from "../../state_management/moviesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import apiEnumStates from "../../enums/apiEnumStates";

const { IDLE, FAILED, SUCCEEDED, LOADING } = apiEnumStates;

const MovieDetailsWrapper = () => {
  const dispatch = useDispatch();
  const fetchMoviesStatus = useSelector((state) => state.movies.status);
  const moviesBySlug = useSelector((state) => state.movies.moviesBySlug);
  const { id } = useParams();

  useEffect(() => {
    if (fetchMoviesStatus === IDLE) {
      dispatch(fetchMovies());
    }
  }, [dispatch, fetchMoviesStatus]);

  switch (fetchMoviesStatus) {
    case LOADING:
      return <div>Loading component</div>;
    case FAILED:
      return <div>Error component</div>;
    case SUCCEEDED:
      return <MovieDetails movie={moviesBySlug[id]} />;
    default:
      return null;
  }
};

export default MovieDetailsWrapper;
