import React, { useEffect, useState } from 'react'
import './pokedex.css'
import { useDispatch, useSelector } from 'react-redux'
import CardPoke from './CardPokemon/CardPoke'
import axios from 'axios'
import HeaderPoke from './Header-Pokedex/HeaderPoke'
import SearchInput from './SearchInput/SearchInput'

const Pokedex = () => {

    // Pokemons List Generic

    const nameTrainer = useSelector(state => state.nameTrainer)

    const [pokemons, setPokemons] = useState()

    useEffect(()=>{
        const url = "https://pokeapi.co/api/v2/pokemon/"
        axios.get(url)
            .then(res => {setPokemons(res.data.results)
                console.log(res.data.results)
            })
            .catch(err => console.log(err))
            
    },[])

   //type Pokemon

   const [typePokemons, setTypePokemons] = useState()

   useEffect(()=>{
    const url = "https://pokeapi.co/api/v2/type/"
    axios.get(url)
        .then(res => setTypePokemons(res.data.results))
        .catch(err => console.log(err))
    },[])

    //type Pokemon Using Filter



  return (
    <section className='pokedex-container' >

        <HeaderPoke />
        

        <div className="body-container">
            <h2 className='title-trainer'><span>Bienvenido {nameTrainer}</span>, aquí podrás encontrar tu pokemón favorito.</h2>

            <SearchInput />
        </div>

        

        <div className="container-cards-pokemons">
            {
                pokemons?.map(pokemon => (
                    <CardPoke
                        key={pokemon.url}
                        url={pokemon.url}
                    />
                ))
            }
            
        </div>

    </section>
  )
}

export default Pokedex