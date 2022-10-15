import React from "react";
import Cart from "../images/cart.png";

import "./Home.css";
export default function Header(props) {
  return (
    <div>

      <div className="card-wrapper">
        <img src={Cart} alt="Add to cart" />
        <span>{props.data.length}</span>
      </div>
    </div>
  );
}
