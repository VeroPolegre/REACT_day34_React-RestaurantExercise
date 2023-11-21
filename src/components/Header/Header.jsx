import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="page-header">
      <h1>Restaurante Ambulante</h1>
      <Navbar />
    </header>
  );
};

export default Header;
