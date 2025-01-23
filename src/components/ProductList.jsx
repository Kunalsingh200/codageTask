import React, { useState } from "react";
import data from "../product.json";
import ProductCard from "./ProductCard";
import SortingMenu from "./SortMenu";

const ProductList = () => {
  const [products, setProducts] = useState(data.products);

  const handleSort = (type, order) => {
    let sortedProducts = [...products];
  
    if (type === "price") {
      
      sortedProducts.sort((a, b) =>
        order === "asc" ? a.price - b.price : b.price - a.price
      );
    } else if (type === "brand") {
     
      sortedProducts.sort((a, b) => {
        const brandA = a.brand || ""; 
        const brandB = b.brand || "";
  
        if (brandA === brandB) {
          
          return order === "asc" ? a.price - b.price : b.price - a.price;
        }
  
       
        return order === "asc"
          ? brandA.localeCompare(brandB)
          : brandB.localeCompare(brandA);
      });
    } else if (type === "category") {
      
      sortedProducts.sort((a, b) => {
        const categoryA = a.category || ""; 
        const categoryB = b.category || "";
  
        return order === "asc"
          ? categoryA.localeCompare(categoryB)
          : categoryB.localeCompare(categoryA);
      });
    }
  
    setProducts(sortedProducts);
  };
  
  

  return (
    <div>
      <SortingMenu onSort={handleSort} />
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
