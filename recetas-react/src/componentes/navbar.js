import React from 'react';
import './navbar.css'; 
import logo from "../img/logo.jpg"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-name">Hoy Cocino Yo</span>
      </div>
      <div className="right-section">
        <ul className="menu">

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
