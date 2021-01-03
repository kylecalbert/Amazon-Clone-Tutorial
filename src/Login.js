import React,{useState} from "react"
import "./Login.css"
import {auth} from "./firebase"
import {Link,useHistory} from "react-router-dom"
function Login() {
    const history = useHistory()
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const login = event =>{
        event.preventDefault(); //stops refreshing
        //do login logic here
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
         history.push("/")
            //logged in succesfully and redirect to homepage
        })
        .catch((e)=>alert(e.message)) 


    }   

    const register = event =>{
        event.preventDefault(); //stops refreshing
        //do login logic here
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            history.push("/") //redirects you to the homepage   

            //create user logged in and redirect to home page
        })
        .catch((e)=>alert(e.message))  //if anything goes wrong

        

    } 

 





    return (
        <div className="login">
            <Link to="/">
                <img
                className="login_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
                alt=""

                />
            </Link>

            <div className="login_container"> 
            <h1>Sign in</h1> 
            <form>
            <h5>E-mail</h5>
            <input value={email} onChange={event=>setEmail(event.target.value)} type="email"></input>
            <h5>Password</h5>
            <input value={password} onChange = {event=>setPassword(event.target.value)} type="password"></input> {/* gets input value and sets it as setPassword  */}
            <button onClick={login} type= "submit" className="login_signInButton">Sign in</button>
            <button onClick={register}className="login_registerInButton">Create your Amazon Account</button>


            </form>
            </div>


        </div>
    )
}

export default Login
