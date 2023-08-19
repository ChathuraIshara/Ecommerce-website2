import axios from "axios"
import Header from "./Header";
import { useEffect, useState } from "react";
import Product from "./Product";
import MProduct from "./Mproduct";

function MyProduct({name,setName,count,setCount})
{

    const [myproducts,setMyproducts]=useState([]);

    const token=localStorage.getItem('user-info');

  


    const fetchmyProducts = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/showmyproduct', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setMyproducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      useEffect(()=>
      {
          fetchmyProducts();
  
      },[count]);
  



    return <div>
        <Header name={name} setName={setName} ></Header>
        <div className="container mt-3">
        <h1 className="text-center mb-3">My Products</h1>
        {myproducts.length>0?(
             <table className="table table-dark  ">
             <thead>
             <tr>
             <th>Id</th>
             <th>TItle</th>
             <th>Description</th>
             <th>Price</th>
             <th>Image</th>
             <th colSpan="2">Action</th>
           </tr>
 
             </thead>
         
           {myproducts.map((product) => (
 
            
                 <MProduct setCount={setCount} count={count} product={product} key={product.id}></MProduct>
             
            
             
          
         ))}
 
 
         </table>

        ):(
            <p className="display-2">No products Available</p>
        ) }
       

        </div>
        

    </div>
}

export default MyProduct;