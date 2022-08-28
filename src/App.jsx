import './App.css'
import { Routes, Route } from 'react-router-dom'
import HeroPokemons from './components/HeroPokemons/HeroPokemons'
import Pokedex from './components/Pokedex/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'


function App() {

  return (
    <div className="App-container">
      
      <Routes>
        <Route path='/' element={<HeroPokemons />} />
        
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<h2>PokedexDetails</h2>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
