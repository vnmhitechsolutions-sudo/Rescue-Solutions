import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import all page-level components
import Home from './components/Home.js';
import Careers from './components/Careers.js';
import Courses from './components/Courses.js';
import Terms from './components/Terms.js';
import Privacy from './components/Privacy.js';
import ScrollToTop from './components/ScrollToTop.js'; 

function App() {
  return (
    <div className="App">
      <ScrollToTop /> {/* Place the ScrollToTop component here */}
      <Routes>
        {/* The main page (Hero, About, Services, Contact) */}
        <Route path="/" element={<Home />} />
        
        {/* Anchor links that need specific components */}
        <Route path="/services" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />

        {/* New Pages */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy/>}/>
      </Routes>
    </div>
  );
}

export default App;