import React from 'react';
import Ship from '../Ship/Ship';
import Payment from '../Payment/Payment';
import Cart from '../Cart/Cart';
import SubHeader from '../SubHeader/SubHeader';
import './Main.css';

const Main = () => {
    return(
        <div className='main'>
            <Ship />
            <Payment />
            <Cart />
        </div>
    )
}

export default Main;