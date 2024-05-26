

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./Footer";
import './App.css';
import ContanctPage from "./pages/ContanctPage";
import ServicePage from "./pages/ServicePage";
import ThankYou from "./pages/Thanks";


const App = () => {
  return (
    <Router>
      <div className="bg-image" > 
        <NavBar />
        {/* <Services/> */}
       
        <div className="pt-16">
          <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContanctPage />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/thank-you" element={<ThankYou />} />
           
          </Routes>
        </div>
      
       {/* <Footer/> */}
      </div>
    </Router>
  );
};

export default App;