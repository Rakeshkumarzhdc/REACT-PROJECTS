import "./app.css";
import AppName from "./components/appName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
function App() {
  return (
    <center className="todo-container">
    <AppName />
      <AddTodo />
      <TodoItem1 />
    <TodoItem2 />
  </center>
);
}

export default App;
