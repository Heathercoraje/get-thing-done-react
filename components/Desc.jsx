import React, { Component } from 'react';
import styled from 'styled-components';

const DescBox = styled.div`
	margin-bottom: 3vh;
`;
const Title = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

class Desc extends Component {
 state = {
   value: ''
 };
 toggle = () => {
   document.getElementById('form-desc').classList.toggle('show');
   document.getElementById('desc').classList.toggle('hide');
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
     <DescBox className="desc-box">
       <Title>
         <h1 style={{ display: 'inline' }} className="todo-name">
           {name}
         </h1>
         <button className="button-edit" onClick={this.toggle}>
						&nbsp;&#9997;
         </button>
       </Title>
       <form
         id="form-desc"
         className="form-desc"
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
       <p id="desc" className="desc" onClick={this.toggle}>
         {this.props.desc}
       </p>
     </DescBox>
   );
 }
}

export default Desc;
