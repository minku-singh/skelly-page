import React from 'react';
import './Ship.css';
import { Link } from 'react-router-dom';

const Ship = () => {

    return(
        <div className = "ship">
            <Link to = "/login" className="ui green button login-margin login-btn">LOGIN</Link>
            <button className="ui inverted green button login-margin">SIGN UP</button>

            <p>Shipping Information</p>
            <form className='form'>
                <input type = "email" className = "round-corner" placeholder='Email'></input>
                <input type = "text" className = "round-corner" placeholder='Address'></input>
                <input type = "text" className = "round-corner" placeholder='First Name'></input>
                <input type = "text" className = "round-corner" placeholder='City'></input>
                <input type = "text" className = "round-corner" placeholder='Last Name'></input>
                <input type = "number" className = "round-corner" placeholder='Postal Code'></input>
                <input type = "number" className = "round-corner" placeholder='Phone Number'></input>
                <select className = "round-corner-select">
                    <option value = "India">India</option>
                    <option value = "India">India</option>
                    <option value = "India">India</option>
                    <option value = "India">India</option>
                    <option value = "India">India</option>
                    <option value = "India">India</option>
                </select>
            </form>
        </div>
    )
}

export default Ship;