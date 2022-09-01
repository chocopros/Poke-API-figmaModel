import React from 'react'
import './StatsDetails.css'

const StatsDetails = ({pokemon}) => {

  return (
    <div className='stats-container'>
        <h2>Stats</h2>
        <ul className='list-val-stats'>
            <li>
                <h3>HP</h3>
                <div>BArra</div>
            </li>
            <li>
                <h3>Ataque</h3>
                <div>BArra</div>
            </li>
            <li>
                <h3>Defensa</h3>
                <div>BArra</div>
            </li>
            <li>
                <h3>Veloccidad</h3>
                <div>BArra</div>
            </li>

        </ul>

    </div>
  )
}

export default StatsDetails