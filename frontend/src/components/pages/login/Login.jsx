import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import  AuthService  from '../../../services/AuthService';

function Login() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  });

  const handleChange =(e) => {
    setFormData({...formData, 
      [e.target.name] : e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(formData.email, formData.password).then(
      (res) => {
        console.log("response after login=> ", res);
        localStorage.setItem("logged-in-user", res.data.user._id);
        navigate(`/home/${res.data?.user?._id}`);

      },
      (err) => {
        console.log("err =>", err);
        // setError(true);
      }
    )

  }
  return (
    <div className='login-wrapper'>
         <div className='login-cont'>
            <h3 className='login-heading'>Login</h3>
                <form class="" onSubmit={handleSubmit} >
                        <div class="mb-3">
                            <label class="form-label" for="exampleForm.ControlInput1">Email address</label>
                            <input 
                            placeholder="name@example.com" 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            id="exampleForm.ControlInput1" 
                            class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="password">Password</label>
                            <input 
                            placeholder="password" 
                            type="password" 
                            name="password" 
                            value={formData.password}
                            onChange={handleChange}
                            id="password" 
                            class="form-control" />
                        </div>

                        <button className='login-btn' type="submit">Login</button>
                        <br/>
                        <hr />
                        <div>
                             Not a member?
                             <br/>
                             <Link to="/signup" className="sign-up-cta">Create a new account</Link>
                        </div>

                        
                    </form>
         </div>
    </div>
  )
}

export default Login