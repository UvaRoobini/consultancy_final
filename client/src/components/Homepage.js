import React from "react";
import "../Styles/Homepage.css";
import ecofriendlyimg from '../images/ecofriendlyimg.jpg';
import economical from '../images/economical.png';
import energysaving from '../images/energysavingimg.jpg';
import prosandconsimg from '../images/prosandcons.webp';
import solar1 from '../images/solar1.jpeg';
import solar2 from '../images/solar2.jpg';
import solar3 from '../images/solar3.jpg';
import solar4 from '../images/solar4.jpg';
import solar5 from '../images/solar5.jpg';
import { FaArrowRight } from "react-icons/fa"
import {Link} from 'react-router-dom'
function Homepage() {
    return (
        <div>
            <div className="subtitle">
     <h3  className="subquote"> We hope we don’t have to wait until oil and coal run out before we tackle that.</h3> 
     <br></br>
     <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}  ><Link to="/quote"><button className="button">QUERY</button></Link> </div>
        </div>
        

        <div class="grid-container">
		<div class="grid-item">
			<img style={{height:200,width:200}} src={ecofriendlyimg} alt="Image 1"/>
            <h3>Eco-Friendly</h3>
		</div>
		<div class="grid-item">
			<img  style={{height:170,width:200,marginTop:20}} src={economical} alt="Image 2"/>
            <h3 style={{marginTop:10}}>Economical in Cost</h3>
		</div>
		<div class="grid-item">
			<img style={{height:300,width:300,marginTop:-1,zIndex:0}} src={energysaving} alt="Image 3"/>
            <h3 style={{marginTop:-97}}>Energy Saving</h3>
		</div>
	</div>
    <h1 style={{fontFamily:'Cambria',fontWeight:'bold',textAlign:'center',marginTop:80,color:'olivedrab',fontSize:60}}>Welcome To</h1>
    <h3 style={{fontFamily:'Monospace',textAlign:'center',color:'darkseagreen',fontSize:35}}>Warrior Power Systems</h3>
    <h6 style={{marginLeft:150,marginRight:150,textAlign:'center',marginTop:20}}>Warrior power systems , an ISO 9001: 2015 Certified companies located in Erode, with the main objective of producing world class Solar Energy Systems for harnessing of power from Sun. We have developed our core competence in the field of manufacturing of Solar Water Heater for both industrial and domestic purposes, Solar Street Lights, Solar cooking System and Solar Home Lighting. Sustained growth since our inception on the basis of unmatched quality and customer satisfaction has made our company a distinguished name in the industry.</h6>
<div className="prosandcons">
    <h2 style={{fontFamily:"sans-serif",textAlign:"center"}}>Pros and cons of installing solar panels</h2>
    <div className="subprosandcons" >
    <img className="column"  style={{height:300,width:450}} src={prosandconsimg} alt="pros and cons"/>
    <h5 className="column" style={{textAlign:"center",fontFamily:"serif"}}>Homeowners should keep in mind their expected solar panel payback period, or the amount of time it will take to recoup their investment, by state. The cost of your home solar system can vary greatly, depending on the total federal and local tax credits. <br></br><br></br>

Not all systems completely offset the energy you’d typically purchase from your utility company. But solar panels can increase your property value by up to $15,000, according to the Department of Energy. <br></br><br></br>

Most residential solar systems will produce electricity for 20 to 30 years and require very little maintenance. The costs/savings vary based on how you purchased the panels (bought outright, financed, or leased).</h5>
</div>
</div>

<h1 style={{color:"green",fontWeight:"bold",textAlign:"center",marginTop:60}}><span style={{color:"black"}}>Our</span> Success Stories</h1>
<div className="wave">
<div class="row">
  <div class="column1">
    <img style={{height:400,width:250,marginTop:20}} src={solar1} alt="Snow" />
  </div>
  <div class="column1">
    <img style={{height:400,width:250,marginTop:20}} src={solar2} alt="Forest" />
  </div>
  <div class="column1">
    <img style={{height:400,width:250,marginTop:20}} src={solar3} alt="Mountains"/>
  </div>
  <div class="column1">
    <img style={{height:400,width:250,marginTop:20}} src={solar4} alt="Mountains"/>
  </div>
  <div class="column1">
    <img style={{height:400,width:250,marginTop:20}} src={solar5} alt="Mountains"/>
  </div>
</div>
</div>

<h1 style={{color:"green", marginTop:70,textAlign:"center", fontWeight:"bold"}}><span style={{color:"black"}}>Why</span> Choose Us...</h1>
<div style={{display:"flex"}} className="breadcrums">
<h3><pre>Consult </pre></h3>
<FaArrowRight style={{marginTop:8,height:20,width:20}}/>
<h3><pre> Design </pre></h3>
<FaArrowRight style={{marginTop:8,height:20,width:20}}/>
<h3><pre> Install </pre></h3>
<FaArrowRight style={{marginTop:8,height:20,width:20}}/>
<h3><pre> Support </pre></h3>
</div>


<div style={{display:"flex",justifyContent:"space-evenly"}} className="whychooseus">
    <h5>Trustworthy Design</h5>
    <h5>Competitive Price</h5>
    <h5>Quality Products</h5>
    <h5>Excellent Service</h5>
</div>

     </div>
    );
}

export default Homepage;