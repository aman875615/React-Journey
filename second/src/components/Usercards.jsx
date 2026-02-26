import React from 'react'
import './Usercards.css'
import lord_krishana from '../assets/lord_krishana.jpeg'
const Usercards = () => {
  return (
    <div>
      <div className='user-container'>
        <p id='user-name'>Krishna</p>
        <img id='user-img' src={lord_krishana} alt="aman" />
        <p id='user-desc'>description</p>
      </div>
    </div>
  )
}

export default Usercards
