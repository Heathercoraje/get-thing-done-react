import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding-left: 0.6rem;
	color: white;
`;
const CategoryList = (props) => {
  const Categories = props.categories.slice(1);
  const Renderlist = Categories.map(category => (
    <CategoryItem
      key={category.id}
      name={category.name}
      id={category.id}
      click={props.click}
      delete={props.delete}
    />
  ));

  return (
    <Wrapper>
      <div className="category-div">
        <li className="category-text" onClick={props.click} value="0">
					Todo
        </li>
      </div>
      <div>{Renderlist}</div>
    </Wrapper>
  );
};

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
