import React from 'react';
import person from '../../Assets/person.svg';
import './Cart.css';

const Cart = () => {
    return(
        <div className = "cart">
            <p>Your Cart</p>

            <div className='items'>
                <div className='item'>
                    <input className='person-img' type="image" src = {person}></input>
                    <p>T-shirt Summer Vibes</p>
                    <p>$89.99</p>
                </div>
                <div className='item'>
                    <input className='person-img' type="image" src = {person}></input>
                    <p>T-shirt Summer Vibes</p>
                    <p>$89.99</p>
                </div>
            </div>

            <div className='total round-corner'>
                <p>Total Cost</p>
                <p>$12,232</p>
            </div>

            <div className='shipping'>
                <i class="truck icon"></i>
                <p>You are $30,123 away from free shipping</p>
            </div>
        </div>
    )
}

export default Cart;