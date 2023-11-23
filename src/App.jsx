import React from "react";
import "./App.css";
import Header from "./pages/Header/Header";
import Menu from "./pages/Menu/Menu";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const dishes = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    description: "Classic Italian dish with savory meat sauce over pasta.",
    price: 12.99,
  },
  {
    id: 2,
    name: "Grilled Salmon",
    description: "Freshly grilled salmon fillet with lemon and herbs.",
    price: 18.99,
  },
  {
    id: 3,
    name: "Vegetarian Stir-Fry",
    description: "Assorted vegetables stir-fried in a flavorful sauce.",
    price: 14.99,
  },
];

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {dishes.map(({ name, description, price }, index) => (
          <Menu
            key={index}
            name={name}
            description={description}
            price={price}
          />
        ))}
      </Router>
    </>
  );
}

export default App;
