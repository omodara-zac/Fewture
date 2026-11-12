
import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";
import products2 from "../data/products2.json";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "./Collections.css";

const allProducts = [
  ...products.map((product) => ({
    ...product,
    collection: "originals",
    link: `/products/${product.id}`,
  })),

  ...products2.map((product) => ({
    ...product,
    collection: "new",
    link: `/products2/${product.id}`,
  })),
];

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = allProducts.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim())
  );

  return (
    <>
      <Navbar />

      <main className="collections-page">
        <div className="collections-heading">
          <p>FEWTURE / ALL PRODUCTS</p>
          <h1>OUR COLLECTIONS</h1>
          {/* <span>{filteredProducts.length} PRODUCTS</span> */}
        </div>

        {/* SEARCH BAR */}
        <div className="collections-search">
          <input
            type="search"
            placeholder="SEARCH PRODUCTS..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* PRODUCT GRID */}
        <div className="collections-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                to={product.link}
                className="collection-card"
                key={`${product.collection}-${product.id}`}
              >
                <div className="collection-card-images">
                  <img
                    src={product.cardImages[0]}
                    alt={product.name}
                    className="collection-first-image"
                  />

                  <img
                    src={product.cardImages[1] || product.cardImages[0]}
                    alt={product.name}
                    className="collection-second-image"
                  />
                </div>

                <div className="collection-card-info">
                  <h3>{product.name}</h3>
                  <p>₦{product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="no-products">
              NO PRODUCTS FOUND.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Collections;
