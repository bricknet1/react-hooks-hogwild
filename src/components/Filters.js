// import {useState} from 'react'

function Filters({greasedChecked, onGreasedChange}){

    return (
        <form>
            <label htmlFor="greased">Greased </label>
            <input type="checkbox" id="greased" checked={greasedChecked} onChange={onGreasedChange} />
        </form>
    )
}

export default Filters