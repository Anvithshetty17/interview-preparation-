import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Prepify</h1>
      <div>
        <Link to="/">Home</Link>
      
      </div>
    </nav>
  );
};

export default Navbar;
