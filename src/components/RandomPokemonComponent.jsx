import React from "react";


export default class RandomPokemonComponent extends React.Component {
	constructor(){
		super();

		this.state = {
			name: "",
			sprite: ""
		}
	}

	async componentDidMount(){
		console.log("RandomPokemonComponent has loaded.");

		let targetPokemonID = Math.floor(Math.random() * 1025) + 1;
		console.log("Getting data for Pokemon with ID of : " + targetPokemonID);

		let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemonID);
		let data = await response.json();

		this.setState({
			name: data.name,
			sprite: data.sprites.front_default
		});

	}

	componentDidUpdate(){
		console.log("RPC has updated, state values are now: " + JSON.stringify(this.state));
	}

	render(){

		if (this.state.name && this.state.sprite){
			return <div>
				<h1>{this.state.name}</h1>
				<img src={this.state.sprite} />
			</div>
		} else {
			return <p>Loading...</p>
		}

		// return(
		// 	<section>
		// 		{this.state.name.length > 0 && <h1>{this.state.name}</h1>}
		// 		{this.state.sprite && <img src={this.state.sprite} />}

		// 		{
		// 		(this.state.name && this.state.sprite) ? 
		// 		<div>
		// 			<h1>{this.state.name}</h1>
		// 			<img src={this.state.sprite} />
		// 		</div> 
		// 		:
		// 		<div>
		// 			<p>Loading...</p>
		// 		</div>
		// 		}
		// 	</section>
		// )
	}
}