import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import HeaderPoke from '../Header-Pokedex/HeaderPoke'
import BodyDetails from './bodyDetails/BodyDetails'
import HeadDetails from './head-details/HeadDetails'
import './pokemonDetails.css'


const PokemonDetails = () => {

  // capturando info pokeom pokedex/name
  const {name} = useParams()

  // Pokemon details
  const [pokemon, setPokemon] = useState()

  useEffect(()=>{
 
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    axios.get(url)
        .then(res => {setPokemon(res.data)})
        .catch(err => console.log(err))
        
  },[])

  console.log(pokemon)

  
  return (
    <section>

        <HeaderPoke />

        <article className='pokemon-details-container'>

          <HeadDetails pokemon={pokemon} />

          <BodyDetails pokemon={pokemon} />

          


        </article>
        
    </section>
  )
}

export default PokemonDetails