import React from 'react'
import './pokedex.css'

const Pokedex = () => {
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
            <h2 className='title-trainer'><span>Nombre del Jugador </span>, aquí podrás encontrar tu pokemón favorito.</h2>
            <div className="filter-pokemon">
                <form className='input-trainer-pokemons'>
                    <input type="text" />
                    <button> Buscar</button>
                    
                </form>
                <select className='selector' name="class-pokemons" id="class">
                    <option value="normal">Normal</option>
                    <option value="Luchador">Luchador</option>
                    <option value="Venenoso">Venenoso</option>
                    <option value="Terrestre">Terrestre</option>
                    <option value="Insecto">Insecto</option>
                    <option value="Fantasma">Fantasma</option>
                </select>
            </div>
        </div>

    </section>
  )
}

export default Pokedex