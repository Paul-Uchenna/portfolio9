import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="relative z-30">
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
