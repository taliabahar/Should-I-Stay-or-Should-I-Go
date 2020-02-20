import React from "react";
import logo from "./logo.svg";
import "./Compaison.css";

import Results from "./Results";

function Comparison() {
  return (
    <div className="Comparison">
      <div className="stay">
        <h1 id="stay">Stay</h1>
      </div>
      <div className="go">
        <h1>Go</h1>
      </div>
      <Results></Results>
    </div>
  );
}

export default Comparison;
