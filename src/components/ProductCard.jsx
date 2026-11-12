import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card"
    >
      <div className="card-images">
        <img
          src={product.cardImages[0]}
          alt={product.name}
          className="first-image"
        />

        <img
          src={product.cardImages[1]}
          alt={product.name}
          className="second-image"
        />
      </div>

      <div className="card-info">
        <h3>{product.name}</h3>

        <p>₦{product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
