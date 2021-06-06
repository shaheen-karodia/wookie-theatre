import React from "react";
import HomePage from "./home-page/HomePage";
import MovieDetailsPage from "./movie-details-page/MovieDetailsPage";
import TopNavbar from "./top-navbar/TopNavbar";
import { Switch, Route, Link } from "react-router-dom";

const App = () => {
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
