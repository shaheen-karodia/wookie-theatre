import React from "react";
import "./StandardPage.scss";

function StandardPage({ children }) {
  return (
    <div className="standard-page">
      <div className="container">{children}</div>
    </div>
  );
}

export default StandardPage;
