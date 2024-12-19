import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>R$ {product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;
