import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  // Fetch product data from the fake API
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Filter products based on search term using useMemo
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear the search term using useCallback
  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  return (
    <div className="container">
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={clearSearch}>Clear</button>
      <p>
        Showing <strong>{filteredProducts.length}</strong> products
      </p>

      {/* Product List */}
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {/* Cart Section */}
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <p>
          <strong>Total Items:</strong> {cart.length}
        </p>
      </div>
    </div>
  );
};

export default ProductList;