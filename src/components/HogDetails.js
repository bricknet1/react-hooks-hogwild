function HogDetails({greased, specialty, weight, highestMedal}){
    return(
        <ul>
            <li>{greased ? "Greased" : "Not Greased"}</li>
            <li>Specialty: {specialty}</li>
            <li>Highest Medal: {highestMedal}</li>
            <li>Weight: {weight} lbs</li>
        </ul>
    )
}

export default HogDetails