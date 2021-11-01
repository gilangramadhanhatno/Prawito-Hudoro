import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "../Dashboard";
import Register from "../Register";
import Login from "../Login";

// import logo from "../../../assets/img/logo/logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default App;
