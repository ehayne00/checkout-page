import React from "react";
import boiler from '../media/boiler.png'

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <h1>{product.name}</h1>
      <img alt="oh no!" src={boiler} />
      <h2>Price: £{product.price}pcm</h2>
      <p>Item number: {product.id}</p>
      <button className="select">Select</button>
    </div>
  );
};

export default ProductCard;
