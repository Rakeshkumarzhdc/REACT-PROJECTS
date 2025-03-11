import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // let [textToShow,setTextState] = useState(" ");
  let [foodItems, setFoodItems]= useState(["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"]);
  

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItems = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItems];
      setFoodItems(newItems);
      // console.log('Food Value entered is ' + newFoodItems);
    }
          //  console.log(event);
          //  setTextState(event.target.value);
       };

  return (
   <Container>
      <h1>Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <FoodItems items={foodItems} />
     
      <ErrorMessage items={foodItems} />
    </Container>
  );
}

export default App;
