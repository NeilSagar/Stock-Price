import React ,{useEffect} from 'react';
import {UserAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Swal from "sweetalert2";

function LogOut(){
    const {user,logOut}=UserAuth();
    const navigate=useNavigate();

    function alert(){
        Swal.fire({
            title: 'Are you sure to Sign Out?',
            text: "You will be directed to Sign In page.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5C469C',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sign Out!'
          }).then((result) => {
            if (result.isConfirmed) {
                handleLogout();
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: 'Signed Out'
                  })
            }
          })
    }
    const handleLogout=async()=>{
        try{
            
            await logOut();
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        if(user==null){
            // setTimeout(() => {
                navigate("/signIn");
            // }, 500);
        }
       },[user]);
    return (
        <div className="footer">
            <div className="logout-sec">
            <p className="copyright"><span>Stocky Watchy</span> copyright &#169; 2023</p>
            <p className="logout-button" onClick={alert}><LogoutRoundedIcon /> <span>Sign Out</span></p>    
        </div>
        </div>
    );
}

export default LogOut;