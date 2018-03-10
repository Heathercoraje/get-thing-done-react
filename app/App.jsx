import React, { Component } from 'react';
import styled from 'styled-components';
import Category from '../components/Category';
import Todo from '../components/Todo';

const Wrapper = styled.div`
	width: 68%;
	min-width: 60%;

	height: 80%;
	margin: auto auto;
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
  addCategory(event) {
    const Categories = this.state.categories;
    const Todos = this.state.todos;
    const newCategory = {
      id: Categories.length ? Categories[Categories.length - 1].id + 1 : 0,
      category: event.target[0].value
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
  addTodo(event) {
    const allTodos = this.state.todos;
    const selected = this.state.selectedCategory;
    const Todo = allTodos[selected];
    const newTodo = {
      id: Todo.length === 0 ? 0 : Todo[Todo.length - 1].id + 1,
      todo: event.target[0].value
    };
    Todo.push(newTodo);
    allTodos.splice(selected, 1, Todo);
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
      <Wrapper>
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
      </Wrapper>
    );
  }
}

export default App;
