import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding-left: 0.6rem;
	color: white;
`;
const DeleteParent = styled.button`
	background: transparent;
	border: none;
	color: #cacaca;
	font-size: 1.8rem;
	padding: 0;
	margin: 0;
	font-weight: 100;
`;

const CategoryList = (props) => {
  const Categories = props.categories.slice(1);
  const Renderlist = categories =>
    Categories.map(category => (
      <div key={category.id} className="category-div">
        <li onClick={props.click} value={category.id} className="category-text">
          {category.category}
        </li>
        <DeleteParent onClick={props.delete} value={category.id}>
					&#8854;
        </DeleteParent>
      </div>
    ));
  return (
    <Wrapper>
      <div className="category-div">
        <li onClick={props.click} value="0" className="category-text">
					Todo
        </li>
        <DeleteParent>&#8854;</DeleteParent>
      </div>
      <div>{Renderlist(props.categories)}</div>
    </Wrapper>
  );
};

export default CategoryList;
