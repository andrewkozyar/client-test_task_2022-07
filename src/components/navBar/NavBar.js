import React from 'react'
import { NavLink } from 'react-router-dom'
import { MAIN_PAGE } from '../../utils/constants'
import './NavBar.scss'

export default function NavBar() {
  return (
    <div className='navBarBody'>
      <NavLink to={MAIN_PAGE} className='logo'>AppCo</NavLink>
    </div>
  )
}
