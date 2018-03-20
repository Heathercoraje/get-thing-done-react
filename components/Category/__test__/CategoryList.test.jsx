import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CategoryList from '../CategoryList';

test('CategoryList should render as expected', () =>{


  const categories = [{ id: 0, name: 'Todo', description: 'Add description of category' },
{ id: 0, name: 'Tonight', description: 'Things to do tonight' }]
  const component = shallow(<CategoryList categories={categories} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
})
