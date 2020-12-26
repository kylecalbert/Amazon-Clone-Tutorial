import React from 'react'
import "./Home.css"
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <img 
            className = "home_image"
            src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGrandTourS4/CHMA_S4SP2_GWBleedingHero_ENG_COVIDUPDATE_XSite_3000X1200_PV_en-GB._CB413892615_.jpg" />
         {/* loading product js here and passing in values into it */}
           <div className="home_row">


            <Product
            id="1234"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Silver (4th Generation)"
            price = {11.96}
            rating = {5} 
            image = "https://cdn.shopify.com/s/files/1/0121/0014/1114/products/THZ863GL_USE5_0b271a7d-6519-4a97-a146-ea6aa5494c30.jpg?v=1606277429"
            />
            <Product
            id="1234"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Silver (4th Generation)"
            price = {11.96}
            rating = {5} 
            image = "https://cdn.shopify.com/s/files/1/0121/0014/1114/products/THZ863GL_USE5_0b271a7d-6519-4a97-a146-ea6aa5494c30.jpg?v=1606277429"
            />
           </div>
           <div className="home_row">

            <Product
            id="1234"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Silver (4th Generation)"
            price = {11.96}
            rating = {5} 
            image = "https://cdn.shopify.com/s/files/1/0121/0014/1114/products/THZ863GL_USE5_0b271a7d-6519-4a97-a146-ea6aa5494c30.jpg?v=1606277429"
            />
            

            <Product
            id="1234"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Silver (4th Generation)"
            price = {11.96}
            rating = {5} 
            image = "https://cdn.shopify.com/s/files/1/0121/0014/1114/products/THZ863GL_USE5_0b271a7d-6519-4a97-a146-ea6aa5494c30.jpg?v=1606277429"
            />

            

           </div>

            
        </div>
    )
}

export default Home
