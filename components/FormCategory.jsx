import React, { Component } from 'react';

class FormCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOpen: false
    };
    this.onClickInput = this.onClickInput.bind(this);
  }

  // componentDidMount() {
  //   const target = document.getElementById('input');
  //   if (target.style.color == red) {
  //     target.style.color == blue;
  //   }
  // }
  onClickInput(event) {
    event.preventDefault();
    const input = document.getElementById('input');
    if (input.style.display === 'none') {
      input.style.display = 'block';
    } else {
      input.style.display = 'none';
    }
    // const name = event.target[0].value;
    // this.props.add(name);
    // event.target[0].value = '';
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
