import React, { useEffect } from "react";
import HomePage from "./home-page/HomePage";
import MovieDetailsPage from "./movie-details-page/MovieDetailsPage";
import TopNavbar from "./top-navbar/TopNavbar";
import { Switch, Route, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../state_management/moviesSlice";

const App = () => {
  const dispatch = useDispatch();
  const fetchMoviesStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    console.log("useEffect");
    if (fetchMoviesStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [fetchMovies, dispatch]);

  return (
    <div>
      <TopNavbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/movies/:id">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
