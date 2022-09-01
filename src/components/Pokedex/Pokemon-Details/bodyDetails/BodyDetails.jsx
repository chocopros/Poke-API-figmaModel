import React from 'react'
import './bodyDetails.css'

const BodyDetails = ({pokemon}) => {
  return (
      <div className='body-details'>
          <h2>#{pokemon?.id}</h2>
          <h1 className='title-namePokemon'>{name}</h1>

          <ul className='list-propeps-poke'>
              <li>
                  <h3>Peso</h3>
                  <div>{pokemon?.weight}</div>
              </li>
              <li>
                  <h3>Altura</h3>
                  <div>{pokemon?.height}</div>
              </li>
          </ul>

          <div className="typeHabi-Container">

              <div className='type-habilitys'>
                  <div className='details-midle'>
                      <h2>Tipo</h2>
                      <div className='details-type-hability'>
                          {
                              pokemon?.types.map(type => (

                                  <div className='type-option'><h3>{type.type.name}</h3></div>

                              ))
                          }
                      </div>
                  </div>

                  <div className='details-midle'>
                      <h2>Habilidades</h2>
                      <div className='details-type-hability'>
                          {
                              pokemon?.abilities.map(ability => (

                                  <div className='type-option'><h3>{ability.ability.name}</h3></div>

                              ))

                          }
                      </div>
                  </div>
              </div>
          </div>

  </div>
  )
}

export default BodyDetails