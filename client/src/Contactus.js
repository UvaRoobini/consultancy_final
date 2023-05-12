import React from "react";
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function Contactus() {
  return (
    <React.Fragment>
        <Navbar/>
      <ContactUs/>
      <Footer/>
    </React.Fragment>
    
  );
}

export default Contactus;