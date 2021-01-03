import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import{ useStateValue } from "./StateProvider"
import {auth} from "./firebase";

import {Link} from 'react-router-dom'
function Header() {
   //if the user is logged in provide sign out option
    const login = () =>{
        if(user){
        auth.signOut();
    }
    }


    const[{basket,user}] = useStateValue();
    console.log(basket);
    return (
        <nav className="header">
            <Link to="/">
            <img className="header_logo" src="https://www.bizmonthly.com/wp-content/uploads/2020/04/Amazon-logo-black-template.png"></img>
            </Link>
            {/*search box*/}
            <div className="header__search">
            <input type="text" className="header__searchInput"/> 
            <SearchIcon className="header__searchIcon"/>
            </div> 
            <div className="header__nav">

            {/*first link */}
            <Link to={!user && "/login"} className="header__link">         {/*of user is not logged in and they click lin, push to login page*/}
            <div onClick={login} className="header__option">        {/*if user is logged in and clicks link they will be signed out */}
    <span className = "header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign in'}</span>
            </div>
            </Link>

            <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">&Orders</span>
            </div>
            </Link>
             
            <Link to="/" className="header__link">
            <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
            </div>
            </Link>


            <Link to="/checkout" className="header__link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header_basketCount">{basket.length}</span>

            </div>
 
            </Link>







            

            </div>
        </nav>
    )
}

export default Header
