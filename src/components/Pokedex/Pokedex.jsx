import React, { useEffect, useState } from 'react'
import './pokedex.css'
import { useDispatch, useSelector } from 'react-redux'
import CardPoke from './CardPokemon/CardPoke'
import axios from 'axios'

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
        <header className='header-Pokedex'>
            <div className='logo-pokedex'>
                <img src="src\assets\img\LOGO.svg" alt="" />
            </div>
            <div className='black-line'>
                <div className="closet-ball">
                    <img src="src\assets\img\img-pokedex\Ellipse 3.png" alt="" />
                    <img className='ball-point' src="src\assets\img\img-pokedex\Ellipse 4.png" alt="" />
                </div>
            </div>  
        </header>

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
                pokemons?.slice(0,20).map(pokemon => (
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