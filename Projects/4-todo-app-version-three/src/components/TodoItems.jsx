import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems = [], onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          dueDate={item.dueDate}
          name={item.name}
          onDeleteClick={() => onDeleteClick(item.id)}
        />
      ))}
    </div>
  );
};

export default TodoItems;
