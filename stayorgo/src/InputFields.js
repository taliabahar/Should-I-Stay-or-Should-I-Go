import React from "react";
import logo from "./logo.svg";
import "./InputFields.css";

function InputFields() {
  return (
    <div className="FoodInput">
      <form>
        <input
          id="foodInfo"
          placeholder="What type of food are you looking for?"
        ></input>
        <input id="locationInfo" placeholder="What is your zip code?"></input>
      </form>
    </div>
  );
}

export default InputFields;
