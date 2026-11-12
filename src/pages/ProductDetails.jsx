
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import "./ProductDetails.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const message = `Hello Fewture, I'm interested in purchasing the ${product.name} (₦${product.price.toLocaleString()}). Please provide more details.`;

  const whatsappLink = `https://wa.me/2347069451201?text=${encodeURIComponent(message)}`;

  return (
    <>
    <Navbar />
    <section className="product-details">

      <div className="product-images">
        {product.images.map((image, index) => (
          <img
            src={image}
            alt={`${product.name} ${index + 1}`}
            key={index}
          />
        ))}
      </div>

      <div className="product-info">

        <p className="arrival-label">NEW ARRIVAL</p>

        <h1>{product.name}</h1>

        <h2>₦{product.price.toLocaleString()}</h2>

        <p>{product.description}</p>

        <p className="product-category">
          Category: {product.category}
        </p>

        <a
          href={whatsappLink}
          className="order-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORDER NOW
        </a>

      </div>

    </section>
    
    <Footer />
    </>
    
  );
};

export default ProductDetails;
