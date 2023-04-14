import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {

  const accueil = 'Accueil';
  const apropos = 'A Propos';

  return (
    <nav className='barre_navigation'>
      <NavLink to='/' className="menuItem">{accueil}</NavLink>
      <NavLink to='/apropos/' className="menuItem">{apropos}</NavLink>
    </nav>
  )


}

export default Navbar