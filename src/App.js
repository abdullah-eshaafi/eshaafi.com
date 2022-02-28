import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Privacy from "./Pages/Privacy";
import Terms from "./Pages/Terms";
import FAQ from "./Pages/FAQ";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
