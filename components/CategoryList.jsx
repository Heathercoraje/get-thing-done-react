import React from 'react';
// they are just all function with return value
// which happens to be a component, simple like that

const CategoryList = ({ categories, deleteCategory, clickCate, selectedCategory }) => {
  const targetCategories = categories.slice(1);
  const Renderlist = categories =>
    targetCategories.map(category => (
      <div key={category.id}>
        <li onClick={clickCate} id={category.id}>
          {category.category}
        </li>
        <button onClick={deleteCategory} value={category.id}>
					Delete
        </button>
      </div>
    ));
  return (
    <div className="left">
      <li onClick={clickCate} id="0">
				Todo
      </li>
      <div>{Renderlist(categories)}</div>
    </div>
  );
};

export default CategoryList;
