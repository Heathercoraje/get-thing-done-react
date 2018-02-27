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
      todos: [[{ category: 'Today', id: 0, todo: '' }]],
      categories: [{ id: 0, category: 'Today' }, { id: 1, category: 'Tomorrow' }]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.changeCate = this.changeCate.bind(this);
  }
  addCategory(name) {
    const newCategory = [
      {
        id: this.state.categories.length
          ? this.state.categories[this.state.categories.length - 1].id + 1
          : 0,
        category: name
      }
    ];
    const stateCategories = this.state.categories;
    stateCategories.push(newCategory);
    this.setState({
      categories: stateCategories
    });
  }
  addTodo(event) {
    const newTodo = {
      category: 'Today',
      id: this.state.todos[0].length ? this.state.todos[this.state.todos.length - 1].id + 1 : 0,
      todo: event.target[0].value
    };
    const stateTodos = this.state.todos;
    const currentTodos = this.state.todos[0];
    currentTodos.push(newTodo);
    this.setState({
      todos: stateTodos
    });
    console.log(this.state);
  }
  deleteCategory(event) {
    const currentCategories = this.state.categories;
    const newCategories = currentCategories.filter((category) => {
      console.log(category.id, event.target.value);
      console.log(this.state.categories);
      return category.id !== Number(event.target.value);
    });
    console.log('before', currentCategories);
    this.setState({
      categories: newCategories
    });
  }
  deleteTodo(event) {
    const newTodos = this.state.todos;
    newTodos.forEach((todo, index) => {
      if (todo.id === Number(event.target.value)) {
        return newTodos.splice(index, 1); // this mutate the array itself
      }
      return 0;
    });
    this.setState({
      todos: newTodos
    });
  }

  changeCate(event) {
    console.log(event.target.id);
  }
  render() {
    return (
      <Main>
        <Left>
          <h1 className="title">React Todo</h1>
          <CategoryList
            changeCate={this.changeCate}
            categories={this.state.categories}
            deleteCategory={this.deleteCategory}
          />
          <FormCategory add={this.addCategory} />
        </Left>
        <Right>
          <TodoList
            categories={this.state.categories}
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
          />
          <FormTodo add={this.addTodo} />
        </Right>
      </Main>
    );
  }
}

export default App;
