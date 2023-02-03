import React from "react";
import {useState} from 'react';
import PigDetails from './PigDetails'

const PigCards = (hog)=>{
    
    const [isDisplayed, toggleIsDisplayed] = useState(false)

    function handleClick () {
        toggleIsDisplayed(!isDisplayed)
    }
    
    return (
        <article onClick={handleClick} className="pigTile">
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} className="minPigTile"></img>
            {isDisplayed && PigDetails(hog)}
        </article>
    )
}

export default PigCards;
