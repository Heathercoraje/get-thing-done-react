import React from 'react';
// they are just all function with return value
// which happens to be a component, simple like that

const CategoryList = ({ categories, deleteCategory, clickCate, selectedCategory }) => {
  const target = selectedCategory;
  const Renderlist = categories =>
    categories.map(category => (
      <div key={category.id}>
        <li onClick={clickCate} key={category.id} id={category.id}>
          {category.category}
          <button key={category.id} onClick={deleteCategory} value={category.id}>
            Delete
          </button>
        </li>
      </div>
    ));
  return (
    <div className="left">
      <p>Category List</p>
      <div>{Renderlist(categories)}</div>
    </div>
  );
};

export default CategoryList;
