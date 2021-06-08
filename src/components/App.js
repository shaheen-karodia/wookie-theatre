import React from "react";
import HomePage from "./home-page/HomePage";
import MovieDetailsPage from "./movie-details-page/MovieDetailsPage";
import TopNavbar from "./top-navbar/TopNavbar";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
      </Switch>
    </div>
  );
};

export default App;
