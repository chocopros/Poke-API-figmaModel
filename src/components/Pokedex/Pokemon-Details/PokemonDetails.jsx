import React from 'react'
import { useParams } from 'react-router-dom'
import HeaderPoke from '../Header-Pokedex/HeaderPoke'

const PokemonDetails = () => {

  // capturando info pokeom pokedex/name
  const {name} = useParams()

  
  return (
    <section>
        <HeaderPoke />

        <article className='pokemon-details'>

          <header className='head-details'>


          </header>

          <div className='body-details'>
            <h1>{name}</h1>

          </div>

        </article>
        
    </section>
  )
}

export default PokemonDetails