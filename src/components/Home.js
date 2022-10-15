import React from "react";
import Mobile from "../images/mobile.png";
import "./Home.css";
const Home = (props) => {
  return (
    <div>
      <div className="cart-wrapper">
        <h6>Functional Component</h6>

        <div className="img-wrapper item">
          <img src={Mobile} alt="vivo" />
        </div>
        <div className="text-wrapper item">
          <span>Vivo</span>

          <span> Price: Rs.10000</span>
        </div>
        <div className="btn-wrapper item">
          <button
            className="addBtn"
            onClick={() =>
              props.addToCartHandler({ price: 10000, name: "Vivo" })
            }
          >
            Add to Cart
          </button>
          <button
            className="removeBtn"
            onClick={() => props.removeToCartHandler()}
          >
            Remove to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
