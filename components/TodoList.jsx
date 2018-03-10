import React from 'react';
import styled from 'styled-components';

const Desc = styled.div`
	border: 1px red solid;
	margin-bottom: 6%;
`;

const TodoList = (props) => {
  const name = props.categories[props.selected].category;
  const todos = props.todos;
  const completeTodo = (event) => {
    document.getElementById(event.target.value).classList.toggle('complete');
  };

  const Renderlist = (todos) => {
    if (todos.length === 0 || todos === undefined) {
      return '';
    }
    return todos.map(todo => (
      <div className="list-todo" key={todo.id}>
        <button className="checkbox" onClick={props.delete} value={todo.id}>
					&#9744;
        </button>
        <li id={todo.id} onClick={completeTodo} value={todo.id}>
          {todo.todo}
        </li>
      </div>
    ));
  };

  return (
    <div className="">
      <Desc>
        <h1 className="todo-name">{name}</h1>
        <p className="desc">
          <em>
						Get things done today.<br /> Yesterday, you said tomorrow.
          </em>
        </p>
      </Desc>
      <div>{Renderlist(todos)}</div>
    </div>
  );
};

export default TodoList;
