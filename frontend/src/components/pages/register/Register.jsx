import React, { useState } from 'react';
import './Register.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AuthService from '../../../services/AuthService';


function Register() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    
    const Navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({...formData, [e.target.name]: [e.target.value]});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        console.log("authservice=> ", AuthService);
        AuthService.signUp(formData).then( (res) => {
            setLoading(false);
            console.log("check=> ", res.data);
            Navigate('/');
        },(err) =>{
            //console.log("Err =>", err);
            console.log(err.response.data.message);
            setLoading(false);
        });

    }

  return (
    <div className='register-wrapper'>
            <div className='register-cont'>
                    <h3 className='register-heading'>Register</h3>
                    <form onSubmit={handleSubmit} class="">
                        <div class="mb-3">
                            <label class="form-label" for="firstName">First Name</label>
                            <input 
                                placeholder="example" 
                                type="text" 
                                name="firstName" 
                                id="firstName" 
                                class="form-control" 
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="lastName">Last Name</label>
                            <input 
                                placeholder="example" 
                                type="text" 
                                name="lastName" 
                                id="lastName" 
                                class="form-control"
                                value={formData.lastName}
                                onChange={handleChange}
                             />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="exampleForm.ControlInput1">Email address</label>
                            <input 
                                placeholder="name@example.com" 
                                type="email" 
                                name="email"
                                id="exampleForm.ControlInput1" 
                                class="form-control" 
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="password">Password</label>
                            <input 
                                placeholder="password" 
                                type="password" 
                                name="password" 
                                id="password" 
                                class="form-control"
                                value={formData.password}
                                onChange={handleChange}
                             />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="confirmpassword">Confirm Password</label>
                            <input 
                                placeholder="password" 
                                type="password" 
                                name="confirmPassword" 
                                id="confirmpassword" 
                                class="form-control"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                             />
                        </div>

                        {
                            isLoading? 
                            (
                                <div className="spinner"></div>
                            ):
                            (
                                <button className='register-btn' type="submit">Register</button>
                            )
                        }
                        
                        <br/>
                        <hr />
                        <div>
                             Already an existing member?
                             <br/>
                             <Link to="/login" className="sign-up-cta">Login</Link>
                        </div>

                        {/* <div class="mb-3">
                            <label class="form-label" for="exampleForm.ControlTextarea1">Example textarea</label>
                            <textarea rows="3" id="exampleForm.ControlTextarea1" class="form-control"></textarea>
                        </div> */}
                    </form>
            </div>
    </div>
  )
}

export default Register