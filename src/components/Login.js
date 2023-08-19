import { useState,useEffect } from "react";
import Header from "./Header";
import axios from "axios";

import { useLocation,useNavigate } from "react-router-dom";


function Login({temail,setTemail,ttemail,setTtemail,name,setName})
{
  const location = useLocation();

    const navigate=useNavigate();

    const path=location.pathname;
   // console.log(path);

    useEffect(()=>{
     
        if(localStorage.getItem('user-info'))
        {
          if(path=='/addproduct')
          {
            navigate('/addproduct');

          }
          else if(path.startsWith('/editpage/')) {
            const productId = path.split('/').pop(); // Extract the product ID from the URL
            navigate(`/editpage/${productId}`);
           } // Navigate to the edit page with the extracted ID
          else{
            navigate('/myproducts');

          }

         
         

           
            
        }
    })


    const [isLogged,setLogged]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errorMessage, setErrorMessage] = useState('');
    

    


    const handleEmail=(event)=>
    {
        setEmail(event.target.value);

    }

    const handlePassword=(event)=>
    {
        setPassword(event.target.value);

    }

    const handleCloseError = () => {
        setErrorMessage("");
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email,
            password,
          });
    
          // Assuming your API returns a 'token' property upon successful login
          const token = response.data.token;
    
          // Save the token in localStorage or a state management solution (e.g., Redux)
          // For simplicity, we'll save it in localStorage here
          localStorage.setItem('user-info', token);

          setTemail(email);
          setEmail("");
          setPassword("");
          navigate("/");
    
          // Handle successful login, e.g., redirect the user to a protected route
          console.log('Successfully logged in!');
        } catch (err) {
          // Handle login error
          if (err.response && err.response.data && err.response.data.errors) {
            // Handle validation errors from the API response
            const errorMessages = Object.values(err.response.data.errors).join(" ");
            setErrorMessage(errorMessages);
          //console.log(error);
        }
        else{
            setErrorMessage("Invalid Credentials");

        }
      
    }
      };
    


    return <div>
        <Header name={name} setName={setName} temail={temail}></Header>
        <div className="container">
        <h1 className="display-2">Log in</h1>
        <form onSubmit={handleSubmit}>
        {errorMessage && (
            <div className="alert alert-danger" role="alert">
              <button
                onClick={handleCloseError}
                className="close"
                type="button"
                data-dismiss="alert"
                aria-hidden={errorMessage ? "true" : "false"}
              >
                x
              </button>
              {errorMessage}
            </div>
          )}
            <div className="row  m-4">
                <div className="col-2">
                    <label>Email</label>
                </div>  
                <div className="col-10">
                   <input type="email" value={email} onChange={handleEmail} className="form-control"></input>
                </div>   
    
            </div>
            <div className="row  m-4">
                <div className="col-2">
                    <label>Password</label>
                </div>  
                <div className="col-10">
                   <input type="password" value={password} onChange={handlePassword} className="form-control"></input>
                </div>   
    
            </div>
            <button className="btn btn-primary">Login</button>
           

            </form>


        </div>
       
        
        
    </div>
}

export default Login;