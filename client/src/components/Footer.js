import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4 style={{color:"black"}}>Warriors Power System</h4>
            <h1 className="list-unstyled">
              <li><h5>No 15 Warrior House,</h5></li>
              <li><h5>Bharathidhasan Street Teachers Colony,</h5></li>
              <li><h5> Collectorate, Erode - 638011</h5></li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4 style={{color:"black"}}>Timings</h4>
            <ui className="list-unstyled">
              <li>Mon - Sat  Open 24 Hrs</li>
              <li> Sun Closed - Closed</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 style={{color:"black"}}>EMAIL</h4>
            <ui className="list-unstyled">
              <li>warriorspowersystem@gmail.com</li>
              <li><h4 style={{color:"black"}}>PHONE NUMBER</h4></li>
              <li>000-000-000-000</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row" style={{alignItems:"baseline"}}>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} WARRIORS POWER SYSTEM | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;