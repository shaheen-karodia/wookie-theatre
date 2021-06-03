import React from "react";
import PropTypes from "prop-types";
import HomePage from "./home-page/HomePage";
import MovieDetailsPage from "./movie-details-page/MovieDetailsPage";
import TopNavbar from "./top-navbar/TopNavbar";
import { Switch, Route, Link } from "react-router-dom";

function App(props) {
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
        {/* TODO 404 case */}
      </Switch>
    </div>
  );
}

App.propTypes = {};

export default App;
