import React from 'react'
import "./CheckoutProduct.css";

function CheckoutProduct({id,title,image,price,rating}) {
    const removeFromBasket = () => {
      //remove item from basket
    }
    return (
        <div className="checkoutProduct">
            <img className = "checkoutProduct_image" src ={image} alt = ""/>

        <div className ="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>

      <p className="checkoutProduct_price">
        <small>£</small>
        <strong>{price}</strong>
      </p>

      <div className="checkoutProduct_rating">
        {Array(rating)
          .fill()
          .map((_) => (
            <p>&#9733;</p>
          ))}
      </div>
      <button onclick ={removeFromBasket}>Remove from Basket</button>

        </div>
        </div>


    )
}

export default CheckoutProduct