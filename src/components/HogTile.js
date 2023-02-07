import HogDetails from './HogDetails'
import {useState} from 'react'


function HogTile({name, image, specialty, weight, greased, "highest medal achieved": highestMedal}){
    
    const [showDetails, setShowDetails] = useState(false)
    
    function handleClick(){
        setShowDetails((currentState) => !currentState)
    }

    return (
        <article className="pigTile" onClick={handleClick} >
            <h2>{name}</h2>
            <img src={image} alt={name} className="minPigTile"></img>
            {showDetails && <HogDetails specialty={specialty} greased={greased} weight={weight} highestMedal={highestMedal}/>}
        </article>
    )
}

export default HogTile