import React from 'react';
import styled from 'styled-components';

const FormTodo = ({ add, selected }) => {
  const onClickInput = (event) => {
    event.preventDefault();
    const changeEvent = event;
    add(event, selected);
    changeEvent.target[0].value = '';
  };

  return (
    <form onSubmit={onClickInput}>
      <input required placeholder="Enter your task" />
      <input type="submit" value="+" className="button-add" />
    </form>
  );
};

export default FormTodo;
