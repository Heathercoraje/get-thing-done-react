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

const Icon = styled.div`
	position: relative;
	top: 0;
	right: 0;
`;

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [[]]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.complete = this.complete.bind(this);
  }
  addTodo(event) {
    const allTodos = this.state.todos;
    const selected = this.props.selected;
    const Todo = allTodos[selected] ? allTodos[selected] : [];
    const newTodo = {
      id: Todo.length === 0 ? 0 : Todo[Todo.length - 1].id + 1,
      todo: event.target[0].value,
      isDone: false
    };
    Todo.push(newTodo);
    allTodos.splice(selected, 1, Todo);
    this.setState({
      todos: allTodos
    });
    console.log(allTodos);
  }
  deleteTodo(event) {
    const allTodos = this.state.todos;
    const selected = this.props.selected;
    const newTodos = allTodos[selected].filter(todo => todo.id !== Number(event.target.value));
    allTodos.splice(selected, 1, newTodos);
    this.setState({
      todos: Todos
    });
  }
  complete(e) {
    const allTodos = this.state.todos;
    const selected = this.props.selected;
    const targetTodoArr = allTodos[selected];
    const targetId = e.target.id;
    targetTodoArr[targetId].isDone = !targetTodoArr[targetId].isDone;
    allTodos.splice(selected, 1, targetTodoArr);
    this.setState({
      todos: allTodos
    });
  }

  render() {
    return (
      <Wrapper>
        <TodoList
          todos={this.state.todos[this.props.selected]}
          categories={this.props.categories}
          selected={this.props.selected}
          HandleDesc={this.props.HandleDesc}
          delete={this.deleteTodo}
          complete={this.complete}
          addArray={this.addArray}
        />
        <FormTodo add={this.addTodo} selected={this.props.selected} />
      </Wrapper>
    );
  }
}

export default Todo;
