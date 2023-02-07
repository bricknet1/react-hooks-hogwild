// import {useState} from 'react'

function Filters({greasedChecked, onGreasedChange, sortBy, onSortBy}){

    return (
        <form>
            <label htmlFor="greased">Greased </label>
            <input type="checkbox" id="greased" checked={greasedChecked} onChange={onGreasedChange} />
            <fieldset onChange={onSortBy}>
                <legend>Sort:</legend>
                <div>
                <input type="radio" id="all" value="all" checked={sortBy === "all"} />
                <label for="all">All</label>
                </div>
                <div>
                <input type="radio" id="name" value="name" checked={sortBy === "name"} />
                <label for="name">Name</label>
                </div>
                <div>
                <input type="radio" id="weight" value="weight" checked={sortBy === "weight"} />
                <label for="weight">Weight</label>
                </div>
            </fieldset>
        </form>
    )
}

export default Filters