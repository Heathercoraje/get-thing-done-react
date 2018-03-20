import React from 'react';
import styled from 'styled-components';
import HandleClickInput from '../../lib/HandleClickInput';

const Wrapper = styled.div`
	margin-top: auto;
`;

const FormTodo = ({ add }) => {
	const onClickInput = evt => {
		const inputTodo = document.getElementById('input-todo');
		evt.preventDefault();
		HandleClickInput(evt, add, inputTodo);
	};
	return (
		<Wrapper>
			<form onSubmit={onClickInput}>
				<input
					className="input-gen input-todo"
					id="input-todo"
					style={{ display: 'none' }}
					placeholder="Enter a new task"
				/>
				<input type="submit" value="+" className="button-add" />
			</form>
		</Wrapper>
	);
};

export default FormTodo;
