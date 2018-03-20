import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import FormTodo from './FormTodo';

const Wrapper = styled.div`
	// box-sizing: border-box;
	// border-top-right-radius: 0.2rem;
	// border-bottom-right-radius: 0.2rem;
  // flex: 0 0 65%;
  // height: 100%;
  padding: 3rem 1.5rem 1.5rem 2.5rem;
	background: white;
	display: flex;
	flex-direction: column;
	color: #393939;
`;
class Todo extends Component {
	state = {
		todos: {}
	};

	componentWillReceiveProps(Nextprops) {
		this.updateTodoObj(Nextprops);
	}

	updateTodoObj = Nextprops => {
		const todoObj = Object.assign({}, this.state.todos);
		const updatedCategories = Nextprops.categories.map(
			category => category.name
		);
		for (const name in todoObj) {
			if (updatedCategories.indexOf(name) < 0) {
				delete todoObj[name];
			}
			continue;
		}
		this.setState({
			todos: todoObj
		});
	};
	addTodo = evt => {
		const allTodos = this.state.todos;
		const selected = this.props.selected;
		const category = this.props.categories[selected];
		const name = category.name;
		// if this is a new categoty add new key of category and add empty array
		if (!allTodos[`${name}`]) {
			allTodos[`${name}`] = [];
		}
		const Todo = allTodos[`${name}`];
		const newTodo = {
			id: Todo.length === 0 ? 0 : Todo[Todo.length - 1].id + 1,
			todo: evt.target[0].value,
			isDone: false
		};
		Todo.push(newTodo);
		this.setState({
			todos: allTodos
		});
	};
	deleteTodo = evt => {
		const allTodos = this.state.todos;
		const selected = this.props.selected;
		const category = this.props.categories[selected];
		const name = category.name;
		const newTodos = allTodos[`${name}`].filter(
			todo => todo.id !== Number(evt.target.value)
		);
		allTodos[`${name}`] = newTodos;
		this.setState({
			todos: allTodos
		});
	};
	completeTodo = evt => {
		const allTodos = this.state.todos;
		const selected = this.props.selected;
		const category = this.props.categories[selected];
		const name = category.name;
		const targetTodoArr = allTodos[`${name}`];
		const targetId = evt.target.id;
		targetTodoArr.forEach(todo => {
			if (todo.id == targetId) {
				let temp = todo.isDone;
				todo.isDone = !temp;
			}
		});
		allTodos[`${name}`] = targetTodoArr;
		this.setState({
			todos: allTodos
		});
	};

	render() {
		const selected = this.props.selected;
		if (selected < 0) {
			return (
				<Wrapper>
					<h3> Add a new category </h3>{' '}
				</Wrapper>
			);
		}
		const category = this.props.categories[selected];
		const name = category.name;
		return (
			<Wrapper className="todo-container">
				<TodoList
					todos={this.state.todos[`${name}`]}
					selected={selected}
					name={name}
					categories={this.props.categories}
					HandleDesc={this.props.HandleDesc}
					delete={this.deleteTodo}
					complete={this.completeTodo}
				/>{' '}
				<FormTodo add={this.addTodo} selected={selected} />{' '}
			</Wrapper>
		);
	}
}

export default Todo;
