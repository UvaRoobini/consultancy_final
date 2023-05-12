import React from "react";
import Home from './Home';
import ReactDOM from "react-dom/client";
import Product from './components/Product.js'
import SuccessStory from './components/Success.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from './Contactus';
import Aboutus from './Aboutus';
import AdminPage from "./components/adminPage";
import Login from './components/Login';
import Quote from './Quote';
import Success from "./components/Success.js";
import Client from "./components/Clients.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route path="/products" element ={<Product/>}/>
        <Route  path="/contactus" element={<Contactus />}> </Route>
        <Route  path="/aboutus" element={<Aboutus />}> </Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
        <Route exact path="/login" element ={<Login />}></Route>
        <Route path="/success" element ={<Success/>}></Route>
        <Route exact path="/quote" element={<Quote/>}></Route>
        <Route exact path = "/clients" element={<Client/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}


export default App;
