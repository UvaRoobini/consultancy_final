import React from "react";
import './../Styles/AboutUs.css';
import solar5 from '../images/solar5.jpg';
import {Link} from 'react-router-dom';
import imgg from '../images/prosandconsimg.jpeg'
import aboutusimg from '../images/aboutusimg.jpg';
function ContactUs() {
  return (
    <div>
      <div class="about">
      <img className="animated-image " src={aboutusimg} alt="img"/>
        <div class="inner-section">
            <h1><bold>About Us</bold></h1>
            <p class="text">
            Warriors Power System is a green energy solutions provider founded by professional consultants from energy, management and marketing fields. Driven by a passion for green energy, the founders merged their strengths and combined experience of more than 30 years to become a leading provider of affordable, innovative and high quality renewable energy solutions in India.
            </p>
            <div class="skills">
                <Link to="/contactus"><button>Contact Us</button></Link>
            </div>
        </div>
    </div>
    </div>
  );
}

export default ContactUs;