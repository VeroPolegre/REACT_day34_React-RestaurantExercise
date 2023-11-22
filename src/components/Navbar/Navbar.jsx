import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
