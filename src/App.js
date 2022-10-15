import React from "react";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";

import HeaderClass from "./components/class/HeaderClass";
import HomeClass from "./components/class/HomeClass";
import "./App.css"
export default function App() {
  return (
    <div className="App">
      <h3>Functional Component</h3>
      <HeaderContainer />
      <HomeContainer />
      <hr />
      <br />

      <h3>Class Component</h3>
      <HeaderClass />
      <HomeClass />
    </div>
  );
}
