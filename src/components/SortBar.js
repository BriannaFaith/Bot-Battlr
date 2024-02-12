import React from 'react';

function SortBar({ onSortBy }){
    const handleSortBy =(event) =>{
        const selectedCriteria = event.target.value;
        onSortBy(selectedCriteria);
      };
    return(
        <>
        <div className="sort-bar">
            <label htmlFor="sort-select">Sort by:</label>
            <select id="sort-select" onChange={handleSortBy}>
            <option value="health">Health</option>
            <option value="damage">Damage</option>
            <option value="armor">Armor</option>
      </select>
    </div>

        </>
    )
}


export default SortBar;
