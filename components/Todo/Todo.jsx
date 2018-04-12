import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TodoList } from './TodoList';
import FormTodo from './FormTodo';
import localStorageApi from '../../lib/localStorageApi';


const Wrapper = styled.div`
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

  componentWillMount () {
    localStorageApi.loadTodos().then((todos)=>{
      console.log('Fetching your data, friend.');
      this.setState({todos});
    });
  }

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
    localStorageApi.modifyTodos(todoObj);
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
    localStorageApi.modifyTodos(allTodos).then(()=>{
      this.setState({
        todos: allTodos
      });
      console.log('todo item added');
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
    localStorageApi.modifyTodos(allTodos).then(()=>{
      this.setState({
        todos: allTodos
      });
      console.log('todo item deleted');
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
    localStorageApi.modifyTodos(allTodos).then(()=>{
      this.setState({
        todos: allTodos
      });
      console.log('todo item completed');
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
				<FormTodo add={this.addTodo} />{' '}
			</Wrapper>
		);
	}
}

Todo.propTypes = {
  categories: PropTypes.array,
  selected: PropTypes.number,
  HandleDesc: PropTypes.func,
}

export default Todo;
