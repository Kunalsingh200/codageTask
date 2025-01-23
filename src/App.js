import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';
import productsData from './product.json'; 

const App = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData.products);

  const handleFilter = () => {
    let updatedProducts = productsData.products;

    if (selectedBrand) {
      updatedProducts = updatedProducts.filter(
        (product) => product.brand === selectedBrand
      );
    }

 
    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedPrice) {
      if (selectedPrice === "asc") {
        updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
      } else if (selectedPrice === "desc") {
        updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
      }
    }

    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    handleFilter(); 
  }, [selectedBrand, selectedCategory, selectedPrice]); 
  return (
    <div className="App">
      <div className="filter-menu">
        
        <select
          onChange={(e) => setSelectedBrand(e.target.value)}
          value={selectedBrand}
        >
          <option value="">Filter by Brand</option>
          {Array.from(new Set(productsData.products.map((product) => product.brand))).map(
            (brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            )
          )}
        </select>

        
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">Filter by Category</option>
          {Array.from(new Set(productsData.products.map((product) => product.category))).map(
            (category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            )
          )}
        </select>

      
        <select
          onChange={(e) => setSelectedPrice(e.target.value)}
          value={selectedPrice}
        >
          <option value="">Filter by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
