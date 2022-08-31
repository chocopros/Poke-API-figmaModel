import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import HeaderPoke from '../Header-Pokedex/HeaderPoke'
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

          <header className='head-details'>
            <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt={pokemon?.name} />
          </header>

          <div className='body-details'>
            <h2>#{pokemon?.id}</h2>
            <h1 className='title-namePokemon'>{name}</h1>

            <ul className='list-propeps-poke'>
              <li>
                <h3>Peso</h3>
                <div>{pokemon?.weight}</div>
              </li>
              <li>
                <h3>Altura</h3>
                <div>{pokemon?.height}</div>
              </li>
            </ul>

            <div className="typeHabi-Container">

              <div className='type-habilitys'>
                <div className='details-midle'>
                  <h2>Tipo</h2>
                  <div className='details-type-hability'>
                    {
                      pokemon?.types.map(type => (

                        <div className='type-option'><h3>{type.type.name}</h3></div>

                      ))  
                    
                    }
                  </div>
                </div>

                <div className='details-midle'>
                  <h2>Habilidades</h2>
                  <div className='details-type-hability'>
                    {
                      pokemon?.abilities.map(ability => (

                        <div className='type-option'><h3>{ability.ability.name}</h3></div>

                      ))  
                    
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="Stats">
              
            </div>



          </div>

        </article>
        
    </section>
  )
}

export default PokemonDetails