import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CategoryList, CategoryItem } from '../CategoryList';

test('CategoryList should render nothing when passing empty data set', () => {
	const component = shallow(<CategoryList categories={[]} />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('Category should render one CategoryItem', () => {
	const categories = [
		{ id: 0, name: 'Tonight', description: 'Things to do tonight' }
	];
	const component = shallow(<CategoryList categories={categories} />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('CategoryList should contain one CategoryItem element', () => {
	const categories = [
		{ id: 0, name: 'Tonight', description: 'Things to do tonight' }
	];
	const component = shallow(<CategoryList categories={categories} />);
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
	const categories = [
		{ id: 1, name: 'shopping', description: 'nothing' },
		{ id: 2, name: 'programming', description: 'coding practice' }
	];
	const component = shallow(<CategoryList categories={categories} />);
	expect(component.find('CategoryItem').length).toBe(2);
});
