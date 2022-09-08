import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setNameTrainer} from '../../store/Slices/nameTrainer.slice'
import './Heropoke.css'

const HeroPokemons = () => {

  const dispath = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    const inputValue = e.target.name.value.trim()

    if(inputValue.length !== 0 ){
      dispath(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ""
  }

  

  return (
    <section className='Hero-Pokemons'>

      <div className="hero-body">
        <div className='pokeLogo'>
          <img src="src/assets/img/LOGO.svg" alt="Logo-pokedex" />
        </div>
        <div className='title-ppal'>
          <h2>¡¡Hola Entrenador!!</h2>
          <h3>Para poder comenzar, dame tu nombre</h3>
        </div>
        <form onSubmit={handleSubmit} className="input-trainer-pokemons">
          <input id='name' placeholder='Tu Nombre...' type="text" />
          <button>Comenzar</button>
        </form>
      </div>
  
      <footer className='footerHero'>
        <div className="img-button-poke">
          <img className='back-button' src="src/assets/img/img-pokedex/Ellipse 3.png" alt="" />
          <img className='up-button' src="src/assets/img/img-pokedex/Ellipse 4.png" alt="" />
        </div>
        <div className='back-black'></div>
      </footer>
      
    </section>
    
  )
}

export default HeroPokemons