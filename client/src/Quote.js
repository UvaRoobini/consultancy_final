import React, {useEffect,useState} from "react" //useEffect
import  axios from "axios"
import {IoMdContact} from "react-icons/io"
import emailjs from 'emailjs-com'
import {FiMail} from  "react-icons/fi"
import {RiLockPasswordLine} from "react-icons/ri"
import { useNavigate ,Link } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function Quote() {
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
    const templateID="template_rmbxovp";
    
    emailjs.send(serviceID,templateID,params,"AOX3mwxd7TpQMCe2I")
      .then((res)=>{
        //console.log(res);
        alert("Your message sent successfully");
    
      })
      .catch((err)=>console.log(err));
    } 
    
    
    
    
   
    return(
       <>
       <Navbar/>
       <div style={{marginTop:"35px",marginBottom:"35px", paddingLeft:"420px"}}>
  <div className="main">
    <div className="sub-main">
      <div className="login" style={{border:'2px solid black',width:"500px",height:"600px",alignItems:"center",padding:"100px"}}>
        <div className="img">
          <div className="container-image" style={{paddingLeft:"100px"}}>
            <IoMdContact size={100} color="rgb(175, 225, 175)" />
          </div>
          <h1 style={{paddingLeft:"80px", color: "rgb(50, 172, 109)"}}>QUERY</h1>
        </div>
        <br></br>
        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div>
            <input style={{border: '2px solid black', padding: '10px', borderRadius: '5px', marginBottom: '10px'}} 
                   onChange={(e) => {setname(e.target.value)}} placeholder="name" value={name}/>
          </div>

          <div>
            <input style={{border: '2px solid black', padding: '10px', borderRadius: '5px', marginBottom: '10px'}} 
                   onChange={(e) => {setemail(e.target.value)}} placeholder="email" value={email}/>
          </div>

          <div>
            <input style={{border: '2px solid black', padding: '10px', borderRadius: '5px', marginBottom: '10px'}} 
                   type="text" onChange={(e) => {setmessage(e.target.value)}} placeholder="Type your query" value={message}/>
          </div>

          <input className="button" style={{backgroundColor: 'rgb(175, 225, 175)', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer'}}
                 type="submit" onClick={(e) => SendMail(e)} value="Submit"/>
        </form>
      </div>
    </div>
  </div>
</div>

        <Footer/>
        </>
    )
}

export default Quote;
