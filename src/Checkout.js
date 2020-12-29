import React from 'react'
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className = "checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/AMZN_OutletDeals_Template_March_1500x200_wh_EN.jpg" alt=""/>
        {basket?.length === 0?(
             <div>
             <h2>Your Shopping Basket is empty</h2>
           </div>

        ):(
            <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {/* List all of checkout products  */}
            {basket.map(item=>  
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}

   
            />
                )}
          </div> 
        )}{
        
       } 
        </div>
    
        {basket.length>0&&(
            <div className="checkout_right">

                <Subtotal/>

                </div>

        )} 
      

        </div>
    )
}

export default Checkout
