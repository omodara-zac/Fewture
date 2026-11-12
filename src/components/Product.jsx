import products from "../data/products.json";
import ProductCard from "./ProductCard";
import "./Product.css";

const Products = () => {
  return (
    <section className="products" id="products">

      <p className="arrival-label">NEW ARRIVAL</p>

      <h1>THE COLLECTION</h1>

      <div className="products-grid">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
};

export default Products;