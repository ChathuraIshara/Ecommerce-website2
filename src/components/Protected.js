import { useState,useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Protected(props)
{
    let cmp=props.cmp;
    const navigate=useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('user-info'))
        {
            navigate("/login");
            
        }
    })

    return <div> {cmp} </div>
    
}

export default Protected;