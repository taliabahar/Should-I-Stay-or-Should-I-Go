import React from "react";
import logo from "./logo.svg";
import InputFields from "./InputFields.js";
import "./Results.css";

const Results =({
  menuID, menuImage, recipeID, menuTitle, menuChain, 
  menuCal, menuCarbs, menuFat, menuProtein, 
  recipeTitle, recipeCookTime, recipeServings, recipeImage,
  recipeCal, recipeCarbs, recipeFat, recipeProtein
})=> {  
  return (
    <div className="Results">
      <div id="stay">
        <h2>{recipeTitle}</h2>
        <p>Cook Time: {recipeCookTime}</p>
        <p>Servings: {recipeServings}</p>
        <p>Calories: {recipeCal}</p>
        <p>Carbs: {recipeCarbs}</p>
        <p>Fat: {recipeFat}</p>
        <p>Protein: {recipeProtein}</p>
      </div>
      <div id="go">
        <h2>{menuTitle}</h2>
        <p>Restaurant: {menuChain}</p>
        <p>Calories: {menuCal}</p>
        <p>Carbs: {menuCarbs}</p>
        <p>Fat: {menuFat}</p>
        <p>Protein: {menuProtein}</p>
      </div>
    </div>
  );
}

export default Results;
