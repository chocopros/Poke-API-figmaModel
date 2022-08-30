import React, { useEffect, useState } from 'react'
import './cardpoke.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom' 

const CardPoke = ({url}) => {
    
    const [pokemon, setPokemon] = useState()

    const navigate = useNavigate()


    useEffect(()=>{
        axios.get(url)
            .then(res => setPokemon(res.data) )
            .catch(err => console.log(err)) 

    },[])

    

    const handleClick = () => navigate (`/pokedex/${pokemon.name}`)
        

    

  return (
    <article onClick={handleClick} className={`card card-${pokemon?.types[0].type.name}`}>
        <header className={`card-header bg-header-${pokemon?.types[0].type.name}`}>
            <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt={pokemon?.name} />
        </header>
        <div className='card-body'>
            <div className='title-pokemon'>
                <h2>{pokemon?.name}</h2>
                <h3>Type</h3>
                <ul className='list-type-pokemon'>
                    {
                        
                        pokemon?.types.map( slot => (
                            <li key={slot.type.url}>{slot.type.name}</li>
                            
                        ))
                    }
                </ul>
            </div>

            <div className='list-stat'>
                <div className='barra-up'>
                    <div className='val-stat'>
                        <div className='val-txt'>{pokemon?.stats[0].stat.name}</div>
                        <div className='val-num'>{pokemon?.stats[0].base_stat}</div>
                    </div>
                    <div className='val-stat'>
                        <div className='val-txt'>{pokemon?.stats[1].stat.name}</div>
                        <div className='val-num'>{pokemon?.stats[1].base_stat}</div>
                    </div>
                    <div className='val-stat'>
                        <div className='val-txt'>{pokemon?.stats[2].stat.name}</div>
                        <div className='val-num'>{pokemon?.stats[2].base_stat}</div>
                    </div>
                </div>
                <div className='barra-up'>
                    <div  className='val-stat'>
                        <div className='val-txt'>{pokemon?.stats[5].stat.name}</div>
                        <div className='val-num'>{pokemon?.stats[5].base_stat}</div>
                    </div>
                    <div  className='val-stat'>
                        <div className='val-txt'>{pokemon?.stats[3].stat.name}</div>
                        <div className='val-num'>{pokemon?.stats[3].base_stat}</div>
                    </div>
                    <div className='val-stat'>
                        <div className='val-txt'>{pokemon?.stats[4].stat.name}</div>
                        <div className='val-num'>{pokemon?.stats[4].base_stat}</div>
                    </div>
                </div>
          
            
            </div>
        </div>

    </article>
  )
}

export default CardPoke