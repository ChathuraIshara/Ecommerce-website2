import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({name,setName})
{
   

    const navigate=useNavigate();
    // const handleLogout=()=>
    // {
    //     localStorage.clear();
    //     console.log("succesfully logout");
    //     navigate("/login");

    // }
   

      useEffect(()=>
      {
        localStorage.clear();
        console.log("succesfully logout");
        setName("");
        navigate("/login");

          
      },[]);

    return <div></div>
}

export default Logout;