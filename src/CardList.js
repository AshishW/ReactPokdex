import React from 'react';
import Card from './Card';
const Cardlist =({pokemon})=>{
  if(pokemon.length===0){
    return(
      <div className='list'>
        <h1>Enter a pokemon</h1>
        <h2>{`(eg: Charizard, pikachu, raichu, etc)`}</h2>     
      </div>
      
    );
  }
  else{
    return(
      <div>
        {
          pokemon.map((pokemon, i)=>{
            return(<Card
              id ={pokemon.id}
              key ={pokemon.id}
             name = {pokemon.name}
             height = {pokemon.height}
             weight = {pokemon.weight}   
             image = {pokemon.sprites.front_default}         
            />)
          })
        }
      </div>
  );
}

  }
 
export default Cardlist;