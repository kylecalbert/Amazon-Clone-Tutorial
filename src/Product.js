import React from "react";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <p>{title}</p>
      <p className="product__">
        <small>£</small>
        <strong>{price}</strong>
      </p>
      <div className="product_rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>&#9733;</p>
          ))}
      </div>
      <img src={image}></img>
      <button>Add to basket button</button>
    </div>
  );
}

function runArray(rating) {
  Array(rating)
    .fill()
    .map((_) => <p>&#9733;</p>);
}

// Product id,title,price,rating,image

export default Product;
