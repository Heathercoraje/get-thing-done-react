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
      todos: [
        [{ id: 0, todo: 'todo app' }, { id: 1, todo: 'yoga' }],
        [{ id: 0, todo: 'hang out with dad' }, { id: 1, todo: ' hang out with Soo' }]
      ],
      categories: [{ id: 0, category: 'Today' }, { id: 1, category: 'Tomorrow' }],
      selectedCategory: [0]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.clickCate = this.clickCate.bind(this);
  }
  addCategory(name) {
    console.log(name);
    const newCategory = {
      id: this.state.categories.length
        ? this.state.categories[this.state.categories.length - 1].id + 1
        : 0,
      category: name
    };
    const categoriesUpdated = this.state.categories;
    categoriesUpdated.push(newCategory);
    this.setState({
      categories: categoriesUpdated
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
      console.log(this.state.categories);
      return category.id !== Number(event.target.value);
    });
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
  clickCate(event) {
    const selected = event.target.id;
    console.log('I am here, honey!', selected);
    this.setState({
      selectedCategory: selected
    });
  }
  render() {
    return (
      <Main>
        <Left>
          <h1 className="title">React Todo</h1>
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
            todos={this.state.todos}
            selectedCategory={this.state.selectedCategory}
            deleteTodo={this.deleteTodo}
          />
          <FormTodo add={this.addTodo} />
        </Right>
      </Main>
    );
  }
}

export default App;
