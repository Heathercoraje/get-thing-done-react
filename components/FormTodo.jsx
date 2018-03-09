import React from 'react';
import styled from 'styled-components';

const FormTodo = ({ add, selected }) => {
  const onClickInput = (event) => {
    event.preventDefault();
    const changeEvent = event;
    const input = document.getElementById('input-todo');
    if (input.style.display === 'none') {
      input.style.display = 'block';
      input.focus();
    } else if (input.style.display === 'block' && event.target[0].value.trim() !== '') {
      const name = event.target[0].value;
      add(event, selected);
      event.target[0].value = '';
      input.style.display = 'none';
    } else {
      // input field is empty or white space
      input.style.display = 'none';
    }
  };

  return (
    <form onSubmit={onClickInput}>
      <input placeholder="Enter your task" id="input-todo" style={{ display: 'none' }} />
      <input type="submit" value="+" className="button-add" />
    </form>
  );
};

export default FormTodo;
