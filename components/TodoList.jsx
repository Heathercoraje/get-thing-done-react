import React from "react";

const TodoList = ({ todos, deleteTodo }) => {
  const completeTodo = event => {
    document.getElementById(event.target.value).classList.toggle("strike");
  };
  const Renderlist = todos => {
    if (todos.length === 1) {
      return <p>Start adding task </p>;
    }
    return todos.map(todo => {
      if (todo.id === 0) {
        return "";
      }
      return (
        <div key={todo.id}>
          <li key={todo.id} id={todo.id}>
            {todo.todo}
            <button onClick={deleteTodo} value={todo.id}>
              Delete
            </button>
            <button onClick={completeTodo} value={todo.id}>
              Complete
            </button>
          </li>
        </div>
      );
    });
  };
  return (
    <div className="rightList">
      <h1> Today </h1>
      <p> List of things to do today</p>
      <div>{Renderlist(todos)}</div>
    </div>
  );
};

export default TodoList;
