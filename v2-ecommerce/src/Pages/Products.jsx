import React, { useState, useEffect } from "react";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://v2-ecommerce.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Set filteredProducts to the fetched data
      })
      .catch((error) => {
        console.error("error fetching products", error);
      });
  }, []);

  // Function to filter products based on category
  const filterProducts = (category) => {
    if (category === "all") {
      // Show all products
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      // Show filtered products
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container">
      <div id="buttons">
        <button className="btn" onClick={() => filterProducts("all")}>
          Show All
        </button>
        <button className="btn" onClick={() => filterProducts("Audio")}>
          Audio
        </button>
        <button className="btn" onClick={() => filterProducts("Mobile")}>
          Mobile
        </button>
        <button className="btn" onClick={() => filterProducts("Tablet")}>
          Tablet
        </button>
        <button className="btn" onClick={() => filterProducts("Laptop")}>
          Laptop
        </button>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={`../Public/${product.photo}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
