import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ProductEdit() {
  let { editIDdddddddddddddd } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState(0);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/products/${editIDdddddddddddddd}`)
      .then((res) => res.json())
      .then((product) => {
        setTitle(product.title);
        setPrice(product.price);
        setDescription(product.description);
        setCategory(product.category);
        setImage(product.image);
        setRate(product.rating.rate);
        setCount(product.rating.count);
      });
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:9000/products/${editIDdddddddddddddd}`, {
        id: editIDdddddddddddddd,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image,
        rating: {
          rate: rate,
          count: count
        }
      })
      .then((data) => {
        // console.log(data);
        navigate("/products");
      });
  };
  return (
    <>
      <h1>Product Edit</h1>

      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
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
            value={price}
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
            value={description}
            id="productDescription"
            placeholder="product description"
            aria-describedby="product description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
    </>
  );
}

export default ProductEdit;
