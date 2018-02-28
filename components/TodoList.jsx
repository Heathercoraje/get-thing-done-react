import React from 'react';

const TodoList = ({ categories, todos, selectedCategory, deleteTodo }) => {
  const target = selectedCategory;
  const targetTodos = todos[target];
  const name = categories[target].category;
  console.log('bestie, this is all todos', todos);
  console.log('bestie, this is todos of selected category', targetTodos);

  const completeTodo = (event) => {
    document.getElementById(event.target.value).classList.toggle('strike');
  };

  const Renderlist = (targetTodos) => {
    console.log(target);

    if (targetTodos.length === 1) {
      return <p>Start adding task </p>;
    }
    return targetTodos.map((todo) => {
      if (todo.id === 0) {
        return '';
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
      <h1>{name}</h1>
      <p> List of things to do today</p>
      <div>{Renderlist(targetTodos)}</div>
    </div>
  );
};

export default TodoList;
