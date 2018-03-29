import React, { Component } from 'react';
import styled from 'styled-components';
import Category from '../Category/Category';
import Todo from '../Todo/Todo';
import CheckDupli from '../../lib/CheckDupli';

const Wrapper = styled.div`
	margin: auto auto;
	display: flex;
`;

class App extends Component {
	state = {
		categories: [
			{ id: 0, name: 'Todo', description: 'Add description of category' }
		],
		selectedCategory: 0
	};

	addCategory = event => {
		const Categories = this.state.categories;
		const Todos = this.state.todos;
		const Name =
			event.target[0].value.charAt(0).toUpperCase() +
			event.target[0].value.slice(1);
		if (CheckDupli(Name, Categories)) {
			alert('duplicate cannot be added!');
			return;
		}
		const newCategory = {
			id: Categories.length ? Categories[Categories.length - 1].id + 1 : 0,
			name: Name,
			description: 'New category'
		};
		Categories.push(newCategory);
		const toDisplay = Categories.length - 1;
		this.setState({
			categories: Categories,
			selectedCategory: toDisplay,
			todos: Todos
		});
	};
	deleteCategory = evt => {
		if (Number(evt.target.value) === 0) return;
		const Categories = this.state.categories;
		const PrevToDisplay = this.state.selectedCategory;
		const Todos = this.state.todos;
		const newCategories = Categories.filter(
			category => category.id !== Number(evt.target.value)
		);
		const toDisplay =
			Number(evt.target.value) === PrevToDisplay
				? PrevToDisplay - 1
				: newCategories.length - 1;
		this.setState({
			categories: newCategories,
			selectedCategory: toDisplay
		});
	};
	HandleDesc = evt => {
		evt.preventDefault();
		const { categories, selectedCategory } = this.state;
		const updatedCategory = {
			...categories[selectedCategory],
			description: !evt.target[0] ? evt.target.value : evt.target[0].value
		};

		evt.target.value = '';
		this.setState({
			categories: [
				...categories.slice(0, selectedCategory),
				updatedCategory,
				...categories.slice(selectedCategory + 1)
			]
		});
	};
	clickCate = evt => {
		const name = evt.target.dataset.name;
		let toDisplay;
		const test = this.state.categories.map((category, index) => {
			if (category.name === name) {
				toDisplay = index;
			}
		});
		this.setState({
			selectedCategory: toDisplay
		});
	};

	render() {
		return (
			<Wrapper className="main-container">
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
