import React from "react";
import BrowseMovies from "./browse-movies";
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
          <Route exact path="/" component={BrowseMovies} />
          <Route path="/movies/:id" component={MovieDetails} />
        </Switch>
      </StandardPage>
    </div>
  );
};

export default App;
