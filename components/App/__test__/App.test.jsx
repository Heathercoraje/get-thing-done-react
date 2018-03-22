import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App.jsx';
import Category from '../../Category/Category';
import Todo from '../../Todo/Todo';

test('App should render correrly', () => {
	const component = shallow(<App />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('App has Category and Todo components', () => {
	const wrapper = mount(<App />);
	expect(
		wrapper.containsAllMatchingElements([
			<div>
				<Category />
				<Todo />
			</div>
		])
	).toBe(true);
});
