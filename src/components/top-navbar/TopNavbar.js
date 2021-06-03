import React from "react";
import "./top-navbar.scss";
import PropTypes from "prop-types";

function TopNavbar(props) {
  return (
    <div className="top-navbar">
      <div class="columns">
        <div class="column">First column</div>
        <div class="column">Second column</div>
        <div class="column">Third column</div>
        <div class="column">Fourth column</div>
      </div>
    </div>
  );
}

TopNavbar.propTypes = {};

export default TopNavbar;
