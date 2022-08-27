import React from 'react'
import './Heropoke.css'

const HeroPokemons = () => {
  return (
    <section className='Hero-Pokemons'>
      <div>
        <img src="src\assets\img\LOGO.svg" alt="" />
      </div>
      <div className='title-ppal'>
        <h2>¡Hola entrenador!</h2>
        <h3>Para poder comenzar, dame tu nombre</h3>
      </div>
      <div className="input-trainer-pokemons">
        <input type="text" />
        <button>Comenzar</button>
      </div>
      
    </section>
  )
}

export default HeroPokemons