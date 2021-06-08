import React from "react";
import "./TopNavbar.scss";
import SearchMovie from "./SearchMovie";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        <img
          className="logo-icon"
          src="/images/logo/chewie_icon.svg"
          alt="Chewie Icon"
        />
      </Link>
      <Link to="/">
        <img
          className="logo-text"
          src="/images/logo/logo_text.svg"
          alt="Wookie Movies"
        />
      </Link>
    </div>
  );
};

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <Logo />
      <div className="search-wrapper">
        <SearchMovie />
      </div>
    </div>
  );
};

export default TopNavbar;
