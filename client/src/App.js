import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Navigate  from './components/Navigate.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Dashboard from './components/Dashboard.js';


function App() {
  return (
   <>
   <BrowserRouter> 
   <Routes>
    <Route exact path="/" element={<Navigate />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/signup" element={<Signup />} />
    <Route exact path="/dashboard" element={<Dashboard />} />

   </Routes>
   
   </BrowserRouter>
   </>
  
  );
}

export default App;
