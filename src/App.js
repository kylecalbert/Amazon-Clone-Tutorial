import React,{useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser, 
        });
        //user is logged in
      }else{
        dispatch({
          type:"SET_USER",
          user:null,
        });
        //user is logged out
      }
    });
    return()=> {
      unsubscribe();
      //any cleanup operations go in here
    }

  },[])

  console.log("USER IS >>>",user);
  //use effect hook
//Piece of code which runs based on given condition
  return (
    <Router>
    <div className="app">
     <Switch>
       <Route path="/checkout">
       <Header/> 
       <Checkout/>

       </Route>
       <Route path = "/login">

       <Login/>

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
