import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Category from '../Category';

test('Category renders correctly', () => {
	const component = shallow(<Category />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
