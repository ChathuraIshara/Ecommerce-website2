import axios from "axios";
import { Link } from "react-router-dom";

function MProduct({ product, count, setCount }) {
  async function deleteProduct(productid) {
    await axios.delete("http://127.0.0.1:8000/api/deleteproduct/" + productid);
    console.log("succesfully deleted product");
    setCount(count + 1);
  }

  return (
    <thead>
      <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.desc}</td>
        <td>{product.price}</td>
        <td>
          <img
            src={`http://127.0.0.1:8000/images/${product.filepath}`}
            className="rounded"
            width="40px"
            height="40px"
            alt={product.title}
          />
        </td>
        <td>
          <Link to={`/editpage/${product.id}`} state={{
            title:product.title,
            price:product.price,
            desc:product.desc,
            filepath:product.filepath
          }}>
            <button className="btn btn-primary">Edit</button>
          </Link>
         
        </td>
        <td>
          <button
            onClick={() => deleteProduct(product.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    </thead>
  );
}
export default MProduct;
