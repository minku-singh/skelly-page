import React from 'react';
import './Header.css';

let Header  = () => {
    return(
        <div className="header">
            <h2><span>E-</span>Shop</h2> 

            <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>

            <ul>
                <li><i class="search icon"></i></li>
                <li><i class="shopping cart icon"></i></li>
                <li><i class="user outline icon"></i></li>
            </ul>
        </div>  
    )
}

export default Header;