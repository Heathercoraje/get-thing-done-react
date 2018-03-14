import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const EditButton = styled.button`
	background: transparent;
	border: none;
	color: #cacaca;
	font-size: 1.8rem;
	padding: 0;
	margin: 0;
	font-weight: 100;
	float: right;
`;
const Form = styled.form`
	display: none;
`;
const P = styled.p`
	word-wrap: break-word;
	font-size: 1.5vw;
	font-family: 'Merriweather Sans', sans-serif;
	font-style: oblique;
	color: gray;
	text-transform: capitalize;
`;
class Desc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle() {
    document.getElementById('form-desc').classList.toggle('show');
    document.getElementById('desc').classList.toggle('hide');
    this.descInput.focus();
  }

  handleChange(evt) {
    this.setState({
      value: this.props.desc
    });
  }
  render() {
    const name = this.props.name;
    const desc = this.props.desc;
    return (
      <div className="desc-box">
        <Title>
          <h1 style={{ display: 'inline' }} className="todo-name">
            {name}
          </h1>
          <EditButton onClick={this.toggle}> &#9997;</EditButton>
        </Title>
        <Form
          id="form-desc"
          onSubmit={(evt) => {
            this.props.HandleDesc(evt);
            this.toggle();
          }}
        >
          <input
            size="22"
            className="input-desc"
            type="text"
            placeholder={this.props.desc}
            ref={input => (this.descInput = input)}
            onChange={this.handleChange}
          />
          <input style={{ display: 'none' }} type="submit" />
        </Form>
        <P id="desc" class="desc" onClick={this.toggle}>
          {this.props.desc}
        </P>
      </div>
    );
  }
}

export default Desc;
