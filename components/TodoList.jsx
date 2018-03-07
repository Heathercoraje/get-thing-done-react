import React from 'react';

const TodoList = ({ categories, todos, selectedCategory, deleteTodo }) => {
  const name =
  categories[selectedCategory] === undefined
    ? 'Add new category'
    : categories[selectedCategory].category;
  const completeTodo = (event) => {
    document.getElementById(event.target.value).classList.toggle('strike');
  };

  const Renderlist = (todos) => {
    if (categories[selectedCategory]) {
      if (todos.length === 0) {
        return <p>Add a new task </p>;
      }
      return todos.map(todo => (
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
    }
    return '';
  };
  return (
    <div className="rightList">
      <h1>{name}</h1>
      <div>{Renderlist(todos)}</div>
    </div>
  );
};

export default TodoList;
