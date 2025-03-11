import { useState } from "react";
import Item from "./item";

const FoodItems = ({ items }) => {
  let [activeItem, setActiveItems] = useState([]);
  let onBuyButton = (item,event) => {
    let newItems = [...activeItem, item];
    setActiveItems(newItems);

  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item 
        key={item} 
        foodItem={item} 
        bought={activeItem.includes(item)}
        handleBuyButton={()=>onBuyButton({item,event})
         
    
        } />  
      ))}
    </ul>
  );
};

export default FoodItems;
