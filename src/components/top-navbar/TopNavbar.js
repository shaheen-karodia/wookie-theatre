import React from "react";
import "./top-navbar.scss";
import SearchMovie from "../search-movie/SearchMovie";
import { Link } from "react-router-dom";

function TopNavbar() {
  return (
    <div className="top-navbar">
      <Link to={`/`}>
        <div className="logo-wrapper">
          <img
            className="logo-icon"
            src="/images/logo/chewie_icon.svg"
            alt="Chewie Icon"
          />
          <img
            className="logo-text"
            src="/images/logo/logo_text.svg"
            alt="Wookie Movies"
          />
        </div>
      </Link>

      <div className="search-wrapper">
        <SearchMovie />
      </div>
    </div>
  );
}

export default TopNavbar;
