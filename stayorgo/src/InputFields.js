import React, { useState } from "react";
import logo from "./logo.svg";
import "./InputFields.css";
import Results from "./Results"
import { NavLink } from "react-router-dom";
import {
  searchRecipe,
  nutritionResults,
  menuItemSearch,
  menuItemId
} from "./spoonAPI.js";
// import Comparison from "./Comparison";
import { Link } from "react-router-dom";

function InputFields() {
  const [foodEntry, setFoodEntry] = useState("");
  const [recipeID, setRecipeID] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeTitle, setRecipeTitle] = useState("");

  const [recipeServings, setRecipeServings] = useState("");
  const [recipeCookTime, setRecipeCookTime] = useState("");
  const [recipeCal, setRecipeCal] = useState("");
  const [recipeCarbs, setRecipeCarbs] = useState("");
  const [recipeFat, setRecipeFat] = useState("");
  const [recipeProtein, setRecipeProtein] = useState("");

  const [menuID, setMenuID] = useState("");
  const [menuImage, setMenuImage] = useState("");
  const [menuTitle, setMenuTitle] = useState("");
  const [menuChain, setMenuChain] = useState("");

  const [menuCal, setMenuCal] = useState("");
  const [menuCarbs, setMenuCarbs] = useState("");
  const [menuFat, setMenuFat] = useState("");
  const [menuProtein, setMenuProtein] = useState("");
  const [error, setError] = useState(null);

  // randomize results
  // loading message
  async function grabData() {
    try {
      //all menu stuff
      const menuItemSearchResults = await menuItemSearch(foodEntry);
      let randomMenuIndex = Math.random() * menuItemSearchResults.totalMenuItems;
      
      setMenuID(menuItemSearchResults.menuItems[0].id);
      setMenuImage(menuItemSearchResults.menuItems[0].image);
      setMenuTitle(menuItemSearchResults.menuItems[0].title);
      setMenuChain(menuItemSearchResults.menuItems[0].restaurantChain);
 
      const menuItemNutritionInfo = await menuItemId(menuItemSearchResults.menuItems[0].id);
 
      setMenuCal(menuItemNutritionInfo.nutrition.calories);
      setMenuCarbs(menuItemNutritionInfo.nutrition.carbs);
      setMenuFat(menuItemNutritionInfo.nutrition.fat);
      setMenuProtein(menuItemNutritionInfo.nutrition.protein);

      //all recipe stuff
      const searchRecipeResults = await searchRecipe(foodEntry);
      let randomRecipeIndex = Math.random() * searchRecipe.totalResults;

      setRecipeID(searchRecipeResults.results[0].id);
      setRecipeCookTime(searchRecipeResults.results[0].readyInMinutes);
      setRecipeServings(searchRecipeResults.results[0].servings);
      setRecipeImage(searchRecipeResults.results[0].image);
      setRecipeTitle(searchRecipeResults.results[0].title);

      const recipeNutritionInfo = await nutritionResults(searchRecipeResults.results[0].id);

      setRecipeCal(recipeNutritionInfo.calories);
      setRecipeCarbs(recipeNutritionInfo.carbs);
      setRecipeFat(recipeNutritionInfo.fat);
      setRecipeProtein(recipeNutritionInfo.protein);
      // ---------------------------------------------------------------------------
      // CAN INCOPORATE RANDOMIZATION ONCE WE GET APIS TO WORK :)
      
      // setRecipeID(searchRecipeResults.results[randomRecipeIndex].id);
      // setRecipeImage(searchRecipeResults.results[randomRecipeIndex].image);
      // setRecipeTitle(searchRecipeResults.results[randomRecipeIndex].title);

      
      // setMenuID(menuItemSearchResults.menuItems[randomMenuIndex].id);
      // setMenuImage(menuItemSearchResults.menuItems[randomMenuIndex].image);
      // setMenuTitle(menuItemSearchResults.menuItems[randomMenuIndex].title);
      // setMenuChain(menuItemSearchResults.menuItems[randomMenuIndex].restaurantChain);
      // ---------------------------------------------------------------------------
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  }

 const onKeyDownHandler = (e) => {
    e.preventDefault();
    // if (e.keyCode === 13) {
    // console.warn("hi");
    grabData();
    
    // }
  }


  return (
    <div className="FoodInput">
      <link rel="stylesheet" href="https://use.typekit.net/mdr8lxf.css"></link>
      <h1>Should I Stay? or Should I Go?</h1>
      <form>
        <input
          id="foodInfo"
          placeholder="  What are you craving?"
          type="text"
          onChange={e => setFoodEntry(e.target.value)}
          value={foodEntry}
          // onKeyDown={onKeyDownHandler.bind(this)}
        ></input>
      </form>
      <button onClick={onKeyDownHandler}>
      <NavLink activeclassName="activeHomeTab" exact id="home" to="/comparison">SEARCH</NavLink></button>
      <Results id="results"
        //all menu related results
        menuID={menuID}
        menuImage={menuImage}
        menuTitle={menuTitle}
        menuChain={menuChain} 
        menuCal={menuCal} 
        menuCarbs={menuCarbs} 
        menuFat={menuFat} 
        menuProtein={menuProtein}
        //all recipe related results
        recipeID={recipeID}
        recipeTitle={recipeTitle}
        recipeCookTime={recipeCookTime}
        recipeServings={recipeServings}
        recipeCal={recipeCal}
        recipeCarbs={recipeCarbs}
        recipeFat={recipeFat}
        recipeProtein={recipeProtein}
        recipeImage={recipeImage}   
      />
    </div> 
  );
}

export default InputFields;
