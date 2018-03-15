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
      categories: [{ id: 0, name: 'Todo', desc: 'Get things done today' }],
      selectedCategory: 0
    };
    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.clickCate = this.clickCate.bind(this);
    this.HandleDesc = this.HandleDesc.bind(this);
  }
  addCategory(event) {
    const Categories = this.state.categories;
    const Todos = this.state.todos;
    const Name = event.target[0].value.charAt(0).toUpperCase() + event.target[0].value.slice(1);
    const newCategory = {
      id: Categories.length ? Categories[Categories.length - 1].id + 1 : 0,
      name: Name,
      desc: ''
    };

    Categories.push(newCategory);
    const toDisplay = Categories.length - 1;
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
          selected={this.state.selectedCategory}
          HandleDesc={this.HandleDesc}
        />
      </Wrapper>
    );
  }
}

export default App;
