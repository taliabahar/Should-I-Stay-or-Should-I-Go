import React from "react";
import logo from "./logo.svg";
import "./Comparison.css";

import Results from "./Results";
import InputFields from "./InputFields";

const Comparison = ({
  menuID, menuImage, recipeID, menuTitle, menuChain, 
  menuCal, menuCarbs, menuFat, menuProtein, 
  recipeTitle, recipeCookTime, recipeServings, recipeImage,
  recipeCal, recipeCarbs, recipeFat, recipeProtein
}) => {
  return (
    <div className="Comparison">
      <div className="stay">
        <h1 id="stay">Stay</h1>
      </div>
      <div className="go">
        <h1 id="go">Go</h1>
      </div>
      <div className="result"> 
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
      
    </div>
  );
}

export default Comparison;
