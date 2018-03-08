import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryList from './CategoryList';
import FormCategory from './FormCategory';

const Wrapper = styled.div`
	box-sizing: border-box;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	padding: 20px;
	background: #393939;
	float: left;
	width: 35%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Title = <h2 className="Title">Get Things Done</h2>;

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
