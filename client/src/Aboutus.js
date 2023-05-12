import React from "react";
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Aboutus() {
  return (
    <React.Fragment>
        <Navbar/>
      <AboutUs/>
      <Footer/>
    </React.Fragment>
    
  );
}

export default Aboutus;