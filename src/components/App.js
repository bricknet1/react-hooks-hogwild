import React from "react";
import Nav from "./Nav";
import PigCards from "./PigCards"
import hogs from "../porkers_data";
import {useState} from 'react'

function App() {

	/*
	const pigCard = 

	*/

	const pigCard = hogs.map(PigCards)
	
	// const [currentFilter, setCurrentFilter] = useState('all')
	// console.log(currentFilter);

	
	function handleFilter(e){
		// setCurrentFilter((filter)=> filter = e.target.value)
		const filteredHogs = hogs.filter((hog)=>{
			if (e.target.value === "greased"){
				return hog.greased
			} else if (e.target.value === "notGreased"){
				return !hog.greased
			} else if (e.target.value === "all"){
				return hog
			}
		})
		console.log(filteredHogs);
	}

	return (
		<div className="App">
			<Nav />
			<div className="ui grid container">
				<div className="ui eight wide column">
					<select onChange={handleFilter}>
						<option value="all">All</option>
						<option value="greased">Greased Hogs</option>
						<option value="notGreased">Non-greased Hogs</option>
					</select>
					{pigCard}
				</div>
			</div>
		</div>
	);
}

export default App;
