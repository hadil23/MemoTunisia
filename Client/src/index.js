import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// initializ redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import "./index.css";

// intialliase store from configure store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// connecting to the div with an id of root
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
