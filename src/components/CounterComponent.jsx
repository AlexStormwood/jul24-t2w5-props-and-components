// Keep track of a number
// Provide a button that increases number by one on click

import React from "react";

export default class CounterComponent extends React.Component {
	constructor(){
		super();

		// Declaring/initialising state with default values
		this.state = {
			counter: 0,
			favouritePokemon: "squirtle"
		}
	}

	render(){
		return(
			<div className="card">
				<button onClick={() => {
					this.setState((previousState) => {
						return {
							...previousState,
							counter: previousState.counter + 1
							}
						})
					}}
				>
					count is {this.state.counter}
				</button>
			</div>
		)
	}
}