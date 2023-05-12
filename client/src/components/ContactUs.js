import React from "react";
import "../Styles/ContactUs.css";
import emailjs from 'emailjs-com';
import { useState} from "react";
import { useNavigate } from "react-router-dom";


function ContactUs() {
    const [name,setname]=useState("");
    const [message,setmessage]=useState("");
    const [email,setemail]=useState("");
    const history=useNavigate();
    const SendMail=(e)=>
    {
        e.preventDefault();
        const params={
            name:name,
            email:email,
            message:message
        };
    console.log(params);
    const serviceID="service_mg4f3z9";
    const templateID="template_8xej0ig";
    
    emailjs.send(serviceID,templateID,params,"AOX3mwxd7TpQMCe2I")
      .then((res)=>{
        //console.log(res);
        alert("Your message sent successfully");
    
      })
      .catch((err)=>console.log(err));
    } 
    
    
  return (
    <div>
        <section class="contact"> 
           <div class="content">
            <h2>Contact Us</h2>
            <h4>Enjoy Solar Energy Today, and Help People of Tomorrow</h4>
          </div>
          <div class="container">
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"></div>
                    <div class="text">
                        <h3>Address</h3>
                        <p style={{color:"black",fontSize:"25px"}}>No 15 Warrior House, <br></br>Bharathidhasan Street Teachers Colony,<br></br> Collectorate, Erode - 638011</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"> </div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p style={{color:"black",fontSize:"25px"}}>0000000000</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"> </div>
                    <div class="text">
                        <h3>E-Mail</h3>
                        <p style={{color:"black",fontSize:"25px"}}>warriorspowersystem@gmail.com</p>
                    </div>
                </div>
            </div>
            {/* <div class="contactForm">
                <form>
                    <h2>Send Message</h2>
                    <div class="inputBox">
                        <input type="text" name="" required="required"></input>
                        <span>Full Name</span>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" required="required"></input>
                        <span>Email</span>
                    </div>
                    <div class="inputBox">
                        <textarea required="required"></textarea>
                        <span>Type your Message...</span>
                    </div>
                    <div class="inputBox">
                        <input type="submit" name=""  value="send"></input>
                    </div>
                </form>
            </div> */}
            <div className="main">
  <div className="sub-main" style={{ border: '2px solid black', width: "450px", height: "550px", alignItems: "center", padding: "50px",backgroundColor: "#f0f0f0" }}>
    <div className="login">
      <h1 style={{ paddingLeft: "60px" }}>Feedback</h1>

      <br></br>
      <form>
        <div>
          <input style={{ border: '2px solid black', width: "100%" }} onChange={(e) => { setname(e.target.value) }} placeholder="Name" value={name} />
        </div>
        <br></br>
        <div>
          <input style={{ border: '2px solid black', width: "100%" }} onChange={(e) => { setemail(e.target.value) }} placeholder="Email" value={email} />
        </div>
        <br></br>

        <div>
          <input style={{ border: '2px solid black', width: "100%" }} type="text" onChange={(e) => { setmessage(e.target.value) }} placeholder="Type your feedback" value={message} />
        </div>
        <br></br>

        <input className="button" style={{ border: '2px solid black', width: "100%" }} type="submit" onClick={(e) => SendMail(e)} />

      </form>
    </div>
  </div>
</div>


        </div>

        </section>
        <iframe style={{marginTop:20,width:"100%",height:400}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7824.095560534445!2d77.69525619357911!3d11.331218400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f74ebbdfbcb%3A0xed4ed8c43b70a8ab!2sWarrior%20power%20system!5e0!3m2!1sen!2sin!4v1683823999381!5m2!1sen!2sin" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    );
}

export default ContactUs;