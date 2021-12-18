import React, {useState} from 'react'
import './Login.css';

const Login = () => {
    return(
        <div className = "login">
            <h2>LOGIN</h2>
            <form>
                <input type = "email" placeholder = "email"></input>
                <input type = "text" placeholder = "password"></input>
                <button className="ui inverted green button">Login</button>
            </form>
        </div>
    )
}
  
export default Login