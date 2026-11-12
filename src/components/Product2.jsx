import products from "../data/products2.json";
import ProductCard from "./ProductCard2";
import "./Product2.css";

const Products2 = () => {
  return (
    <section className="products" id="products">

      {/* <p className="arrival-label">Shop</p> */}

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

export default Products2;