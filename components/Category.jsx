import React, { Component } from 'react';
import styled from 'styled-components';
import CategoryList from '../components/CategoryList';
import FormCategory from '../components/FormCategory';

const Wrapper = styled.div`
	box-sizing: border-box;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	padding: 20px;
	background: black;
	float: left;
	width: 25%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;
const Category = props => (
  <Wrapper>
    <CategoryList
      click={props.click}
      categories={props.categories}
      selected={props.selected}
      delete={props.delete}
    />
    <FormCategory add={props.add} />
  </Wrapper>
);

export default Category;
