import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
