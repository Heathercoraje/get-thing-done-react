import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormTodo from '../FormTodo';

test('FormTodo should render correctly', () => {
	const component = shallow(<FormTodo />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});

test('Add Button should have display:none property at default', () =>{
  const component = shallow(<FormTodo />);
  expect(component.find('input').first().prop('style')).toEqual({"display":"none"});
});
