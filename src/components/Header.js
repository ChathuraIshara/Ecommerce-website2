import { NavDropdown } from "react-bootstrap";
import { NavLink, json, Nav } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Header({temail,name,setName}) {

  const getDetails = async () => {
    try {
      const token = localStorage.getItem('user-info');
      const response = await axios.get('http://127.0.0.1:8000/api/getname', {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token as a bearer token in the header
        },
      });

      const userData = response.data; // Assuming the API response contains user data
      setName(userData.name);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

 




const token=localStorage.getItem('user-info');

useEffect(()=>
    {

      
      if(token)
      {
       getDetails();
       

      }


      


      
    },[temail]);

    


  
 

  

 
  
   


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">  
          Ecommerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {localStorage.getItem("user-info") ? (
              <>
                <NavLink className="nav-item nav-link " to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
                <NavLink className="nav-item nav-link" to="/addproduct">
                  Add Product
                </NavLink>
                <NavLink className="nav-item nav-link" to="/logout">
                  Logout
                </NavLink>
                <NavLink className="nav-item nav-link" to="/products">
                  Products
                </NavLink>
                <NavLink className="nav-item nav-link" to="/myproducts">
                 My Products
                </NavLink>
                <NavLink className="nav-item nav-link" to="/register">
                  {name}
                </NavLink>
               
              </>
            ) : (
              <>
                <NavLink className="nav-item nav-link " to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-item nav-link" to="/register">
                  Register
                </NavLink>
                <NavLink className="nav-item nav-link" to="/products">
                  Products
                </NavLink>
                
               
                
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
