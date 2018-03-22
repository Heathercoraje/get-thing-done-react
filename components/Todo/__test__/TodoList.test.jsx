import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TodoList, TodoItem } from '../TodoList';

test('TodoList should render empty Renderlist when given empty todo', () => {
	const categories = [{ id: 0, name: 'todo', description: 'things to do' }];
	const todos = [];
	const name = 'todo';
	const selected = 0;
	const component = shallow(
		<TodoList
      categories={categories}
			todos={todos}
			name={name}
			selected={selected}
		/>
	);
	const tree = toJson(component);
	expect(component.find('TodoItem').length).toBe(0);
	expect(tree).toMatchSnapshot();
});

test('TodoList should render one TodoItem', () => {
	const categories = [{ id: 0, name: 'todo', description: 'things to do' }];
	const todos = [{ id: 0, todo: 'be awesome', isDone: false }];
	const name = 'todo';
	const selected = 0;
	const component = shallow(
		<TodoList
			categories={categories}
			todos={todos}
			name={name}
			selected={selected}
		/>
	);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
	expect(component.find('TodoItem').length).toBe(1);
});
