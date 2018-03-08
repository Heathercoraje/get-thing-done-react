import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import FormTodo from './FormTodo';

const Wrapper = styled.div`
	box-sizing: border-box;
	border-top-right-radius: 1rem;
	border-bottom-right-radius: 1rem;
	background: white;
	padding: 2.5rem;
	float: right;
	width: 65%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Todo = props => (
  <Wrapper>
    <TodoList
      categories={props.categories}
      todos={props.todos}
      selected={props.selected}
      delete={props.delete}
    />
    <FormTodo add={props.add} selected={props.selected} />
  </Wrapper>
);

export default Todo;
