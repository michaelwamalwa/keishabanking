import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./Navigate.css";
export default function Navigate () {
    const [active, setActive] = useState("nav__menu");
    const navToggle = () => {
        active === "nav__menu"
        ? setActive("nav__menu nav__active")
        : setActive("nav__menu");
    }
    return(
        <>
        <nav className="nav">
          <div style={{ textDecoration: 'none', color: 'white', fontSize: '14px', alignItems: 'center', gap: '1.5rem' }} className="brand">KEISHABE BANKING</div>
          <ul className= {active}>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '14px', alignItems: 'center', gap: '1.5rem' }} to="/">HOME</Link><li className="nav__item"></li>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '14px', alignItems: 'center', gap: '1.5rem' }} to="/login">JOIN US</Link><li className="nav__item"></li>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '14px', alignItems: 'center', gap: '1.5rem' }} to="/about">ABOUT US</Link><li className="nav__item"></li>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '14px', alignItems: 'center', gap: '1.5rem' }} to="/contact">CONTACT US</Link><li className="nav__item"></li>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '14px', alignItems: 'center', gap: '1.5rem' }} to="/services">OUR SERVICES</Link><li className="nav__item"></li>
            <Link style={{ textDecoration: 'none', color: 'white', fontSize: '14px', alignItems: 'center', gap: '1.5rem' }} to="/team">MEET THE TEAM</Link><li className="nav__item"></li>
          </ul>
          <div onClick={navToggle} className="nav-toggler">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        </>
    )
}