import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  let foodItems = ["Dal","Green Vegetable","Roti","Salad","Milk", "Ghee"];
 return <>
 <h1>Healthy Food</h1>
 <FoodItems items={foodItems}></FoodItems>
 <ErrorMessage></ErrorMessage>
</ >
}

export default App;
