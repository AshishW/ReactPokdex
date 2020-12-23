import './App.css';
import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
class App extends Component{
  constructor(){
    super();
    this.state = {
      searchfield: '',
      pokemonData: [],
      pokemon: []
    }
  }
  componentDidMount(){
    let url ='https://pokeapi.co/api/v2/pokemon/?limit=251';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({pokemon: data.results}
      , () =>this.state.pokemon.map(pkmn =>{
        return fetch(pkmn.url)
                 .then(response => response.json())
                  .then(data => {this.setState((temp)=>({pokemonData: [...temp.pokemonData, data] }))
         })
      }))
    })
  }
  onSearchChange = (e) =>{
    this.setState({searchfield: e.target.value});
  }
  render(){
    const {pokemonData, searchfield} = this.state;
    const filteredPokemon = pokemonData.filter(pokemon => {return pokemon.name.toLowerCase()===searchfield.toLowerCase()})
    return(
       <div className='main'>
         <h1>POKEDEX</h1>
         <SearchBox searchChange = {this.onSearchChange}/>
         <CardList pokemon = {filteredPokemon} />
       </div>
    );
  }
}

export default App;