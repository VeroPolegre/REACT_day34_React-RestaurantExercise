import React from "react";
import "./Menu.css";

const Menu = (props) => {
  return (
    <div className="DishCard">
      <span className="dishName">{props.name}</span>
      <p className="dishDescription">{props.description}</p>
      <p className="dishPrice">${props.price}</p>
    </div>
  );
};

export default Menu;
