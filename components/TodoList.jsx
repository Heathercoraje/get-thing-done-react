import React from 'react';

const TodoList = ({ categories, todos, selectedCategory, deleteTodo }) => {
  const targetIndex = selectedCategory;
  const targetTodos = todos[targetIndex];
  const name = categories[targetIndex].category;
  const completeTodo = (event) => {
    document.getElementById(event.target.value).classList.toggle('strike');
  };

  const Renderlist = (targetTodos) => {
    if (targetTodos.length === 0) {
      return <p>Add a new task </p>;
    }
    return targetTodos.map(todo => (
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
    ));
  };
  return (
    <div className="rightList">
      <h1>{name}</h1>
      <p> List of things to do today</p>
      <div>{Renderlist(targetTodos)}</div>
    </div>
  );
};

export default TodoList;
