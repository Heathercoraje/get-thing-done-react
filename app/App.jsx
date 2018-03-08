import React, { Component } from 'react';
import styled from 'styled-components';
import Category from '../components/Category';
import Todo from '../components/Todo';

const Main = styled.div`
	border-radius: 20px;
	background: #393939;
	width: 700px;
	height: 350px;
	margin: 0 auto;
	margin-top: 40px;
	margin-bottom: 30px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [[]],
      categories: [{ id: 0, category: 'Todo' }],
      selectedCategory: 0
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.clickCate = this.clickCate.bind(this);
  }
  addCategory(name) {
    const Categories = this.state.categories;
    const Todos = this.state.todos;
    const newCategory = {
      id: Categories.length ? Categories[Categories.length - 1].id + 1 : 0,
      category: name
    };

    Categories.push(newCategory);
    const toDisplay = Categories.length - 1;
    Todos.push([]);
    this.setState({
      categories: Categories,
      selectedCategory: toDisplay,
      todos: Todos
    });
  }
  deleteCategory(event) {
    const Categories = this.state.categories;
    const PrevToDisplay = this.state.selectedCategory;
    const Todos = this.state.todos;
    const newCategories = Categories.filter(category => category.id !== Number(event.target.value));
    const toDisplay =
   Number(event.target.value) === PrevToDisplay ? PrevToDisplay - 1 : PrevToDisplay;
    const newTodos = Todos.filter(todo => Todos.indexOf(todo) !== Number(event.target.value));
    this.setState({
      categories: newCategories,
      selectedCategory: toDisplay,
      todos: newTodos
    });
  }
  addTodo(event, selectedCategory) {
    const allTodos = this.state.todos;
    const Todo = this.state.todos[selectedCategory];
    const newTodo = {
      id: Todo.length === 0 ? 0 : Todo[Todo.length - 1].id + 1,
      todo: event.target[0].value
    };
    Todo.push(newTodo);
    allTodos.splice(selectedCategory, 1, Todo);
    this.setState({
      todos: allTodos
    });
  }
  deleteTodo(event) {
    const todoIndex = this.state.selectedCategory;
    const Todos = this.state.todos;
    const newTodos = Todos[todoIndex].filter(todo => todo.id !== Number(event.target.value));
    Todos.splice(todoIndex, 1, newTodos);
    this.setState({
      todos: Todos
    });
  }
  clickCate(event) {
    const toDisplay = event.target.value;
    this.setState({
      selectedCategory: toDisplay
    });
  }
  render() {
    return (
      <Main>
        <Category
          click={this.clickCate}
          categories={this.state.categories}
          selected={this.state.selectedCategory}
          delete={this.deleteCategory}
          add={this.addCategory}
        />
        <Todo
          categories={this.state.categories}
          todos={this.state.todos[this.state.selectedCategory]}
          selected={this.state.selectedCategory}
          delete={this.deleteTodo}
          add={this.addTodo}
        />
      </Main>
    );
  }
}

export default App;
