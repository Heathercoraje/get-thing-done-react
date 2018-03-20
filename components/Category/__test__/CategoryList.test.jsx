import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CategoryList, CategoryItem } from '../CategoryList';

test('CategoryList should render as expected', () => {
	const categories = [
		{ id: 0, name: 'Tonight', description: 'Things to do tonight' }
	];
	const component = shallow(<CategoryList categories={categories} />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
	expect(component.length).toBe(1);
});

describe('CategoryList should render correctly', () => {
	it('should render CategoryItem', () => {
		const categories = [
			{ id: 0, name: 'Tonight', description: 'Things to do tonight' }
		];
		const component = shallow(<CategoryList categories={categories} />);
		expect(component.contains(  <CategoryItem
        description="Things to do tonight"
        id={0}
        key="0"
        name="Tonight"
      />)).toBe(true);
	});
});
