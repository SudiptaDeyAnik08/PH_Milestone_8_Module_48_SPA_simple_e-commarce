import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/Orders">Order</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/About">About</Link>
            </div>
        </nav>
    )
}

export default Header;