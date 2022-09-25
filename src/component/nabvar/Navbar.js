import React from 'react';
import logo from './image.jpg'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className='header'>
            <img className='img' src={logo} alt="" />
            <div>
                <a href="">Shop</a>
                <a href="">Order</a>
                <a href="">Inventory</a>
                <a href="">About</a>
            </div>
        </nav>
    );
};

export default Navbar;