import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import AdminDash from './adminDashPage'
import AdminSuccess from "./Adminsuccess";

function AdminPage(){
  return <>
  <Navbar/>
  <AdminDash/>
  <AdminSuccess/>
  <Footer/>
  </>
}


export default AdminPage