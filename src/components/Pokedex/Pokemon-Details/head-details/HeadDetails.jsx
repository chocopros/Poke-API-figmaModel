import React from 'react'
import './headdetails.css'

const HeadDetails = ({pokemon}) => {
  return (
    <header className='head-details'>
        <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt={pokemon?.name} />
    </header>
  )
}

export default HeadDetails