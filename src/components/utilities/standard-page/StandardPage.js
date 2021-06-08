import React from "react";
import "./standard-page.scss";

function StandardPage({ children }) {
  return (
    <div className="standard-page">
      <div className="container">{children}</div>
    </div>
  );
}

export default StandardPage;
