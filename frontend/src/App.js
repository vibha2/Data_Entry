import './App.css';
import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NavbarComponent from '../src/components/commons/Navbar/Navbar';
import HomePage from '../src/components/pages/HomePage/HomePage.jsx';
import AllData from '../src/components/pages/AllData/AllData';
import Login from '../src/components/pages/login/Login.jsx';
import Signup from '../src/components/pages/register/Register.jsx';
import Footer from '../src/components/commons/Footer/Footer.jsx';
import UserHome from './components/pages/UserHome/UserHome.jsx';
import AdminHome from './components/pages/AdminHome/AdminHome.jsx';
import PrivateRoute from './components/pages/PrivateRoute/PrivateRoute.jsx';

function App() {

  const [user, setUser] = useState(localStorage.getItem("logged-in-user"));
  const navigate = useNavigate();

  useEffect( ()=> {
    const checkUser = ()=> {
      const storedUser = localStorage.getItem("logged-in-user");
      console.log("useer=> ", user);

      if (storedUser !== user) {
        setUser(storedUser);
        if (storedUser === null) {
          navigate("/");
        }
      }
  };
  // Set up an interval to check localStorage periodically
  const intervalId = setInterval(checkUser, 100); // Check every second, adjust as needed

  // Clean up the interval on component unmount
  return () => clearInterval(intervalId);
}, [user]);

  return (
    <div className="body">
      <NavbarComponent user={user} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/home/:userId" element={<UserHome />} /> */}
       
        {/* <PrivateRoute path="/user" roles={["Member"]}  element={<UserHome />} />
        <PrivateRoute path="/admin" roles={["Admin"]}  element={<AdminHome />} /> */}

        <Route path="/user" element={<UserHome />} />
        <Route path="/admin"  element={<AdminHome />} />

        <Route path="/list" element={<AllData/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer /> 

    </div>
  );
}

export default App;
