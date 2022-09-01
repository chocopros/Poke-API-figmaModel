import React, { useEffect, useState } from 'react'
import './pokedex.css'
import { useDispatch, useSelector } from 'react-redux'
import CardPoke from './CardPokemon/CardPoke'
import axios from 'axios'
import HeaderPoke from './Header-Pokedex/HeaderPoke'
import SearchInput from './SearchInput/SearchInput'
import SelectType from './SelectType/SelectType'


const Pokedex = () => {

    const nameTrainer = useSelector(state => state.nameTrainer)

    const [pokemons, setPokemons] = useState()

    const [pokeSearch, setPokeSearch] = useState()

    const [typePokemons, setTypePokemons] = useState('All')

    useEffect(()=>{
        let url
    
        //logica cuando el usuario busca por los filtros
        if(pokeSearch || typePokemons !== 'All' ){
            
            if(pokeSearch){

                const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
                const obj = {
                    results: [
                        {
                            url
                        }
                    ]
                }
                setPokemons(obj)

            } else { //logica por type
                url = `https://pokeapi.co/api/v2/type/${typePokemons}/`
                axios.get(url)
                    .then(res => {
                        const arr = res.data.pokemon.map(e => e.pokemon)
                        
                        
                        setPokemons({results: arr})
                    })
                    .catch(err => console.log(err))

            }  
        } else {
            url = "https://pokeapi.co/api/v2/pokemon/"
            axios.get(url)
            .then(res => {setPokemons(res.data)})
            .catch(err => console.log(err))
        }   

            
    },[pokeSearch, typePokemons])

    console.log(pokemons)


  return (
    <section className='pokedex-container' >

        <HeaderPoke />
        

        <div className="body-container">
            <h2 className='title-trainer'><span>Bienvenido {nameTrainer}</span>, aquí podrás encontrar tu pokemón favorito.</h2>
            <div className='filter-Container'>
                <SearchInput setPokeSearch={setPokeSearch} />
                <SelectType setTypePokemons={setTypePokemons} />
            </div>
        
        </div>

        

        <div className="container-cards-pokemons">
            {
                pokemons?.results.slice(0,50).map(pokemon => (
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