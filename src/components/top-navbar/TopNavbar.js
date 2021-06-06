import React from "react";
import "./top-navbar.scss";
import PropTypes from "prop-types";

function TopNavbar(props) {
  return (
    <div className="top-navbar">
      <input
        type="text"
        placeholder="Search name"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

TopNavbar.propTypes = {};

export default TopNavbar;
