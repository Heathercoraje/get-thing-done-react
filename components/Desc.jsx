import React, { Component } from 'react';
import ReactDOM from 'react';
import styled from 'styled-components';

const DescBox = styled.div`
	margin-bottom: 3vh;
`;

class Desc extends Component {
  render() {
    const name = this.props.name;
    const desc = this.props.desc;
    return (
      <DescBox className="desc-box">
        <DescForm name={name} desc={desc} HandleDesc={this.props.HandleDesc} />
      </DescBox>
    );
  }
}

class DescForm extends Component {
	state = {
	  value: '',
	  edit: false
	};

	toggle = () => {
	  const prev = this.state.edit;
	  this.setState({
	    edit: !prev
	  });
	  this.descInput.focus();
	};
	handleChange = (evt) => {
	  this.setState({
	    value: this.props.desc
	  });
	};
	render() {
	  const name = this.props.name;
	  const desc = this.props.desc;
	  return (
	    <div>
	      <Title name={name} toggle={this.toggle} />
	      <form
	        className={this.state.edit ? 'show' : 'hide'}
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
	      </form>
	      <div
	        id="desc"
	        className={`desc ${this.state.edit ? 'hide' : 'show'}`}
	        onClick={this.toggle}
	      >
	        {desc}
	      </div>
	    </div>
	  );
	}
}
const Title = props => (
  <div className="cate-title">
    <h1 style={{ display: 'inline' }} className="todo-name">
      {props.name}
    </h1>
    <button className="button-edit" onClick={props.toggle}>
			&nbsp;&#9997;
    </button>
  </div>
);
export default Desc;
