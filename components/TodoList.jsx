import React, { Component } from 'react';
import styled from 'styled-components';
import Desc from './Desc';

const Wrapper = styled.div`
	width: 100%;
`;

class TodoList extends Component {
 state = {
   editMode: false
 };

 render() {
   const todos = this.props.todos;
   const selected = this.props.selected;
   const name = this.props.name;
   const descText = this.props.categories[selected].desc;
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
         name={name}
         desc={descText === '' ? 'Add description of category' : descText}
         HandleDesc={this.props.HandleDesc}
       />
       <div>{Renderlist(todos)}</div>
     </Wrapper>
   );
 }
}

export default TodoList;
