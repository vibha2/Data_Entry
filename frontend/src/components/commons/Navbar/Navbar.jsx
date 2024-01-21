import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


function NavbarComponent() {
  return (
    <div className='navbar-container'>
      <div className='nav-width'>
        <Link to="/" className='logo'>
           SnapShop
        </Link>
        <div className='nav-buttons'>
            <Link to="/login" className='login-button'>
              Login
            </Link>
            <Link to="/signup" className='signup-button'>
              Signup
            </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent