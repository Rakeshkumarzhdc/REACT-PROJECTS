import Item from "./item";
const FoodItems = () => {
     let foodItems = ["Dal","Green Vegetable","Roti","Salad","Milk", "Ghee"];
 // Example food items array

    return (
        <ul className="list-group">
            {foodItems.map((item) => (
                <Item key = {item}foodItem={item} key={item} />
            ))}
        </ul>
    );
};
export default FoodItems;