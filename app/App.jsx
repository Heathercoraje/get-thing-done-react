import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryList from '../components/CategoryList';
import FormCategory from '../components/FormCategory';
import TodoList from '../components/TodoList';
import FormTodo from '../components/FormTodo';

const Main = styled.div`
	border-radius: 20px;
	background: #393939;
	width: 700px;
	height: 350px;
	margin: 0 auto;
	margin-top: 40px;
	margin-bottom: 30px;
`;
const Left = styled.div`
	box-sizing: border-box;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	padding: 20px;
	background: black;
	float: left;
	width: 25%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;
const Right = styled.div`
	box-sizing: border-box;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	background: white;
	padding: 20px;
	padding-left: 40px;
	float: right;
	width: 75%;
	height: 100%;
	display: flex;
	flex-direction: column;
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
        <Left>
          <h1 className="title">Get Things Done</h1>
          <CategoryList
            clickCate={this.clickCate}
            categories={this.state.categories}
            selectedCategory={this.state.selectedCategory}
            deleteCategory={this.deleteCategory}
          />
          <FormCategory add={this.addCategory} />
        </Left>
        <Right>
          <TodoList
            categories={this.state.categories}
            todos={this.state.todos[this.state.selectedCategory]}
            selectedCategory={this.state.selectedCategory}
            deleteTodo={this.deleteTodo}
          />
          <FormTodo add={this.addTodo} selectedCategory={this.state.selectedCategory} />
        </Right>
      </Main>
    );
  }
}

export default App;
