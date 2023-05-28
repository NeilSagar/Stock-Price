import React,{useEffect,useState} from "react";
import {UserAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import Card from "./card";
import SearchIcon from '@mui/icons-material/Search';
import Swal from "sweetalert2";
function Dashbody(){
    const[symbol,setSymbol]=useState("");
    const [date,setDate]=useState("");
    const [isValid,setIsValid]=useState(true);
    const [searchedSymbol,setSearchedSymbol]=useState("");
    const [price,setPrice]=useState("");
    const [isFirst,setIsFirst]=useState(true);
    async function handleChange(event){
        const value=event.target.value;
        setSymbol(value);
        setSearchedSymbol("");
    }
    function alertTopRight(iconval,msg){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: iconval,
            title: msg
          })      
    }
    const handleGetPrice=async(event)=>{
        setIsValid(true);
        setIsFirst(false);
        try {
            if(date===""||symbol===""){
                alertTopRight("warning","Please fill both Symbol and Date .") ;   
                return;
            }
            const API_url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol="+symbol+".BSE&outputsize=full&apikey=1843Z463HCGPZNOI";
            const res=await fetch(API_url);
            const parsedData=await res.json();
            // console.log(parsedData["Time Series (Daily)"][date]["4. close"]);
            setSearchedSymbol(symbol);
            setPrice(parsedData["Time Series (Daily)"][date]["4. close"]);
            
        } catch (error) {
            setSearchedSymbol("");
            alertTopRight("error","Invalid Symbol");    
            console.log(error);
        }
    }
    const handleDateChange=(event)=>{
        const value=event.target.value;
        setDate(value);
    } 
    return (
        <div className="dashbody">
            <h2>Type in any stock symbol from BSE .....</h2>
            {/* <form> */}
            <div className="search-sec">
            <input className="search-bar" type="text" placeholder="Stock Symbol" value={symbol} onChange={handleChange}/>
            <input className="search-date" type="date"   onChange={handleDateChange} value={date}/>
            
                <button className="getPrice-button" onClick={handleGetPrice}>
                <SearchIcon/>
                </button>
            </div>
            <div className="symbol-info">
            {symbol&&searchedSymbol? <Card symbol={searchedSymbol.toUpperCase()} price={price} date={date}/>:null}
            </div>

            
        </div>
    );
}

export default Dashbody;