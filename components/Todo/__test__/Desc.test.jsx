import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { Desc, DescForm, Header } from '../Desc';

test('Desc should render correctly', () => {
	const component = shallow(<DescForm />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('Check DescForm initial edit state', () => {
	const component = shallow(<DescForm />);
	expect(component.state('edit')).toBe(false);
});
