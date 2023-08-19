import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import Header from "./Header";

function AllProducts({ name, setName }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/showall");
       // console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header name={name} setName={setName}></Header>
      <h1 className="text-center">All Products</h1>
      <div className="container mt-3">
        <table className="table table-dark ">
          <thead>

          <tr>
            <th>Id</th>
            <th>TItle</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
          </tr>

          </thead>
          
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </table>
      </div>
    </div>
  );
}
export default AllProducts;
