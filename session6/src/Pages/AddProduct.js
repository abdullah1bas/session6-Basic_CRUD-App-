import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  // da fe router => method btrg3ne le url mkan ana 3ayzo
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    // da kda al code mktoob sa7 3shan yb3t al data bs fe moshkla fe al phase fhnst5dm axios
    fetch("http://localhost:9000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        price: price,
        description: description,
      }),
    })
      .then((res) => res.json())
      .then((data) => navigate('/products'));

    // axios
    //   .post("http://localhost:9000/products", {
    //     title: title,
    //     price: price,
    //     description: description,
    //   })
    //   .then((data) => {
    //     // console.log(data);
    //     navigate('/products');
    //   });
  };

  return (
    <>
      <h1> AddProduct </h1>

      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="product title"
            aria-describedby="product title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="product price"
            aria-describedby="product price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="productDescription"
            placeholder="product description"
            aria-describedby="product description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
