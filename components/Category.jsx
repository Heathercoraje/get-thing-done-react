import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryList from './CategoryList';
import FormCategory from './FormCategory';
import DeleteButton from './DeleteButton';

const Wrapper = styled.div`
	box-sizing: border-box;
	border-top-left-radius: 0.2rem;
	border-bottom-left-radius: 0.2rem;
	padding: 1.5rem 1rem 1.5rem 1.5rem;
	background: #393939;
	float: left;
	width: 35%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const InnerWrapper = styled.div`
	margin-top: auto;
`;

const Title = <h3 className="Title">Get things done</h3>;

const Category = props => (
  <Wrapper>
    {Title}
    <CategoryList
      className="category-list"
      click={props.click}
      categories={props.categories}
      selected={props.selected}
      delete={props.delete}
    />
    <FormCategory add={props.add} />
  </Wrapper>
);

export default Category;
