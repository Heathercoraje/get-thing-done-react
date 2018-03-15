import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding-left: 0.6rem;
	color: white;
`;
const CategoryList = (props) => {
  const Categories = props.categories.slice(1);
  const Renderlist = categories =>
    Categories.map(category => (
      <div key={category.id} className="category-div">
        <li onClick={props.click} value={category.id} className="category-text">
          {category.name}
        </li>
        <button className="button-delete" onClick={props.delete} value={category.id}>
					&#8854;
        </button>
      </div>
    ));

  return (
    <Wrapper>
      <div className="category-div">
        <li className="category-text" onClick={props.click} value="0">
					Todo
        </li>
      </div>
      <div>{Renderlist(props.categories)}</div>
    </Wrapper>
  );
};

export default CategoryList;
