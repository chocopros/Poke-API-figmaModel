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
          <img src="https://i.ibb.co/fXhRhyF/image-logo.png" alt="Logo-pokedex" />
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
          <img className='back-button' src="https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fdmonroy-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!WhY8MwbTfkKcv-N9sOaGBV8BdC9VgpRKv6m0ZMYUyoTj6eMAQNwlSoQSUjM3ctPo%2Fitems%2F01RRHQARZWELHYDWRTPREIE6UYQ42GRH25%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZG1vbnJveS1teS5zaGFyZXBvaW50LmNvbUBiYzkzZDJlNi0yNjcwLTRiNDQtYjdlOC04NDAzNDY5MDU3NjYiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjYxOTkwNDAwIiwiZXhwIjoiMTY2MjAxMjAwMCIsImVuZHBvaW50dXJsIjoiYUF2cHhhbnBRMmxSeEJySFlPclluK2h3T1dVTVNoZ2k1ajUxa2JvWUt3UT0iLCJlbmRwb2ludHVybExlbmd0aCI6IjExNyIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik16TXpZekUyTldFdFpETXdOaTAwTWpkbExUbGpZbVl0WlRNM1pHSXdaVFk0TmpBMSIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8dGVjaG5vbG9neUBqZG1ncm91cGNvbXBhbnkuY29tIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDBkNDk2NjhkN0BsaXZlLmNvbSIsInNpZCI6Ijg3M2FhNDMyLTNmOGUtNDI2ZS1iZmVmLTE3ODlkYzA5MTA4ZSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIzIiwiaXBhZGRyIjoiMjAwLjQ0LjI0MC41OCJ9.MXE5MVFFU00xbE9kQ3hibVdHZHZBOC9yMlZhbzBNOGpxR1htd0xrdkZhZz0&cTag=%22c%3A%7B81CF2236-33DA-487C-827A-988734689F5D%7D%2C1%22&encodeFailures=1&width=117&height=117&srcWidth=117&srcHeight=117" alt="" />
          <img className='up-button' src="https://i.ibb.co/gRw02Jv/Ellipse-4.png" alt="" />
        </div>
        <div className='back-black'></div>
      </footer>
      
    </section>
    
  )
}

export default HeroPokemons