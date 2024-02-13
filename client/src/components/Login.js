import React, { useState } from "react";

import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Login.css';
import {Link} from "react-router-dom"
import logo from '../images/logo.png'

export default function Login () {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [loginStatus, setLoginStatus] = useState("");
  const [loginErrors, setLoginErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
  setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    //Make a POST request to the login endpoint
    axios.post("http://localhost:8080/api/login", loginData)
    .then(res => {
      if(res.data.message) {
        setLoginStatus(res.data.message)
      } else {
       navigate('/dashboard')
      }
    })
    const errors = validateForm();
    if(Object.keys(errors).length === 0) {
      //Perform login logic with the form data
      console.log(loginData);
    } else {
      setLoginErrors(errors);
    }
  };

  const validateForm = () => {
    let errors= {};
    if(!loginData.email.trim()) {
      errors.email = "Email is Required";
    } else if (!isValidEmail(loginData.email)) {
      errors.email = "Invalid Email Address"
    }
    if (!loginData.password.trim()) {
      errors.password = "Password is Required";
    }
    
    return errors;
  };
  const isValidEmail = (email) => {
    //use a regular validation or any other vlidation logic to check email validity
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

    return (
        <div className="my-5 gradient-form">
        <div className="row">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="col-6 mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img src={logo}
                  style={{ width: '185px' }} alt="logo" />
              </div>
              <p>LOGIN HERE</p>
              
              <input
               className="mb-4"
               type="email" 
               name="email"
               placeholder="Email address" 
               value={loginData.email}
               onChange={handleChange}
               required
               />
               {loginErrors.email && (
                <span className="error-message">{loginErrors.email}</span>
               )}
              <input
                className="mb-4"
                type="password"
                name="password"
                placeholder="Password" 
                value={loginData.password}
                onChange={handleChange}
                required
                />
                {loginErrors.password && (
                  <span className="error-message">{loginErrors.password}</span>
                )}

              <div className="text-center pt-1 mb-5 pb-1">
                <button className="mx-2 btn-outline-danger" type="submit">LOGIN HERE</button>
              </div>
              
              <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">Don't have an account?</p>
                <button className='mx-2 btn-outline-danger'>
                    <Link style={{ textDecoration: 'none', color: 'white', fontSize: '14px', alignItems: 'center', gap: '1.5rem' }} to="/signup">SIGN UP</Link> 
                </button>
              </div>  
            </div>
          </div>
        </form>
          <div className="col-6 mb-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">We are more than just a company</h4>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}