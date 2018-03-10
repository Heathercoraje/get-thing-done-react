import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import FormTodo from './FormTodo';

const Wrapper = styled.div`
	box-sizing: border-box;
	border-top-right-radius: 0.2rem;
	border-bottom-right-radius: 0.2rem;
	background: white;
	padding: 1.5rem 1.5rem 1.5rem 2.5rem;

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
