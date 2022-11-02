import React from 'react'
import Logo from '../../img/logo.png'
import './Logosearch.css'

function Logosearch() {
  return (
    <div className="Logosearch">
        <img src={Logo} alt="Logo" />
        <div className='search'>
            <input type="text" placeholder='#Explore' />
            <div className='icon'>
                search
            </div>
        </div>
    </div>
  )
}

export default Logosearch