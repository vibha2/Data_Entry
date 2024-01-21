import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarComponent from '../src/components/commons/Navbar/Navbar';
import HomePage from '../src/components/pages/HomePage/HomePage.jsx';
import AllData from '../src/components/pages/AllData/AllData';
import Login from '../src/components/pages/login/Login.jsx';
import Signup from '../src/components/pages/register/Register.jsx';

function App() {
  return (
    <div className="body">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/list" element={<AllData/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
