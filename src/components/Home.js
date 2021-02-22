import React, { useState } from "react";
import Mobile from "../images/mobile.png";
import "./Home.css";
const Home = (props) => {
  console.warn("Home", props);
  const [username, setName] = useState("");
  return (
    <div>
      <div className="cart-wrapper">
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
              props.addToCartHandler({
                price: 10000,
                name: "Vivo",
                username: username,
              })
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
      <form>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button
          className="addBtn"
          onClick={() => props.addToCartHandler({ username })}
        >
          Submit
        </button>
      </form>
      {username}
    </div>
  );
};

export default Home;
