import React from 'react';
import './Register.css';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='register-wrapper'>
            <div className='register-cont'>
                    <h3 className='register-heading'>Register</h3>
                    {/* <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form> */}
                    <form class="">
                        <div class="mb-3">
                            <label class="form-label" for="firstName">First Name</label>
                            <input placeholder="example" type="text" name="firstName" id="firstName" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="lastName">Last Name</label>
                            <input placeholder="example" type="text" name="lastName" id="lastName" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="exampleForm.ControlInput1">Email address</label>
                            <input placeholder="name@example.com" type="email" id="exampleForm.ControlInput1" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="password">Password</label>
                            <input placeholder="password" type="password" name="password" id="password" class="form-control" />
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="confirmpassword">Confirm Password</label>
                            <input placeholder="password" type="password" name="confirmpassword" id="confirmpassword" class="form-control" />
                        </div>

                        <button className='register-btn' type="submit">Register</button>
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