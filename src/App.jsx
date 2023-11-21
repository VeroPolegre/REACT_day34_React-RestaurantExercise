import React from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

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
    <div>
      <Header />
      <Home />
      {dishes.map(({ name, description, price }, index) => (
        <Menu key={index} name={name} description={description} price={price} />
      ))}
      <Contact />
    </div>
  );
}

export default App;
