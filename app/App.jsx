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
    const newCategory = {
      id: this.state.categories.length
        ? this.state.categories[this.state.categories.length - 1].id + 1
        : 0,
      category: name
    };
    const updateCategories = this.state.categories;
    const newIndex = this.state.categories.length;

    updateCategories.push(newCategory);
    const updateTodos = this.state.todos;
    updateTodos.push([]);
    this.setState({
      categories: updateCategories,
      selectedCategory: newIndex,
      todos: updateTodos
    });
  }
  addTodo(event, selectedCategory) {
    // this selectedCategory is an index (categories.id)
    const targetTodo = this.state.todos[selectedCategory];
    console.log('this is empty array');
    const newTodo = {
      id: targetTodo.length === 0 ? 0 : targetTodo[targetTodo.length - 1].id + 1,
      todo: event.target[0].value
    };
    targetTodo.push(newTodo);
    const allTodos = this.state.todos;
    allTodos.splice(selectedCategory, 1, targetTodo);
    this.setState({
      todos: allTodos
    });
    console.log(this.state);
  }
  deleteTodo(event) {
    const todoIndex = this.state.selectedCategory;
    const currentTodos = this.state.todos;
    const newTodos = currentTodos[todoIndex].filter(todo => todo.id !== Number(event.target.value));
    currentTodos.splice(todoIndex, 1, newTodos);
    this.setState({
      todos: currentTodos
    });
  }
  deleteCategory(event) {
    const currentCategories = this.state.categories;
    const newIndex =
   Number(event.target.value) === this.state.selectedCategory
     ? this.state.selectedCategory - 1
     : this.state.selectedCategory;
    const currentTodos = this.state.todos;
    const newCategories = currentCategories.filter(
      category => category.id !== Number(event.target.value)
    );
    const newTodos = currentTodos.filter(
      todo => currentTodos.indexOf(todo) !== Number(event.target.value)
    );
    this.setState(
      {
        categories: newCategories,
        selectedCategory: newIndex,
        todos: newTodos
      },
      () => {
        console.log('yo,yo', this.state);
      }
    );
  }
  clickCate(event) {
    const selected = event.target.value;
    this.setState({
      selectedCategory: selected
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
