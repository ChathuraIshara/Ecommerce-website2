import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";


function Addproduct({temail,name,setName})
{

    const [title,setTitle]=useState("");
    const [filepath,setFilepath]=useState("");
    const [desc,setDesc]=useState("");
    const [price,setPrice]=useState("");
    const [errorMessage,setErrorMessage]=useState("");

    const token=localStorage.getItem('user-info');

  
    const handleTitle=(event)=>
    {
      setTitle(event.target.value)
    }
    const handlePrice=(event)=>
    {
      setPrice(event.target.value);
    }
    const handleDesc=(event)=>
    {
      setDesc(event.target.value);
    }
    
    const handleCloseError = () => {
      setErrorMessage("");
    };

    const handleFilepath=(event)=>
    {
      setFilepath(event.target.files[0]);

    }
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("price", price);
        formData.append("desc", desc);
        formData.append("filepath", filepath);
    
        await axios.post("http://127.0.0.1:8000/api/addproduct", formData, {
          headers: {
            Authorization: `Bearer ${token}`, // Replace accessToken with the actual token obtained during login
            "Content-Type": "multipart/form-data",
          },
        });
    
        console.log("product added successfully");
        setTitle("");
        setDesc("");
        setFilepath("");
        setPrice("");
      } catch (err) {
        if (err.response && err.response.data && err.response.data.errors) {
          // Handle validation errors from the API response
          const errorMessages = Object.values(err.response.data.errors).join(" ");
          setErrorMessage(errorMessages);
        }
        else{
          console.log("error with api");
        }
      }
    }
    




    return <div>
       <Header name={name} temail={temail} setName={setName}></Header>
        <h1>Add product</h1>
        <div className="container">
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
                    <label>Title</label>
                </div>  
                <div className="col-10">
                   <input type="text" value={title} onChange={handleTitle} className="form-control"></input>
                </div>   
    
            </div>
            <div className="row  m-4">
                <div className="col-2">
                    <label>Price</label>
                </div>  
                <div className="col-10">
                   <input type="number" value={price} onChange={handlePrice} className="form-control"></input>
                </div>   
    
            </div>
            <div className="row  m-4">
                <div className="col-2">
                    <label>Description</label>
                </div>  
                <div className="col-10">
                   <input type="text" value={desc} onChange={handleDesc} className="form-control"></input>
                </div>   
    
            </div>
            <div className="row  m-4">
                <div className="col-2">
                    <label>Choose Image</label>
                </div>  
                <div className="col-10">
                   <input type="file"  onChange={handleFilepath} className="form-control"></input>
                </div>   
    
            </div>
            <button className="btn btn-primary">Add</button>
           
          </form>
        </div>
       
    </div>
}

export default Addproduct;