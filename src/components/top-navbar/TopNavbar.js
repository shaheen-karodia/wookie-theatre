import React from "react";
import "./top-navbar.scss";
import SearchMovie from "../search-movie/SearchMovie";

function TopNavbar() {
  return (
    <div className="top-navbar">
      {/* <div className="logo-wrapper">
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

      <div className="search-wrapper">
        <img
          className="search-icon"
          src="/images/icons/search_icon.svg"
          alt="Search Icon"
        />
       
      </div> */}

      <SearchMovie />
    </div>
  );
}

export default TopNavbar;
