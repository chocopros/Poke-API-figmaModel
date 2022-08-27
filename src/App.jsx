import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HeroPokemons from './components/HeroPokemons/HeroPokemons'

function App() {

  return (
    <div className="App-container">
    
      <Routes>
        <Route path='/' element={<HeroPokemons />} />

        <Route>
          <Route path='/pokedex' element={<h2>Pokedex</h2>} />
          <Route path='/pokedex/:id' element={<h2>PokedexDetails</h2>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App