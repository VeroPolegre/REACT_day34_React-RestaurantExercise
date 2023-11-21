import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/menu">Menu</a>
      <a href="/contact">Contact</a>
    </nav>
  );
};

export default Navbar;
