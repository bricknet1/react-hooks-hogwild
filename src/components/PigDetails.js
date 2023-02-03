function PigDetails(hog){
    return(
        <ul>
            <li>Specialty: {hog.specialty}</li>
            <li>Weight: {hog.weight}</li>
            <li>Greased: {hog.greased}</li>
            <li>Highest medal achieved: {hog["highest medal achieved"]}</li>
        </ul>
    )
}

export default PigDetails