import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../state_management/moviesSlice";
import BrowseMovies from "./BrowseMovies";
import apiEnumStates from "../../enums/apiEnumStates";

const { IDLE, FAILED, SUCCEEDED, LOADING } = apiEnumStates;

function BrowseMoviesWrapper() {
  const dispatch = useDispatch();
  const fetchMoviesStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (fetchMoviesStatus === IDLE) {
      dispatch(fetchMovies());
    }
  }, [dispatch, fetchMoviesStatus]);

  switch (fetchMoviesStatus) {
    case LOADING:
      return <div>Loading</div>;
    case SUCCEEDED:
      return <BrowseMovies />;
    case FAILED:
      return <div>Error component</div>;
    default:
      return null;
  }
}

export default BrowseMoviesWrapper;
