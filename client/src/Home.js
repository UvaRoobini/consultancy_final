import React from "react";
import Navbar from './components/Navbar';
import CarouselComp from './components/CarouselComp';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
function Home() {
  return (
    <>
      <Navbar/>
      <CarouselComp/>
      <Homepage/>
      <Footer/>
    </>
  );
}

export default Home;
