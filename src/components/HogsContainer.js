import {useState} from 'react'
import hogs from "../porkers_data";
import Filters from './Filters'
import HogTile from './HogTile'

function HogsContainer(){

    const [greasedChecked, setGreasedChecked] = useState(false)
    const [sortBy, setSortBy] = useState('all')
    
    function handleGreasedChange(e){
        setGreasedChecked(e.target.checked)
    }
    
    function handleSortBy(e){
        console.log(e.target.value);
        setSortBy(e.target.value)
    }

    const filterGreasedHogs = hogs.filter(hog => {
        if (greasedChecked){
            return hog.greased
        }
        return true
    })

    // function sortHogs(){
    //     if(sortBy === 'all'){

    //     } else if (sortBy === 'name'){
    //         filteredGreasedHogs.sort((hog) => )
    //     } else if (sortBy === 'weight'){

    //     }
    // }

    const hogTiles = filterGreasedHogs.map((hog)=>
        <HogTile key={hog.name} {...hog} />
    )

    return(
        <section>
            <Filters greasedChecked={greasedChecked} onGreasedChange={handleGreasedChange} sortBy={sortBy} onSortBy={handleSortBy} />
            {hogTiles}
        </section>
    )
}

export default HogsContainer