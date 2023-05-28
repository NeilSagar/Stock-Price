import React, { useEffect } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from "react-router-dom";
function Card(props){
    const searchedSymbol=props.symbol;
    const price=props.price;
    const date=props.date;
    const navigate=useNavigate();
    const msg="The stock:"+searchedSymbol+" price on the "+date+" is "+price;
    console.log(msg);
    function handleWhatsappMsg(){
        const waAPI="https://api.whatsapp.com/send?phone=7749033315&text="+msg+"&source=&data";
        window.open(waAPI, '_blank');
    }
    return (
        <div className="card">
            {searchedSymbol&&(searchedSymbol!=="Invalid Symbol.")?<div className="msg-sec">
                <div className="whatsappmsg-box">
                <h3>Symbol <span className="span-1">:</span> <span className="span-2">{searchedSymbol}</span></h3>
                {/* <hr/> */}
                <div className="card-body">
                <p className="card-price"><CurrencyRupeeIcon/> <span>{price}</span></p>
                </div>
                <button onClick={handleWhatsappMsg} className="button"><WhatsAppIcon/></button>
                </div>
                
            </div>:null}
        </div>
    );
}

export default Card;