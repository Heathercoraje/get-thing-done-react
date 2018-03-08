import React from 'react';
import styled from 'styled-components';
// import checkbox from '../assets/checkBox.png';

const TodoList = (props) => {
  const name = props.categories[props.selected].category;
  const todos = props.todos;
  const completeTodo = (event) => {
    document.getElementById(event.target.value).classList.toggle('complete');
  };

  const Renderlist = (todos) => {
    if (todos.length === 0 || todos === undefined) {
      return <p>Add a new task </p>;
    }
    return todos.map(todo => (
      <div className="list-todo" key={todo.id}>
        <button className="checkbox" onClick={props.delete} value={todo.id}>
					&#9744;
        </button>
        <li id={todo.id} onClick={completeTodo} value={todo.id}>
          {todo.todo}
        </li>

        {/* <button onClick={completeTodo} value={todo.id}>
					Complete
        </button> */}
      </div>
    ));
  };

  return (
    <div className="rightList">
      <h1>{name}</h1>
      <div>{Renderlist(todos)}</div>
    </div>
  );
};

export default TodoList;
