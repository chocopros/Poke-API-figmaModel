import React from 'react'
import './Heropoke.css'

const HeroPokemons = () => {
  return (
    <section className='Hero-Pokemons'>

      <div className="hero-body">
        <div>
          <img src="src\assets\img\LOGO.svg" alt="" />
        </div>
        <div className='title-ppal'>
          <h2>¡Hola entrenador!</h2>
          <h3>Para poder comenzar, dame tu nombre</h3>
        </div>
        <div className="input-trainer-pokemons">
          <input placeholder='Tu Nombre...' type="text" />
          <button>Comenzar</button>
        </div>
      </div>
   

      <footer className='footerHero'>
        <div className="img-button-poke">
          <img className='back-button' src="src\assets\img\img-hero\Ellipse 3.png" alt="" />
          <img className='up-button' src="src\assets\img\img-hero\Ellipse 4.png" alt="" />
        </div>
        <div className='back-black'></div>
      </footer>
      
    </section>
    
  )
}

export default HeroPokemons