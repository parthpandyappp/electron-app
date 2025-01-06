// App.js
import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Nav } from "./components";
import AppRoutes from "./Routes";

function App() {
  return (
    <Router className="App">
      <Nav />
      <AppRoutes />
    </Router>
  );
}

export default App;
