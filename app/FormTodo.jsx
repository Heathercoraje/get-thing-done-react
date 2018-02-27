import React from "react";
// import styled from "styled-components";

const FormTodo = props => {
  const onClickInput = event => {
    event.preventDefault();
    const changeEvent = event;
    props.add(event);
    changeEvent.target[0].value = "";
  };

  return (
    <form onSubmit={onClickInput}>
      <input required placeholder="Enter your task" />
      <input type="submit" value="Add" />
    </form>
  );
};

export default FormTodo;
