function Product({ product}) {
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
      </tr>
    </thead>
  );
}
export default Product;
