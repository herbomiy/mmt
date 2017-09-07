import React, {Component} from 'react';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}
	_handleClick() {
		this.setState({
			count: ++ this.state.count
		})
	}
	render() {
		return (
			<div>
				this is home page.<br/>
				<h5>{this.state.count}</h5>
				<button onClick={() => this._handleClick()}>addOne</button>
			</div>
		)
	}
}