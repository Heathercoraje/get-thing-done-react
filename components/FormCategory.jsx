import React, { Component } from 'react';
import HandleClickInput from './HandleClickInput';

class FormCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickInput = this.onClickInput.bind(this);
  }

  onClickInput(e) {
    e.preventDefault();
    const inputElement = document.getElementById('input-cate');
    HandleClickInput(e, this.props.add, inputElement);
  }

  render() {
    return (
      <form className="form" onSubmit={this.onClickInput}>
        <input
          placeholder=" New category"
          id="input-cate"
          style={{ display: 'none' }}
          className="input-field"
        />
        <input type="submit" value="+" className="button-add" />
      </form>
    );
  }
}

export default FormCategory;
