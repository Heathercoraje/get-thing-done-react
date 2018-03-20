import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Desc, DescForm } from '../Desc';

describe('Check state', () => {
	it('should have inital state false', () => {
		const component = shallow(<DescForm />);
		expect(component.state('edit')).toBe(false);
	});
});
