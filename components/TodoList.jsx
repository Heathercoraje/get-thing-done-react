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
    // console.log(this.props.todos.length, this.props.categories.length);
    const Renderlist = (todos) => {
      if (!todos) {
        return '';
      }
      return todos.map(todo => (
        <div key={todo.id} className="list-todo">
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
