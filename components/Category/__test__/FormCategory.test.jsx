import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormCategory from '../FormCategory';

test('FormCategory should render as expected', () => {
	const component = shallow(<FormCategory />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('FormCategory should render `.button-add` button', () => {
	const component = shallow(<FormCategory />);
	expect(component.find('.button-add').length).toBe(1);
});
