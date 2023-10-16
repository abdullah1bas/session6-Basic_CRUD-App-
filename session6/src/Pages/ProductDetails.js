import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";

function ProductDetails() {
  let { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <>
      {product && (
        <div className="card">  
          <img
            src={product.image}
            className="card-img-top w-25"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>

            <p className="card-text">{product.description}</p>

            <p> Price: {product.price}$ </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
