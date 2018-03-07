import React from 'react';

const TodoList = ({ categories, todos, selectedCategory, deleteTodo }) => {
  console.log('me!', todos);
  const name =
  categories[selectedCategory] === undefined
    ? 'Add new category'
    : categories[selectedCategory].category;
  const completeTodo = (event) => {
    document.getElementById(event.target.value).classList.toggle('strike');
  };

  const Renderlist = (todos) => {
    if (todos.length === 0) {
      return <p>Add a new task </p>;
    }
    return todos.map(todo => (
      <div key={todo.id}>
        <li id={todo.id}>{todo.todo}</li>
        <button onClick={deleteTodo} value={todo.id}>
					Delete
        </button>
        <button onClick={completeTodo} value={todo.id}>
					Complete
        </button>
      </div>
    ));
  };
  // return '';
  return (
    <div className="rightList">
      <h1>{name}</h1>
      <div>{Renderlist(todos)}</div>
    </div>
  );
};

export default TodoList;
