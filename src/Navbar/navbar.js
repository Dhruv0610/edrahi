import React from 'react';
import logo from '../images/logo.jpg';
import './navbar.css';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <img src={logo} className='navbar-logo' alt='logo'></img>
        </div>
     );
}
 
export default Navbar ;