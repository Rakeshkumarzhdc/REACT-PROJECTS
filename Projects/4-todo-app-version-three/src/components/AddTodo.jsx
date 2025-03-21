import {useRef } from "react";
import { IoAddCircle } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {

    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    if (typeof onNewItem === 'function') {
      onNewItem(todoName, dueDate);
    }
  };

  return (
    <div className="container text-center">
      <form className="row kg-row"
      onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input

            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
        
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date"
            ref={dueDateElement}
        
          //  onChange={handleDateChange} 
           />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success kg-button"
            type="submit"
          >
            <IoAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
