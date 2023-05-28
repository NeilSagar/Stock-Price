import React,{useEffect} from "react";
import {UserAuth} from "../context/AuthContext";
import Avatar from '@mui/material/Avatar';
function Nav(){
    const {user}=UserAuth();
    console.log(user);
    return (
        <div className="navbar">
        <div className="photo-sec"><Avatar alt="Remy Sharp" src={user?user.photoURL:null} sx={{ width: 120, height: 120 }}/></div>
        
        <h1><span>Hello,</span> {user?user.displayName:null}</h1>
        
        
        </div>
    );
}
export default Nav;