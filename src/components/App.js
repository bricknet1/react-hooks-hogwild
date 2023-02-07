import React from "react";
// import hogs from "../porkers_data";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer"
// import {useState} from 'react'
// import PigCards from "./PigCards"

function App() {

// 	const [currentFilter, setCurrentFilter] = useState('all')
	
// 	const filteredHogs = hogs.filter(hog => {
// 		if (currentFilter === "greased"){
// 			return hog.greased
// 		} else if (currentFilter === "notGreased"){
// 			return !hog.greased
// 		} else {
// 			return true
// 		}
// 	})
	
// 	// const pigCard = filteredHogs.map(PigCards)
	
// 	function handleFilter(e){
// 		setCurrentFilter(e.target.value)
// 	}

// ///////////////////////

// let sortedHogs

// const [isNameSorted, setIsNameSorted] = useState(false)

// if (isNameSorted) {sortedHogs =
// 	filteredHogs.sort((a,b) => {
// 		if (a.name.toLowerCase() < b.name.toLowerCase()) {
// 			return -1;
// 		}
// 		if (a.name.toLowerCase() > b.name.toLowerCase()) {
// 			return 1;
// 		}
// 		return 0;
// 	})
// } else {sortedHogs = filteredHogs}

// function handleSortByName(){
// 	setIsWeightSorted(false)
// 	setIsNameSorted(!isNameSorted)
// }

// ///////////////////////

// const [isWeightSorted, setIsWeightSorted] = useState(false)

// if (isWeightSorted) {sortedHogs =
// 	filteredHogs.sort((a,b) => {
// 		if (a.weight < b.weight) {
// 			return -1;
// 		}
// 		if (a.weight > b.weight) {
// 			return 1;
// 		}
// 		return 0;
// 	})
// } else {sortedHogs = filteredHogs}

// function handleSortByWeight(){
// 	setIsNameSorted(false)
// 	setIsWeightSorted(!isWeightSorted)
// }

// ////////////////////////

// const pigCard = sortedHogs.map(hog => <PigCards key={hog.name} {...hog}/>)

////////////////////////

return (
		<div className="App">
			<Nav />
			<HogsContainer />
					{/* <select onChange={handleFilter}>
						<option value="all">All</option>
						<option value="greased">Greased Hogs</option>
						<option value="notGreased">Non-greased Hogs</option>
					</select> 
					<button onClick={handleSortByName} >Sort by Name</button> 
					<button onClick={handleSortByWeight} >Sort by Weight</button>
			<div className="ui grid container">
				<div className="ui eight wide column">
					{pigCard}
				</div>
			</div> */}
		</div>
	);
}

export default App;
