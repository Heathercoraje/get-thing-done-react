import React, { Component } from 'react';
import styled from 'styled-components';
import Desc from './Desc';

const Wrapper = styled.div`
	width: 100%;
	overflow-y: auto;
`;

const TodoList = (props) => {
  const todos = props.todos;
  const selected = props.selected;
  const name = props.name;
  const descText = props.categories[selected].desc;
  const Renderlist = !todos
    ? ''
    : todos.map(todo => (
      <TodoItem
        todo={todo.todo}
        key={todo.id}
        id={todo.id}
        isDone={todo.isDone}
        value={todo.id}
        delete={props.delete}
        complete={props.complete}
      />
    ));
  return (
    <Wrapper>
      <Desc
        name={name}
        desc={descText === '' ? 'Add description of category' : descText}
        HandleDesc={props.HandleDesc}
      />
      <div>{Renderlist}</div>
    </Wrapper>
  );
};

const TodoItem = props => (
  <div key={props.id} className="list-todo">
    <button className="checkbox" onClick={props.delete} value={props.value}>
			&#9744;
    </button>
    <li
      id={props.id}
      onClick={props.complete}
      value={props.value}
      style={!props.isDone ? null : { textDecoration: 'line-through' }}
    >
      {props.todo}
    </li>
  </div>
);

export default TodoList;
