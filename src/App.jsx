// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Footer from './Footer'
// import Contact from './Contact'
// import NavBar from './NavBar'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <NavBar/>
//     <Contact/>
//      {/* <Footer/> */}
//     </>
//   )
// }

// export default App



import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./Contact";
import Footer from "./Footer";
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="bg-image" > 
        <NavBar />
        {/* <Services/> */}
       
        <div className="pt-20">
          <Routes>
             <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/about" element={<About />} />
           
          </Routes>
        </div>
      
       <Footer/>
      </div>
    </Router>
  );
};

export default App;