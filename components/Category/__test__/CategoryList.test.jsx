import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CategoryList, CategoryItem } from '../CategoryList';

test('CategoryList should render nothing when passing empty data set', () => {
	let component = shallow(<CategoryList categories={[]} />);
	let tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('Category should render one CategoryItem', () => {
	let categories = [
		{ id: 0, name: 'Tonight', description: 'Things to do tonight' }
	];
	let component = shallow(<CategoryList categories={categories} />);
	let tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('CategoryList should contain one CategoryItem element', () => {
	let categories = [
		{ id: 0, name: 'Tonight', description: 'Things to do tonight' }
	];
	let component = shallow(<CategoryList categories={categories} />);
	expect(
		component.contains(
			<CategoryItem
				description="Things to do tonight"
				id={0}
				key="0"
				name="Tonight"
  />
		)
	).toBe(true);
});

test('When passing props, CategoryItem should have correct length', () => {
	let categories = [
		{ id: 1, name: 'shopping', description: 'nothing' },
		{ id: 2, name: 'programming', description: 'coding practice' }
	];
	let component = shallow(<CategoryList categories={categories} />);
	expect(component.find('CategoryItem').length).toBe(2);
});
