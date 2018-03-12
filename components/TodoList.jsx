import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
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

const Title = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const P = styled.p`
	word-wrap: break-word;
	font-size: 1.5vw;
`;

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
    this.toggle = this.toggle.bind(this);
  }

  // completeTodo = (event) => {
  // 	document.getElementById(event.target.id).classList.toggle('complete');
  // };

  toggle() {
    document.getElementById('input-desc').classList.toggle('show');
    document.getElementById('desc').classList.toggle('hide');

    this.setState({
      editMode: !this.state.editMode
    });
  }

  render() {
    const name = this.props.categories[this.props.selected].category;
    const desc =
   this.props.categories[this.props.selected].desc === ''
     ? 'Add description of category'
     : this.props.categories[this.props.selected].desc;

    const todos = this.props.todos;
    const Desc = (
      <div>
        <Title>
          <h1 style={{ display: 'inline' }} className="todo-name">
            {name}
          </h1>
          <EditButton onClick={this.toggle}>&#9997;</EditButton>
        </Title>
        <form
          id="input-desc"
          className="form-edit"
          onSubmit={(e) => {
            this.props.HandleDesc(e);
            this.toggle();
          }}
        >
          <input size="22" className="input-desc" type="text" placeholder={desc} />
          <input style={{ display: 'none' }} type="submit" />
        </form>
        <P id="desc">{desc}</P>
      </div>
    );
    const Renderlist = (todos) => {
      if (todos.length === 0 || todos === undefined) {
        return '';
      }
      return todos.map(todo => (
        <div className="list-todo" key={todo.id}>
          <button className="checkbox" onClick={this.props.delete} value={todo.id}>
						&#9744;
          </button>
          <li id={Math.random()} value={todo.id}>
            {todo.todo}
          </li>
        </div>
      ));
    };
    return (
      <Wrapper>
        <div className="desc-box">{Desc}</div>
        <div>{Renderlist(todos)}</div>
      </Wrapper>
    );
  }
}

export default TodoList;
