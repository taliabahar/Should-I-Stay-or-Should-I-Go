import React, { useState } from "react";
import logo from "./logo.svg";
import "./InputFields.css";
import {
  searchRecipe,
  nutritionResults,
  menuItemSearch,
  menuItemId
} from "./spoonAPI.js";

function InputFields() {
  const [foodEntry, setFoodEntry] = useState("");
  // const [recipeGeneralInfo, setRecipeGeneralInfo] = useState("");
  // const [menuItemGeneralInfo, setMenuItemGeneralInfo] = useState("");
  // const [recipeNutritionInfo, setRecipeNutrtionInfo] = useState("");
  // const [menuItemNutritionInfo, setMenuItemNutritionInfo] = useState("");
  const [recipeID, setRecipeID] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeTitle, setRecipeTitle] = useState("");
  
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

  // async function grabData() {
  //   try {
  //     const postData = await postPackageWebhooks(carrier, trackingNum); // REAL API - POST
  //     const data = await getTrackingStatus(carrier, trackingNum); // REAL API - GET
  //     const currentTrackingHistoryItem =
  //       data.tracking_history[data.tracking_history.length - 1];
  //     setStatus(currentTrackingHistoryItem.status);
  //     setStatusDetails(currentTrackingHistoryItem.status_details);
  //     setPackageCity(currentTrackingHistoryItem.location.city);
  //     setPackageCountry(currentTrackingHistoryItem.location.country);
  //   } catch (error) {
  //     setError("Sorry, but something went wrong.");
  //   }
  // }

  async function grabData() {
    try {
      const searchRecipeResults = await searchRecipe(foodEntry);
      const menuItemSearchResults = await menuItemSearch(foodEntry);
      // below need to map through these 2 results and grab each needed ID can also create states to store recipe info like name now
      setRecipeID(searchRecipeResults.results[0].id);
      setRecipeImage(searchRecipeResults.results[0].image);
      setRecipeTitle(searchRecipeResults.results[0].title);

      setMenuID(menuItemSearchResults.menuItems[0].id);
      setMenuImage(menuItemSearchResults.menuItems[0].image);
      setMenuTitle(menuItemSearchResults.menuItems[0].title);
      setMenuChain(menuItemSearchResults.menuItems[0].restaurantChain);
      
      // setMenuID(menuItemSearchResults.
      const recipeNutritionInfo = await nutritionResults(recipeID);
      const menuItemNutritionInfo = await menuItemId(menuID);


      setRecipeCal(recipeNutritionInfo.calories);
      setRecipeCarbs(recipeNutritionInfo.carbs);
      setRecipeFat(recipeNutritionInfo.fat);
      setRecipeProtein(recipeNutritionInfo.protein);

      setMenuCal(menuItemNutritionInfo.nutrition.calories);
      setMenuCarbs(menuItemNutritionInfo.nutrition.carbs);
      setMenuFat(menuItemNutritionInfo.nutrition.fat);
      setMenuProtein(menuItemNutritionInfo.nutrition.protein);
      // now that we have the data from the 4 api calls you can create states
      // like above for things you want to store when traversing through the object like calories, protein, etc.
      //ex setRecipeCalories(nutritionResult.______._______)
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
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
        ></input>
      </form>
    </div>
  );
}

export default InputFields;
