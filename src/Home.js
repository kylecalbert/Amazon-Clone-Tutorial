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
            <Product
            id="1234"
            title="Startup guide"
            price = {11.96}
            rating = {5} 
            image = "https://images.prismic.io/startupguide/5f75c17769ad774903f4a1f410fc90b1cf0ff1cf_image_books.png?auto=compress,format"
            />

            <h1>HOME</h1>

            
        </div>
    )
}

export default Home
