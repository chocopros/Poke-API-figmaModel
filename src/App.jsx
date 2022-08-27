import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HeroPokemons from './components/HeroPokemons/HeroPokemons'

function App() {

  return (
    <div className="App-container">
    
      <Routes>
        <Route path='/' element={<HeroPokemons />} />

      </Routes>
    </div>
  )
}

export default App
