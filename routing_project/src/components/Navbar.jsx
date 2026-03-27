import React from 'react' 

import {NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>Dashboard</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
