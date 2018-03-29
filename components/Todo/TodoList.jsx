import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Desc } from './Desc';

const Wrapper = styled.div`
	width: 100%;
	overflow-y: auto;
	overflow-x: hidden;
`;

const TodoList = props => {
	const todos = props.todos;
	const selected = props.selected;
	const name = props.name;
	const descText = props.categories[selected].description;
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
			<Desc name={name} description={descText} HandleDesc={props.HandleDesc} />
			<div>{Renderlist}</div>
		</Wrapper>
	);
};

TodoList.propTypes = {
	todos: PropTypes.array,
	categories: PropTypes.array,
	selected: PropTypes.number,
	name: PropTypes.string,
	delete: PropTypes.func,
	complete: PropTypes.func,
	HandleDesc: PropTypes.func
}
const TodoItem = props => (
	<div key={props.id} className="list-todo">
		<button className="checkbox" onClick={props.delete} value={props.value}>
			&#9744;
		</button>
		<li
			id={props.id}
			onClick={props.complete}
			value={props.value}
			style={!props.isDone ?
			null : { textDecoration: 'line-through' }}
		>
			{props.todo}
		</li>
	</div>
);

TodoItem.propTypes = {
	todo: PropTypes.string,
	id: PropTypes.number,
	value: PropTypes.string,
	isDone: PropTypes.bool,
	delete: PropTypes.func,
	complete: PropTypes.func
}

export { TodoList, TodoItem };
