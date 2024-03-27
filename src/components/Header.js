import React from 'react';
import Logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
    <Link className='logo' to="/">
      <img src={Logo} alt="Routemate logo" />
      <span>Routemate</span>
    </Link>
    <nav className='navigation'>
      <NavLink to="/" className="link" end>Home</NavLink>
      <NavLink to="/products" className="link" end>Products</NavLink>
      <NavLink to="/contact" className="link">Contact</NavLink>
    </nav>

    </header>
  )
}
