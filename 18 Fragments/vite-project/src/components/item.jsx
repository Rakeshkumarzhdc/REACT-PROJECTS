import style from "./item.module.css";

const Item = ({foodItem, bought, handleBuyButton}) => {
    return (
        <li className={`${style['kg-item']} list-group-item ${bought ? 'active' : ''}`}>
        <span className={style['kg-span']}>{foodItem}</span>
        <button className={`${style.button} btn btn-info `}
        onClick={handleBuyButton}
        >Buy
        </button>
        </li>
    );
};

export default Item;
