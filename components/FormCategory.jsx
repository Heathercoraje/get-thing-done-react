import React, { Component } from 'react';
import HandleClickInput from './HandleClickInput';

class FormCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.HandleClickInput = this.HandleClickInput.bind(this);
  }

  HandleClickInput(e) {
    e.preventDefault();
    const inputElement = document.getElementById('input-cate');
    HandleClickInput(e, this.props.add, inputElement);
  }

  render() {
    return (
      <form onSubmit={this.HandleClickInput}>
        <input placeholder="new category" id="input-cate" style={{ display: 'none' }} />
        <input type="submit" value="+" className="button-add" />
      </form>
    );
  }
}

export default FormCategory;
