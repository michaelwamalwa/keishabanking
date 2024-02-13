import React, { useState } from 'react';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import './Signup.css';


export default function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
  });
  const navigate = useNavigate();
  const [registerStatus, setRegisterStatus] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/register", formData )
    .then(res => {
      if(res.data.message) {
        setRegisterStatus(res.data.message);
      } else {
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
        navigate('/login');
      }
    })
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Perform registration logic with the form data
      console.log(formData);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.firstname.trim()) {
      errors.firstname = 'First name is required';
    }

    if (!formData.lastname.trim()) {
      errors.lastname = 'Last name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.confirmpassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Use a regular expression or any other validation logic to check email validity
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
         <div className="my-5 gradient-form">
          <div className='row'>
        <form className="register-form" onSubmit={handleSubmit}>
            <div className='col-6 mb-5'>
              <div className="d-flex flex-column ms-5"> 
                <div className="text-center">
                   <img src={logo}
                     style={{ width: '185px' }} alt="logo" />
                     </div>
             <p>SIGNUP HERE</p>

          <input
            className="mb-4"
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          {formErrors.firstName && (
            <span className="error-message">{formErrors.firstname}</span>
          )}
       
       
          <input
            className="mb-4"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
          {formErrors.lastName && (
            <span className="error-message">{formErrors.lastname}</span>
          )}
        
        
          <input
            className="mb-4"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formErrors.email && (
            <span className="error-message">{formErrors.email}</span>
          )}
        
        
          <input
            className="mb-4"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {formErrors.password && (
            <span className="error-message">{formErrors.password}</span>
          )}
       
          <input
            className="mb-4"
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={formData.confirmpassword}
            onChange={handleChange}
            required
          />
          {formErrors.confirmPassword && (
            <span className="error-message">{formErrors.confirmpassword}</span>
          )}

        <div className="text-center pt-1 mb-5 pb-1">
          <button className='mx-2 btn-outline-danger' type="submit">REGISTER</button>
          </div>

        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
        <p className="mb-0">Already have an account?</p>
            <button className='mx-2 btn-outline-danger'>
               <Link style={{ textDecoration: 'none', color: 'white', fontSize: '14px', alignItems: 'center', gap: '1.5rem' }} to="/login">LOGIN</Link> 
               </button>
             </div>
           </div>
          </div>
      </form>
      <div className="col-6 mb-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">Benefits of Joining us?</h4>
                <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
              </div>
            </div>
          </div>
    </div>
    </div>
  );
}
