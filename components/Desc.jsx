import React, { Component } from 'react';
import ReactDOM from 'react';
import styled from 'styled-components';

const DescBox = styled.div`
	margin-bottom: 3vh;
`;

class Desc extends Component {
	render() {
		const name = this.props.name;
		const description = this.props.description;
		return (
			<DescBox className="desc-box">
				<DescForm
					name={name}
					description={description}
					HandleDesc={this.props.HandleDesc}
				/>
			</DescBox>
		);
	}
}

class DescForm extends Component {
	state = {
		edit: false
	};
	componentWillReceiveProps() {
		this.setState({
			edit: false
		});
	}
	toggle = () => {
		const prev = this.state.edit;
		this.setState({
			edit: !prev
		});
		setTimeout(() => {
			this.ref.focus();
		});
	};

	render() {
		const name = this.props.name;
		const description = this.props.description;
		return (
			<div>
				<div className="cate-title">
					<h1 style={{ display: 'inline' }} className="todo-name">
						{name}
					</h1>
					<button
						className="button-edit"
						onClick={() => {
							this.toggle();
						}}
					>
						&nbsp;&#10000;
					</button>
				</div>
				<form
					className={this.state.edit ? 'show' : 'hide'}
					onSubmit={evt => {
						this.props.HandleDesc(evt);
						this.toggle();
					}}
				>
					<input
						ref={c => (this.ref = c)}
						size="22"
						className="input-desc"
						type="text"
						placeholder={description}
						onBlur={evt => this.props.HandleDesc(evt)}
					/>
					<input style={{ display: 'none' }} type="submit" />
				</form>
				<div
					id="desc"
					className={`desc ${this.state.edit ? 'hide' : 'show'}`}
					onClick={this.toggle}
				>
					{description}
				</div>
			</div>
		);
	}
}

export default Desc;
