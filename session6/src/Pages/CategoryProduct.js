import { Link } from "react-router-dom";

function CategoryProduct(props) {
  const { productProps , showButton , showPrice , showDesc , showTitle } = props;
  return (
    <>
      <div className="card">
        <img src={productProps.image} className="card-img-top w-100" alt={productProps.title} />
        <div className="card-body">
          {showTitle && <h5 className="card-title">{productProps.title}</h5>}
          
          {showDesc && <p className="card-text">{productProps.description}</p>}
          
          {showPrice && <p> Price: {productProps.price}$ </p>}
          
          {/* {showButton && <Link className="btn btn-primary" to={`/product/${productProps.id}`}>Details</Link>} */}
        </div>
      </div>
    </>
  );
}

export default CategoryProduct;
