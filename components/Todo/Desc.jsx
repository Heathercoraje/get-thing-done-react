import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
Desc.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	HandleDesc: PropTypes.func
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
					<div className="desc" id="desc" onClick={this.toggle}>
						{description}
					</div>
				</div>
			);
		}
	}
}

DescForm.propTypes = {
	name: PropTypes.string,
	description:PropTypes.string,
	HandleDesc: PropTypes.func
}

const Header = ({ name, toggle }) => {
	return (
		<div className="cate-title">
			<h1 className="todo-name">{name}</h1>
			<button type="button" className="button-edit" onClick={toggle}>
				&nbsp;&#10000;
			</button>
		</div>
	);
};

Header.propTypes = {
	name: PropTypes.string,
	toggle: PropTypes.func
}

export { Desc, DescForm, Header };
