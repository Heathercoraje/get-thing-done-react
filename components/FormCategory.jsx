import React, { Component } from 'react';

class FormCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickInput = this.onClickInput.bind(this);
  }

  onClickInput(event) {
    event.preventDefault();
    const input = document.getElementById('input');
    if (input.style.display === 'none') {
      input.style.display = 'block';
      input.focus();
    } else if (input.style.display === 'block' && event.target[0].value.trim() !== '') {
      const name = event.target[0].value;
      this.props.add(name);
      event.target[0].value = '';
      input.style.display = 'none';
    } else {
      // input field is empty or white space
      input.style.display = 'none';
    }
  }

  render() {
    return (
      <form onSubmit={this.onClickInput}>
        <input placeholder="new category" id="input" style={{ display: 'none' }} />
        <input type="submit" value="+" className="button-add" />
      </form>
    );
  }
}

export default FormCategory;
