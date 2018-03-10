import React, { Component } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import FormTodo from './FormTodo';

const Wrapper = styled.div`
	box-sizing: border-box;
	border-top-right-radius: 0.2rem;
	border-bottom-right-radius: 0.2rem;
	background: white;
	padding: 3rem 1.5rem 1.5rem 2.5rem;
	float: right;
	width: 65%;
	height: 100%;
	display: flex;
	flex-direction: column;
	color: #393939;
`;

const HandleDesc = (e) => {
  if (e.keyCode === 13) {
    document.getElementById('descForm').submit();
  }
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: 'hello world'
    };
    this.HandleDesc = this.HandleDesc.bind(this);
  }
  HandleDesc(e) {
    if (e.keyCode === 13) {
      this.setState({
        description: e.target.value
      });
      e.preventDefault();
    }
  }
  render() {
    return (
      <Wrapper>
        <TodoList
          categories={this.props.categories}
          todos={this.props.todos}
          selected={this.props.selected}
          delete={this.props.delete}
          HandleDesc={this.HandleDesc}
          desc={this.state.description}
        />
        <FormTodo add={this.props.add} selected={this.props.selected} />
      </Wrapper>
    );
  }
}

export default Todo;
