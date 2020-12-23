import React from 'react';
import './SearchBox.css'
const SearchBox = ({searchChange }) =>{
    return(
        <div className='searchBox'>
            <input  
            type='search' 
            placeholder='enter a pokemon (eg: pikachu, charizard, etc))'
            onChange = { searchChange }
            />
        </div>
        
    );
}
export default SearchBox;