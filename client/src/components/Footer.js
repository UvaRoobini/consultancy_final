import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="main-footer" style={{backgroundColor: '#e5f4ea'}}>
  <div className="container">
    <div className="row">
      {/* Column1 */}
      <div className="col-md-4 mb-3">
        <h4 style={{color:"#003300"}}>Warriors Power System</h4>
        <ul className="list-unstyled">
          <li><p><i className="fas fa-map-marker-alt mr-2"></i>No 15 Warrior House, Bharathidhasan Street Teachers Colony, Collectorate, Erode - 638011</p></li>
        </ul>
      </div>
      {/* Column2 */}
      <div className="col-md-4 mb-3">
        <h4 style={{color:"#003300"}}>Timings</h4>
        <ul className="list-unstyled">
          <li><p><i className="fas fa-clock mr-2"></i>Mon - Sat  Open 24 Hrs</p></li>
          <li><p><i className="fas fa-clock mr-2"></i>Sun Closed - Closed</p></li>
        </ul>
      </div>
      {/* Column3 */}
      <div className="col-md-4 mb-3">
        <h4 style={{color:"#003300"}}>Contact Us</h4>
        <ul className="list-unstyled">
          <li><p><i className="fas fa-envelope mr-2"></i>warriorspowersystem@gmail.com</p></li>
          <li><p><i className="fas fa-phone mr-2"></i>000-000-000-000</p></li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row" style={{alignItems:"baseline"}}>
      <p className="col-sm" style={{color:"#003300"}}>
        &copy;{new Date().getFullYear()} WARRIORS POWER SYSTEM | All rights reserved |
        <a href="/" style={{color:"#003300"}}> Terms Of Service</a> | <a href="/" style={{color:"#003300"}}>Privacy</a>
      </p>
    </div>
  </div>
</div>

  );
}

export default Footer;