import './App.css'
import { Routes, Route } from 'react-router-dom'
import HeroPokemons from './components/HeroPokemons/HeroPokemons'
import Pokedex from './components/Pokedex/Pokedex'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import PokemonDetails from './components/Pokedex/Pokemon-Details/PokemonDetails'


function App() {

  return (
    <div className="App-container">
      
      <Routes>
        <Route path='/' element={<HeroPokemons />} />
        
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokemonDetails />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
