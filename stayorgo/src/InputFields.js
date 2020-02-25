import React from "react";
import logo from "./logo.svg";
import "./InputFields.css";

function InputFields() {
  const [foodEntry, setFoodEntry] = useState("");
  return (
    <div className="FoodInput">
      <form>
        <input
          id="foodInfo"
          placeholder="What type of food are you looking for?"
          type="text"
          onChange={e => setFoodEntry(e.target.value)}
          value={foodEntry}
        ></input>
      </form>
    </div>
  );
}

export default InputFields;
