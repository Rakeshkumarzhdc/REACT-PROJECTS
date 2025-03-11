import style from "./foodInput.module.css";
const FoodInput = ({handleKeyDown}) =>{

    const handleOnChange = (event) => {
        console.log(event.target.value);
    };
   
    return <input 
    type="text" placeholder="Add food item" className={style.foodInput} 
    onKeyDown={handleKeyDown}
    
    />;
};

export default FoodInput;