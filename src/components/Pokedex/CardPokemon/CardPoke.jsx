import React, { useEffect, useState } from 'react'
import './cardpoke.css'
import axios from 'axios'

const CardPoke = ({url}) => {
    
    const [pokemon, setPokemon] = useState()

    useEffect(()=>{
        axios.get(url)
            .then(res => setPokemon(res.data) )
            .catch(err => console.log(err)) 

    },[])

   

  return (
    <article className='card'>
        <header className='card-header'>
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
                        <div>HP</div>
                        <div>50</div>
                    </div>
                    <div className='val-stat'>
                        <div>DEFENSE</div>
                        <div>50</div>
                    </div>
                </div>
                <div className='barra-up'>
                    <div  className='val-stat'>
                        <div>HP</div>
                        <div>50</div>
                    </div>
                    <div className='val-stat'>
                        <div >DEFENSE</div>
                        <div>50</div>
                    </div>
                </div>
          
            
            </div>
        </div>

    </article>
  )
}

export default CardPoke