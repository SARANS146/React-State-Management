import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='nav-links'>
        <NavLink to='/car'>Car</NavLink>
        <NavLink to='/truck'>Truck</NavLink>
        <NavLink to='/bike'>Bike</NavLink>
      </div>
    </div>
  )
}

export default NavBar
