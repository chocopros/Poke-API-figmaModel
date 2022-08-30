import React, { useEffect, useState } from 'react'
import './pokedex.css'
import { useDispatch, useSelector } from 'react-redux'
import CardPoke from './CardPokemon/CardPoke'
import axios from 'axios'
import HeaderPoke from './Header-Pokedex/HeaderPoke'

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


    const changeSubmit = (e=1) => {

        if (e === ""){

        } else {

            const type = e.target.value
        
            console.log(e.target.value)

            const url = `https://pokeapi.co/api/v2/type/${type}/`

            axios.get(url)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))

        }

    

    }

  return (
    <section className='pokedex-container' >

        <HeaderPoke />

        <div className="body-container">
            <h2 className='title-trainer'><span>Bienvenido {nameTrainer} </span>, aquí podrás encontrar tu pokemón favorito.</h2>
            <div className="filter-pokemon">
                <form className='input-trainer-pokemons'>
                    <input placeholder='Nombre del Pokemon..' type="text" />
                    <button> Buscar</button>
                </form>

                <form onChange={changeSubmit} >
                    <select className='selector' name="classpokemons" id="class">
                        <option key={0} value=""></option>
                        {
                            typePokemons?.map((type,i) => (
                                <option key={i} value={i+1}>{type?.name}</option>
                            ))
                        }
                    </select>
                </form>

            </div>
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