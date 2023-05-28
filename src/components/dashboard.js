import React,{useEffect,useState} from "react";
import {UserAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import Nav from "./nav";
import Dashbody from "./dashbody";
import Footer from "./footer";
function Dashboard(){
    return (
        <div className="dashboard">
            <Nav/>
            <br></br>
            <Dashbody/>  
            <Footer/>
        </div>
        
    );
}

export default Dashboard;