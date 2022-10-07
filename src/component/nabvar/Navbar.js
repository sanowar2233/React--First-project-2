import React from 'react';
import { Link } from 'react-router-dom';
import logo from './image.jpg'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='header'>
            <img className='img' src={logo} alt="" />
            <div>
              <Link to='/shop'>Shop</Link>
              <Link to='/inventory'>Inventory</Link>
              <Link to='/about'>About</Link>
              <Link to='/order'>Order</Link>
            </div>
        </nav>
    );
};

export default Navbar;