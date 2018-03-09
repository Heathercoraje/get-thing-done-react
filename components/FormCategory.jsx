import React, { Component } from 'react';

class FormCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOpen: true
    };
    this.onClickInput = this.onClickInput.bind(this);
  }

  onClickInput(event) {
    event.preventDefault();
    const name = event.target[0].value;
    this.props.add(name);
    event.target[0].value = '';
  }

  render() {
    return (
      <form onSubmit={this.onClickInput}>
        <input required placeholder="new category" />
        <input type="submit" value="+" className="button-add" />
      </form>
    );
  }
}

export default FormCategory;
