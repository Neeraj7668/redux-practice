import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./service/reducer/reducer";
const store = createStore(rootReducer);
// console.warn("index", store);
//
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
