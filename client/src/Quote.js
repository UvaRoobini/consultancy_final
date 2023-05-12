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
            
        <div className="main" >
        <div className="sub-main">
        <div className="login"  style={{border:'2px solid black',width:"500px",height:"600px",alignItems:"center",padding:"100px"}}>
            <div className="img">
                <div className="container-image" style={{paddingLeft:"100px"}}>
                       <IoMdContact size={100}/>
                  </div>
            
            <h1 style={{paddingLeft:"80px"}}>QUERY</h1>
            
           <br></br>
            <form >
                
                <div>
                <input  style={{border:'2px solid black'}} onChange={(e)=>{setname(e.target.value)}} placeholder="name" value={name}/>
                </div>
                <br></br>
                <div>
                <input  style={{border:'2px solid black'}} onChange={(e)=>{setemail(e.target.value)}} placeholder="email" value={email}/>
                </div>
                <br></br>

               <div>
                <input   style={{border:'2px solid black'}} type="text" onChange={(e)=>{setmessage(e.target.value)}} placeholder="Type your querry" value={message}/>
                </div>
                <br></br>

                <input className="button"  style={{border:'2px solid black'}} type="submit" onClick={(e)=>SendMail(e)} />
            
            </form>
            </div>
        </div>
        </div>
        </div>
        
        </div>
        <Footer/>
        </>
    )
}

export default Quote;
