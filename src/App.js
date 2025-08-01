import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div>Default</div>} />
          <Route path="/home" element={<div>Home</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
