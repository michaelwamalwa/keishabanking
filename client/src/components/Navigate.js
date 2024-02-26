import React, { useState } from "react";
import "./Navigate.css";

// Import the components for the content
import Login from "./Login"; // Adjust the path as necessary
import About from "./About"; // Adjust the path as necessary
import ContactUs from "./Contact"; // Adjust the path as necessary

export default function Navigate() {
    const [active, setActive] = useState("nav__menu");
    const [currentTab, setCurrentTab] = useState(""); // New state to track the current tab

    const navToggle = () => {
        setActive(active => active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    };

    const linkStyle = {
        textDecoration: 'none', 
        color: 'white', 
        fontSize: '14px', 
        alignItems: 'center', 
        gap: '1.5rem'
    };

    // Function to render the content based on the current tab
    const renderContent = () => {
        switch(currentTab) {
            case "login":
                return <Login />;
            case "about":
                return <About />;
            case "contact":
                return <ContactUs />;
            default:
                return <div>Select a tab to display its content here.</div>;
        }
    };

    return (
        <div className="page-container">
            <nav className="nav">
                <div style={linkStyle} className="brand">KEISHA BANKING</div>
                <ul className={active}>
                    <li  style={linkStyle} className="nav__item" onClick={() => setCurrentTab("login")}>JOIN US</li>
                    <li  style={linkStyle} className="nav__item" onClick={() => setCurrentTab("about")}>ABOUT US</li>
                    <li  style={linkStyle} className="nav__item" onClick={() => setCurrentTab("contact")}>CONTACT US</li>
                </ul>
                <button onClick={navToggle} className="nav-toggler" aria-label="Toggle navigation">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </button>
            </nav>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
}
