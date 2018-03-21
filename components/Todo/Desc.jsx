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
	};

	render() {
		const name = this.props.name;
		const description = this.props.description;
		if (this.state.edit) {
			return (
				<div>
					<Header name={name} toggle={this.toggle} />
					<form
						className="form-desc"
						onSubmit={evt => {
							this.props.HandleDesc(evt);
							this.toggle();
						}}
					>
						<input
							size="22"
							className="input-desc"
							type="text"
							placeholder={description}
							onBlur={evt => this.props.HandleDesc(evt)}
							autoFocus
						/>
						<input style={{ display: 'none' }} type="submit" />
					</form>
				</div>
			);
		} else {
			return (
				<div>
					<Header name={name} toggle={this.toggle} />
					<div id="desc" onClick={this.toggle}>
						{description}
					</div>
				</div>
			);
		}
	}
}

const Header = props => {
	return (
		<div className="cate-title">
			<h1 className="todo-name">{props.name}</h1>
			<button type="button" className="button-edit" onClick={props.toggle}>
				&nbsp;&#10000;
			</button>
		</div>
	);
};

export { Desc, DescForm, Header };
