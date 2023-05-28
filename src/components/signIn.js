import React,{useEffect} from "react";
import {GoogleButton} from "react-google-button";
import {GitHubButton} from "react-github-button";
import {UserAuth} from "../context/AuthContext";
import Swal from "sweetalert2";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";
function SignIn(){
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    const {googleSignIn,user}=UserAuth();
    const navigate=useNavigate();

    function handleChange(event){
        const name=event.target.name;
        const value=event.target.value;
        if(name==="name"){
            setName(value);
        }
        else if(name==="email"){
            setEmail(value);
        }
        else{
            setPassword(value);
        }
    }
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
    
    const handleGoogleSignIn= async()=>{
        try{
            await googleSignIn();
            
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        if(user!=null){
            navigate("/");
        }
    },[user]);
    return (
        <div className="signIn-page">
            <form className="form">
                <h2>Stocky Watchy</h2>
                <input type="text" placeholder="Your name" name="name"value={name} onChange={handleChange} disabled></input>
                <br></br>
                <input type="email" placeholder="Your email" name="email"value={email} onChange={handleChange} disabled></input>
                <br></br>
                <input type="password" placeholder="Your Password" name="password"value={password} onChange={handleChange} disabled></input>
                <br></br>
                <button type="submit" disabled>Sign In</button>
                <br/><br/>
                <p><span>*</span> Above inputs are disabled!</p>
                <hr/>
                <div className="signInOther">
                <div className="google">
                <GoogleButton type="dark"label='Sign In with Google' onClick={handleGoogleSignIn} className="google-button" />
                </div>
    
                </div>
            </form>
        </div>
    );
}

export default SignIn;