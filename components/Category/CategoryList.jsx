import React from 'react';
import PropTypes from 'prop-types';
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

CategoryList.propTypes = {
	props: PropTypes.object,
	categories: PropTypes.array,
	category: PropTypes.object,
	id: PropTypes.number
}
const CategoryItem = props => (
	<div className="category-div">
		<li
			onClick={props.click}
			value={props.id}
			data-name={props.name}
			className="category-text"
		>
			{props.name}
  </li>
		<button className="button-delete" onClick={props.delete} value={props.id}>
			&#8854;
  </button>
  </div>
);
CategoryItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	click: PropTypes.func,
	delete: PropTypes.func
}

export { CategoryList, CategoryItem };
