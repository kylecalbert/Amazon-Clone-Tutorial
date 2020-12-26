import React from 'react'
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct"
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <img className = "checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg" alt=""/>
        {basket?.length === 0?(
             <div>
             <h2>Your Shopping Basket is empty</h2>
           </div>

        ):(
            <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {/* List all of checkout products  */}
            {basket.map(name=>  
              <CheckoutProduct
                id={name.id}
                title={name.title}
                price={name.price}
                rating={name.rating}
                image={name.image}

   
            />
                )}
          </div> 
        )}{
        
       } 
            
        </div>
    )
}

export default Checkout
