import React from "react";
// they are just all function with return value
// which happens to be a component, simple like that

const CategoryList = ({ categories, deleteCategory }) => {
  const Renderlist = categories => {
    return categories.map(category => {
      return (
        <div key={category.id}>
          <li key={category.id} id={category.id}>
            {category.category}
            <button onClick={deleteCategory} value={category.id}>
              Delete
            </button>
          </li>
        </div>
      );
    });
  };
  return (
    <div className="left">
      <p>Category List</p>
      <div>{Renderlist(categories)}</div>
    </div>
  );
};

export default CategoryList;
