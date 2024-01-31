import React, { useState,useEffect } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


function NavbarComponent(props) {

  const [user, setUser] = useState(props.user);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(()=> {
    toSetUser();

  }, [props.user])

  const toSetUser = ()=> {
    console.log("user in navbar=> ", user, typeof(user));
    if(props.user)
    {
      setLoggedIn(true)
    }
    else{
      setLoggedIn(false)
    }
    
    setUser(props.user);
  }

  const handleLogout = () => {
      setUser(null);
      localStorage.removeItem("logged-in-user");
      setLoggedIn(false);
  }

  return (
    <div className='navbar-container'>
      <div className='nav-width'>
        <Link to="/" className='logo'>
           SnapShop
        </Link>
        <div className='nav-buttons'>
        {
          isLoggedIn?
          (
            <>
            <button onClick={handleLogout} className='logout-button'>
              Logout
            </button>
            </>
          ):
          (<>
            <Link to="/login" className='login-button'>
              Login
            </Link>
            <Link to="/signup" className='signup-button'>
              Signup
            </Link>
            </>
          )
          
        }
            
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent