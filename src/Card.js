import React from 'react';
import './Card.css'
const Card =({id, name, height, weight, image}) =>{
    return(
        <div className='card'>
           <img className='pokemonImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt = 'pokeball.png'/>
           <div className = 'detail'>
             <h3>{`Name: ${name}`}</h3>
             <h3>{`Height: ${height}`}</h3>
             <h3>{`Weight: ${weight}`}</h3> 
           </div>
        </div>
    );
}

export default Card;