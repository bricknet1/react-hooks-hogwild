import React from "react";
import Nav from "./Nav";
import PigCards from "./PigCards"
import hogs from "../porkers_data";
import {useState} from 'react'

function App() {

	/*
	const pigCard = 

	*/

	
	const [currentFilter, setCurrentFilter] = useState('all')
	
	const filteredHogs = hogs.filter(hog => {
		if (currentFilter === "greased"){
			return hog.greased
		} else if (currentFilter === "notGreased"){
			return !hog.greased
		} else {
			return true
		}
	})
	console.log(filteredHogs);
	
	const pigCard = filteredHogs.map(hog => <PigCards key={hog.name} {...hog}/>)
	// const pigCard = filteredHogs.map(PigCards)
	
	function handleFilter(e){
		setCurrentFilter(e.target.value)
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
