import React from 'react';
import styled from 'styled-components';
import HandleClickInput from './HandleClickInput';

const Wrapper = styled.div`
	margin-top: auto;
`;

const FormTodo = ({ add }) => {
  const onClickInput = (e) => {
    const input = document.getElementById('input-todo');
    e.preventDefault();
    HandleClickInput(e, add, input);
  };
  return (
    <Wrapper>
      <form onSubmit={onClickInput}>
        <input
          className="input-field todo-field"
          placeholder="Enter your task"
          id="input-todo"
          style={{ display: 'none' }}
        />
        <input type="submit" value="+" className="button-add" />
      </form>
    </Wrapper>
  );
};

export default FormTodo;
