import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="app">
     <Switch>
       <Route path="/checkout">
       <Header/> 

         <h1>Checkout</h1>
       </Route>
       <Route path = "/login">

       <h1>Login</h1>

       </Route>
       <Route path="/">
         <Header/>
         <Home/>
       </Route>
     </Switch> 
    </div>
    </Router>/* removes invisible margin from react */
  );
}

export default App;
