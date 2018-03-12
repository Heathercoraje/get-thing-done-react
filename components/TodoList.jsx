import React from 'react';
import styled from 'styled-components';

const DescBox = styled.textarea`
	outline: none;
	border: none;
	width: 30vw;
	height: 7vh;
`;

const TodoList = (props) => {
  const name = props.categories[props.selected].category;
  const todos = props.todos;

  const completeTodo = (event) => {
    document.getElementById(event.target.id).classList.toggle('complete');
  };

  const Desc = (
    <div>
      <h1 className="todo-name">{name}</h1>
      <DescBox
        className="desc"
        type="text"
        onKeyDown={props.HandleDesc}
        spellCheck="false"
        placeholder={props.categories[props.selected].desc}
      />
    </div>
  );
  const Renderlist = (todos) => {
    if (todos.length === 0 || todos === undefined) {
      return '';
    }
    return todos.map(todo => (
      <div className="list-todo" key={todo.id}>
        <button className="checkbox" onClick={props.delete} value={todo.id}>
					&#9744;
        </button>
        <li id={Math.random()} onClick={completeTodo} value={todo.id}>
          {todo.todo}
        </li>
      </div>
    ));
  };

  return (
    <div className="">
      <div>{Desc}</div>
      <div>{Renderlist(todos)}</div>
    </div>
  );
};

export default TodoList;
