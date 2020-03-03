import React from "react";
import logo from "./logo.svg";
import "./Results.css";

const Results =({menuID})=> {
  console.log("IN Results ", menuID)
  return (
    <div className="Results">
      <h2>Title:</h2>
      <p>Cook Time:</p>
      <p>Cost:</p>
    </div>
  );
}

export default Results;
