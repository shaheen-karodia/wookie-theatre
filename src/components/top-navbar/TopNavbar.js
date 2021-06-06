import React from "react";
import "./top-navbar.scss";
import PropTypes from "prop-types";

function TopNavbar(props) {
  return (
    <div className="top-navbar">
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

      <div className="search-wrapper">
        <img
          className="search-icon"
          src="/images/icons/search_icon.svg"
          alt="Search Icon"
        />
        <input
          className="search-input"
          type="text"
          placeholder="Search title..."
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

TopNavbar.propTypes = {};

export default TopNavbar;
