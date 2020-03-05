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

  { console.log("IN Results menu id ", menuID) 
  console.log("IN Results recipe id", recipeID)
  console.log("In Results menu chain", menuChain)
  console.log("In Results menu title", menuTitle)
  console.log("In Results menu calories", menuCal)
  console.log("In Results menu carbs", menuCarbs)
  console.log("In Results menu fat", menuFat)
  console.log("In Results menu Protein", menuProtein)
  console.log("In Results menu image", menuImage)
  console.log("IN results recipe title", recipeTitle)
  console.log("IN results recipe image", recipeImage) }
  
  return (
    <div className="Results">
      <div id="stay">
        <h3>Let's Stay!</h3>
        <h2>{recipeTitle}</h2>
        <p>Cook Time: {recipeCookTime}</p>
        <p>Servings: {recipeServings}</p>
        <p>Calories: {recipeCal}</p>
        <p>Carbs: {recipeCarbs}</p>
        <p>Fat: {recipeFat}</p>
        <p>Protein: {recipeProtein}</p>
      </div>
      <div id="go">
        <h3>Let's Go!</h3>
        <h2>{menuTitle}</h2>
        <p>Restaurant: {menuChain}</p>
        <p>Nutrition Info: </p>
        <p>Calories: {menuCal}</p>
        <p>Carbs: {menuCarbs}</p>
        <p>Fat: {menuFat}</p>
        <p>Protein: {menuProtein}</p>
      </div>
    </div>
    
  );
}

export default Results;
