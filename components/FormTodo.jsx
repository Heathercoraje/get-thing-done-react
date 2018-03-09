import React from 'react';
import styled from 'styled-components';
import HandleClickInput from './HandleClickInput';

const FormTodo = ({ add }) => {
  const onClickInput = (e) => {
    const input = document.getElementById('input-todo');
    e.preventDefault();
    HandleClickInput(e, add, input);
  };
  return (
    <form onSubmit={onClickInput}>
      <input placeholder="Enter your task" id="input-todo" style={{ display: 'none' }} />
      <input type="submit" value="+" className="button-add" />
    </form>
  );
};

export default FormTodo;
