import React from 'react';
// they are just all function with return value
// which happens to be a component, simple like that

const CategoryList = (props) => {
  const Categories = props.categories.slice(1);
  const Renderlist = categories =>
    Categories.map(category => (
      <div key={category.id} className="category-item margin1">
        <li onClick={props.click} value={category.id}>
          {category.category}
        </li>
        <button onClick={props.delete} value={category.id} className="delete-child">
					Delete
        </button>
      </div>
    ));
  return (
    <div>
      <li onClick={props.click} value="0" className="category-item margin1">
				Todo
      </li>
      <div>{Renderlist(props.categories)}</div>
    </div>
  );
};

export default CategoryList;
