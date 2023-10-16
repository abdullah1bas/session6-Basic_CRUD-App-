import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";

import Swal from "sweetalert2";
import Categories from "./Categories";

function Products(props) {
  const { showTitlePage, showButton } = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch(`http://localhost:9000/products`)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  };

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are you Sure To Delete ${[product.title]}?`,
      showCancelButton: true,
    }).then((data) => {
      data.isConfirmed &&
        fetch(`http://localhost:9000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => getAllProducts());
    });
  };

  return (
    <>
      {showTitlePage && <h1> Products Page</h1>}
      {showButton && (
        <Link to={"/products/add"} className="btn btn-success mt-3">
          Add New Product
        </Link>
      )}
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            {showButton ? <th>Operations</th> : <th>Category</th>}
          </tr>
        </thead>
        <tbody className="boody">
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 30)}...</td>
                <td>{product.price}$</td>
                {showButton ? (
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteProduct(product)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-info btn-sm"
                    >
                      View
                    </Link>
                    <Link
                      to={`/products/edit/${product.id}`}
                      className="btn btn-primary btn-sm"
                    >
                      Edit
                    </Link>
                  </td>
                ) : (
                  <td>{product.category}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
