import React from "react";
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, price, rating, image }) {
  const [{basket}, dispatch] = useStateValue();


  const addToBasket = () =>{
        dispatch(
            {       
                type: 'ADD_TO_BASKET',  //reducer takes action type
                item:{
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                    rating,rating
                }

            }
        )


  };
  return (
    <div className="product">
    <div className="product__info">
    <p>{title}</p>
      <p className="product_price">
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
    </div>


      <img src={image}></img>
      <button onClick= {addToBasket}>Add to basket</button>
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
