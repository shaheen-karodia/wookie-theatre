import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../state_management/moviesSlice";
import BrowseMovies from "./BrowseMovies";

function BrowseMoviesWrapper() {
  const dispatch = useDispatch();
  const fetchMoviesStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (fetchMoviesStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [dispatch, fetchMoviesStatus]);

  switch (fetchMoviesStatus) {
    case "loading":
      return <div>Loading</div>;
    case "succeeded":
      return <BrowseMovies />;
    default:
      return null;
  }
}

export default BrowseMoviesWrapper;
