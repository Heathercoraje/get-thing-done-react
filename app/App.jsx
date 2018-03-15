import React, { Component } from 'react';
import styled from 'styled-components';
import Category from '../components/Category';
import Todo from '../components/Todo';

const Wrapper = styled.div`
	width: 60%;
	min-width: 60%;
	height: 80%;
	margin: auto auto;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // todos: [[]],
      categories: [{ id: 0, name: 'Todo', desc: 'Get things done today' }],
      selectedCategory: 0
    };
    // this.addTodo = this.addTodo.bind(this);
    // this.deleteTodo = this.deleteTodo.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.clickCate = this.clickCate.bind(this);
    this.HandleDesc = this.HandleDesc.bind(this);
    // this.complete = this.complete.bind(this);
  }
  addCategory(event) {
    const Categories = this.state.categories;
    const Todos = this.state.todos;
    const Name = event.target[0].value.charAt(0).toUpperCase() + event.target[0].value.slice(1);
    const newCategory = {
      id: Categories.length ? Categories[Categories.length - 1].id + 1 : 0,
      category: Name,
      desc: ''
    };

    Categories.push(newCategory);
    const toDisplay = Categories.length - 1;
    // Todos.push([]);
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
  HandleDesc(e) {
    e.preventDefault();
    const current = this.state.categories;
    const selected = this.state.selectedCategory;
    const targetCate = current[selected];
    delete targetCate.desc;
    targetCate.desc = e.target[0].value;
    e.target[0].value = '';
    current.splice(selected, 1, targetCate);
    this.setState({
      categories: current
    });
  }
  // addTodo(event) {
  //   const allTodos = this.state.todos;
  //   const selected = this.state.selectedCategory;
  //   const Todo = allTodos[selected];
  //   const newTodo = {
  //     id: Todo.length === 0 ? 0 : Todo[Todo.length - 1].id + 1,
  //     todo: event.target[0].value,
  //     isDone: false
  //   };
  //   Todo.push(newTodo);
  //   allTodos.splice(selected, 1, Todo);
  //   this.setState({
  //     todos: allTodos
  //   });
  // }
  // deleteTodo(event) {
  //   console.log(this.state);
  //   const todoIndex = this.state.selectedCategory;
  //   const Todos = this.state.todos;
  //   const newTodos = Todos[todoIndex].filter(todo => todo.id !== Number(event.target.value));
  //   Todos.splice(todoIndex, 1, newTodos);
  //   this.setState({
  //     todos: Todos
  //   });
  // }
  clickCate(event) {
    const toDisplay = event.target.value;
    this.setState({
      selectedCategory: toDisplay
    });
  }
  // complete(e) {
  //   const allTodos = this.state.todos;
  //   const targetTodoArr = allTodos[this.state.selectedCategory];
  //   const targetId = e.target.id;
  //   targetTodoArr[targetId].isDone = !targetTodoArr[targetId].isDone;
  //   allTodos.splice(this.state.selectedCategory, 1, targetTodoArr);
  //   this.setState({
  //     todos: allTodos
  //   });
  // }
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
          // todos={this.state.todos[this.state.selectedCategory]}
          selected={this.state.selectedCategory}
          // delete={this.deleteTodo}
          // add={this.addTodo}
          HandleDesc={this.HandleDesc}
          // complete={this.complete}
        />
      </Wrapper>
    );
  }
}

export default App;
