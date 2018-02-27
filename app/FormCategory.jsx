import React from "react";

const FormCategory = props => {
  const onClickInput = event => {
    event.preventDefault();
    var name = event.target[0].value;
    props.add(name);
    event.target[0].value = "";
  };
  return (
    <form onSubmit={onClickInput}>
      <input required placeholder="new category" />
      <input type="submit" value="add" />
    </form>
  );
};

export default FormCategory;
