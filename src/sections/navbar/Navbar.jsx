import React from 'react';
import Logo from '../../assests/logo.jpg'
import data from './data';
import './navbar.css';
import { links } from './../footer/data';



const Navbar = () => {
 
  return (
    <nav>
      <div className="container nav__container" >
        <div className='logo'>
        <a href="index.html" className='nav__logo '>
          <img src={Logo} alt="Logo" />
          </a>
          <div className='nav__text'>
          <h4>Project</h4>
          <h2>Assistant</h2>
          <p>Development | Service | Consultancy</p>
          </div>
          </div>
         
        <ul className="nav__menu">
          {
             data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button className='btnm' href><a href="#services">Get Started</a></button>
      </div>
    </nav>
  )
}

export default Navbar;