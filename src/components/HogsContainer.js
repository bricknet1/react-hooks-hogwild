import {useState} from 'react'
import hogs from "../porkers_data";
import Filters from './Filters'
import HogTile from './HogTile'

function HogsContainer(){

    const [greasedChecked, setGreasedChecked] = useState(false)
    
    function handleGreasedChange(e){
        setGreasedChecked(e.target.checked)
    }

    const filterGreasedHogs = hogs.filter(hog => {
        if (greasedChecked){
            return hog.greased
        }
        return true
    })

    const hogTiles = filterGreasedHogs.map((hog)=>
        <HogTile key={hog.name} {...hog} />
    )

    return(
        <section>
            <Filters greasedChecked={greasedChecked} onGreasedChange={handleGreasedChange}/>
            {hogTiles}
        </section>
    )
}

export default HogsContainer