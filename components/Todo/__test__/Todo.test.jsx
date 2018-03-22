import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Todo from '../Todo';


test('Todo renders correctly', () => {
  const props = {
    categories :[{id:0, name:'shopping', description:'shopping list'}],
    selected : 0
  }
	const component = shallow(<Todo {...props} />);
	const tree = toJson(component);
  expect(component.find('TodoList').length).toBe(1);
  expect(component.find('FormTodo').length).toBe(1);
  expect(tree).toMatchSnapshot();
});


test('when categorylist is empty, it returns `Add new category` message', () => {
  const props = {
    categories :[],
    selected : -1
  }
	const component = shallow(<Todo {...props} />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
