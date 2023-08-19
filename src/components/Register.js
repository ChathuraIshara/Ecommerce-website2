import { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const location=useLocation();

  const path=location.pathname;

  useEffect(()=>{
     
    if(localStorage.getItem('user-info'))
    {
      if(path=='/addproduct')
      {
        navigate('/addproduct');

      }
      else{
        navigate('/myproducts');

      }

     
     

       
        
    }
})

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regerror, setregError] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleCloseError = () => {
    setregError("");
  };

  async function handleSubmit(event) {

    event.preventDefault();
    try {
     
      await axios.post("http://127.0.0.1:8000/api/register", {
        name: name,
        email: email,
        password: password,
      });
      console.log("User registered succesfully");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
        if (err.response && err.response.data && err.response.data.errors) {
            // Handle validation errors from the API response
            const errorMessages = Object.values(err.response.data.errors).join(" ");
            setregError(errorMessages);
    }
  }
}

  return (
    <div>
      <Header></Header>
      <div className="container">
        <h1 className="display-2">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          {regerror && (
            <div className="alert alert-danger" role="alert">
              <button
                onClick={handleCloseError}
                className="close"
                type="button"
                data-dismiss="alert"
                aria-hidden={regerror ? "true" : "false"}
              >
                x
              </button>
              {regerror}
            </div>
          )}
          <div className="row  m-4">
            <div className="col-2">
              <label>Your Name</label>
            </div>
            <div className="col-10">
              <input
                type="text"
                value={name}
                onChange={handleName}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row  m-4">
            <div className="col-2">
              <label>Email</label>
            </div>
            <div className="col-10">
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                className="form-control"
              ></input>
            </div>
          </div>
          <div className="row  m-4">
            <div className="col-2">
              <label>Password</label>
            </div>
            <div className="col-10">
              <input
                type="password"
                value={password}
                onChange={handlePassword}
                className="form-control"
              ></input>
            </div>
          </div>
          <button className="btn btn-primary">Signup</button>
        </form>
      </div>
    </div>
  );
}


export default Register;
