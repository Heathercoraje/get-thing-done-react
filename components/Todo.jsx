import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import FormTodo from './FormTodo';

const Wrapper = styled.div`
	box-sizing: border-box;
	border-top-right-radius: 0.2rem;
	border-bottom-right-radius: 0.2rem;
	background: white;
	padding: 3rem 1.5rem 1.5rem 2.5rem;
	float: right;
	width: 65%;
	height: 100%;
	display: flex;
	flex-direction: column;
	color: #393939;
`;

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {}
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }
  addTodo(evt) {
    const allTodos = Object.assign(this.state.todos);
    const selected = this.props.selected;
    const category = this.props.categories[selected];
    const name = category.name;
    // if this is a new categoty add new key of category and add empty array
    console.log(name);
    if (!allTodos.name) {
      console.log('hit');
      allTodos[`${name}`] = [];
    }
    console.log();
    const Todo = allTodos[`${name}`];
    const newTodo = {
      id: Todo.length === 0 ? 0 : Todo[Todo.length - 1].id + 1,
      todo: evt.target[0].value,
      isDone: false
    };
    Todo.push(newTodo);
    // allTodos.splice(selected, 1, Todo);
    this.setState({
      todos: allTodos
    });
  }
  deleteTodo(evt) {
    const allTodos = this.state.todos;
    const selected = this.props.selected;
    const newTodos = allTodos[selected].filter(todo => todo.id !== Number(evt.target.value));
    allTodos.splice(selected, 1, newTodos);
    this.setState({
      todos: allTodos
    });
  }
  completeTodo(evt) {
    const allTodos = this.state.todos;
    const selected = this.props.selected;
    const targetTodoArr = allTodos[selected];
    const targetId = evt.target.id;
    targetTodoArr[targetId].isDone = !targetTodoArr[targetId].isDone;
    allTodos.splice(selected, 1, targetTodoArr);
    this.setState({
      todos: allTodos
    });
  }

  render() {
    const selected = this.props.selected;
    return (
      <Wrapper>
        <TodoList
          todos={this.state.todos[selected]}
          selected={selected}
          categories={this.props.categories}
          HandleDesc={this.props.HandleDesc}
          delete={this.deleteTodo}
          complete={this.completeTodo}
        />
        <FormTodo add={this.addTodo} selected={selected} />
      </Wrapper>
    );
  }
}

export default Todo;
