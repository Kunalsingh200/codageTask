import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.images[0]} 
        alt={product.title}
        className="product-image"
      />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-category">
        <strong>Category:</strong> {product.category}
      </p>
      <p className="product-brand">
        <strong>Brand:</strong> {product.brand}
      </p>
      <p className="product-price">
        <strong>Price:</strong> ${product.price.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductCard;
