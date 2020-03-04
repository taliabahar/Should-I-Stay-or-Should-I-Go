import React from "react";
import logo from "./logo.svg";
import InputFields from "./InputFields.js";
import "./Results.css";

const Results =({menuID, recipeID, menuTitle})=> {
  console.log("IN Results menu id ", menuID)
  console.log("IN results recipe id", recipeID)
  return (
    <div className="Results">
      <div id="stay">
        <h2>Title:</h2>
        <p>Cook Time:</p>
        <p>Cost:</p>
      </div>
      <div id="go">
        <h2>Food Item:{menuTitle}</h2>
        <p>Restaurant:</p>
        <p>Nutrition Info:</p>
      </div>
    </div>
    
  );
}

export default Results;
