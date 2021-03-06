import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HandleClickInput from '../../lib/HandleClickInput';

const FormCategory = ({ add }) => {
	const onClickInput = evt => {
		evt.preventDefault();
		const inputElement = document.getElementById('input-cate');
		HandleClickInput(evt, add, inputElement);
	};
	return (
		<form className="form-cate" onSubmit={onClickInput}>
			<input
				placeholder=" New category"
				id="input-cate"
				style={{ display: 'none' }}
				className="input-gen input-cate"
			/>
			<input type="submit" value="+" className="button-add" />
		</form>
	);
};

FormCategory.propTypes = {
	add: PropTypes.func
}
export default FormCategory;
