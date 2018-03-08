import React from 'react';
// they are just all function with return value
// which happens to be a component, simple like that

const CategoryList = (props) => {
  const Categories = props.categories.slice(1);
  const Renderlist = categories =>
    Categories.map(category => (
      <div key={category.id}>
        <li onClick={props.click} value={category.id} className="category-item">
          {category.category}
        </li>
        <button onClick={props.delete} value={category.id}>
					Delete
        </button>
      </div>
    ));
  return (
    <div>
      <li onClick={props.click} value="0" className="category-item">
				Todo
      </li>
      <div>{Renderlist(props.categories)}</div>
    </div>
  );
};

export default CategoryList;
