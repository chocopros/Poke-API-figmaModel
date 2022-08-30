import React from 'react'
import './HeaderPoke.css'

const HeaderPoke = () => {
  return (
      <header className='header-Pokedex'>
          <div className='logo-pokedex'>
              <img src="src\assets\img\LOGO.svg" alt="" />
          </div>
          <div className='black-line'>
              <div className="closet-ball">
                  <img src="src\assets\img\img-pokedex\Ellipse 3.png" alt="" />
                  <img className='ball-point' src="src\assets\img\img-pokedex\Ellipse 4.png" alt="" />
              </div>
          </div>
      </header>
  )
}

export default HeaderPoke