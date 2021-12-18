import React from 'react';
import visa from '../../Assets/visa.svg';
import fedex from '../../Assets/fedex.svg';
import './Payment.css';

const Payment = () => {
    return(
        <div className = "payment">
            {/* payment method */}
            <div className='pay'>
                <p>Payment Method</p>
                <input className='round-corner' type="image" src = {visa}></input>
                <input className='round-corner' type="image" src = {visa}></input>
                <input className='round-corner' type="image" src = {visa}></input>
                <input className='round-corner' type="image" src = {visa}></input>
                <input className='round-corner' type="image" src = {visa}></input>
                <input className='round-corner' type="image" src = {visa}></input>
            </div>

            {/* delivery method */}
            <div className='deliver'>
                <p>Delivery Method</p>
                <input className='round-corner del' type="image" src = {fedex}></input>
                <input className='round-corner del' type="image" src = {fedex}></input>
                <input className='round-corner del' type="image" src = {fedex}></input>
                <input className='round-corner del' type="image" src = {fedex}></input>
            </div>
        </div>
    )
}

export default Payment;