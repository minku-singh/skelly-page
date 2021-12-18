import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div className='footer'>
            <div className='back'>
                <p><i class="arrow left icon"></i>Back</p>
            </div>
            
            <div className='shop'>
                <button className="ui inverted green button">Continue Shopping</button>
                <button className="ui green button">Proceed to Payment</button>
            </div>
        </div>
    );
}

export default Footer;