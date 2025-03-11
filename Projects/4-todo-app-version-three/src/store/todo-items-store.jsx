import {createContext, useReducer} from 'react';

export const TodoItemsContext = createContext([]); // Create a context object

const todoItemsReducer = (currTodoItem, action) => {

    let newTodoItems = currTodoItem;
    if (action.type === "ADD_ITEM") {
      return [
        ...currTodoItem,
        {
          id: Date.now(),
          name: action.payload.itemName,
          dueDate: action.payload.itemDueDate,
        },
      ];
    }
      else if (action.type === "DELETE_ITEM") {
      return action.payload;
    }
    return newTodoItems;
  
  };



const TodoItemsContextProvider = ({ children }) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    // Function to handle new todo items
    const addNewItem = (itemName, itemDueDate) => {
  
      const newItemAction = {
        type: "ADD_ITEM",
        payload: {
          itemName,
          itemDueDate,
        },
      };
  
      dispatchTodoItems(newItemAction);
     
    };
  
    // Function to delete a todo item by ID
    const deleteItem = (todoItemId) => {
      dispatchTodoItems({
        type: "DELETE_ITEM",
        payload: todoItems.filter((item) => item.id !== todoItemId),
      });
    };
    return (
      <TodoItemsContext.Provider 
        value={{ 
          todoItems, 
          addNewItem, 
          deleteItem 
        }}>
          {children}
      </TodoItemsContext.Provider>
    );
};  

export default TodoItemsContextProvider;
