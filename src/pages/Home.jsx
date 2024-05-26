import React from "react";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../Footer";

const Home = () => {
  return <div className="pt-20">
    <Services/>
    <Contact/>
    <Footer/>
  </div>;
};

export default Home;
