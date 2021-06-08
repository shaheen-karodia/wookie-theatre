import React from "react";
import HomePage from "./home-page/HomePage";
import MovieDetails from "./movie-details";
import TopNavbar from "./top-navbar/TopNavbar";
import { Switch, Route } from "react-router-dom";
import StandardPage from "./utilities/standard-page/StandardPage";

const App = () => {
  return (
    <div>
      <TopNavbar />
      <StandardPage>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
      </StandardPage>
    </div>
  );
};

export default App;
