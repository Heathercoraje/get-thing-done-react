import React, { Component } from 'react';
import styled from 'styled-components';
import Desc from './Desc';

const Wrapper = styled.div`
	width: 100%;
`;

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }
  render() {
    const todos = this.props.todos;
    const Renderlist = (todos) => {
      if (todos.length === 0 || todos === undefined) {
        return '';
      }

      return todos.map(todo => (
        <div className="list-todo" key={todo.id}>
          <button className="checkbox" onClick={this.props.delete} value={todo.id}>
						&#9744;
          </button>
          <li
            id={todo.id}
            onClick={this.props.complete}
            value={todo.id}
            style={!todo.isDone ? null : { textDecoration: 'line-through' }}
          >
            {todo.todo}
          </li>
        </div>
      ));
    };

    return (
      <Wrapper>
        <Desc
          name={this.props.categories[this.props.selected].category}
          desc={
            this.props.categories[this.props.selected].desc === ''
              ? 'Add description of category'
              : this.props.categories[this.props.selected].desc
          }
          HandleDesc={this.props.HandleDesc}
        />
        <div>{Renderlist(todos)}</div>
      </Wrapper>
    );
  }
}

export default TodoList;
