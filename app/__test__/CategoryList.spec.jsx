import React from 'react';
import { shallow } from 'enzyme';
import CategoryList from '../../components/CategoryList';

test('renders correctly', () => {
  const categories = [{ id: 0, name: 'Todo', desc: 'Get things done today' }];
  const component = shallow(<CategoryList categories={categories} />);
  expect(component).toMatchSnapshot();
});
