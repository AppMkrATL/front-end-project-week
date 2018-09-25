import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//React Router
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
