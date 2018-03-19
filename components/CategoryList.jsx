import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding-left: 0.6rem;
	color: white;
`;
const CategoryList = ({ categories, ...props }) => (
	<Wrapper className="category-list">
		{categories.map(category => (
			<CategoryItem key={category.id} {...props} {...category} />
		))}
	</Wrapper>
);

const CategoryItem = props => (
	<div className="category-div">
		<li onClick={props.click} value={props.id} className="category-text">
			{props.name}
		</li>
		<button className="button-delete" onClick={props.delete} value={props.id}>
			&#8854;
		</button>
	</div>
);

export default CategoryList;
