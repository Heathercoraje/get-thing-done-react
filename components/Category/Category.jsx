import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CategoryList } from './CategoryList';
import FormCategory from './FormCategory';

const Wrapper = styled.div`
	background: #393939;
	border-top-left-radius: 0.2rem;
	border-bottom-left-radius: 0.2rem;
	padding: 2.8rem 1rem 1.5rem 1.5rem;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
`;

const Category = props => (
	<Wrapper className="category-container">
		<h3 className="logo">Get Things Done</h3>
		<CategoryList {...props} />
		<FormCategory add={props.add} />
  </Wrapper>
);

Category.propTypes = {
	props: PropTypes.object,
	add: PropTypes.func
}

export default Category;
