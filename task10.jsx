import React, { useState, useMemo, useCallback } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Tablet" },
  { id: 4, name: "Monitor" },
  { id: 5, name: "Keyboard" },
  { id: 6, name: "Mouse" },
  { id: 7, name: "Headphones" },
  { id: 8, name: "Smartwatch" },
]; // Fake API data

const FilterableProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // useMemo to optimize filtering
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // useCallback to optimize the clear button
  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  return (
    <div className="container">
      <h1 className="title">Filterable Product List</h1>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="search-input"
        />
        <button onClick={clearSearch} className="clear-button">
          Clear
        </button>
      </div>
      <h3 className="count">Filtered Products: {filteredProducts.length}</h3>
      <ul className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id} className="product-item">
              {product.name}
            </li>
          ))
        ) : (
          <p className="no-results">No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default FilterableProductList;
