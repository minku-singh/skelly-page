import React from "react";
import "./SubHeader.css";

const SubHeader = () => {
    return(
        <div className="sub-header">
            <p>Shipping and Payment</p>

            <div className="end">
                <i className="shopping cart icon"></i>
                <i className="truck icon"></i>
            </div>
        </div>
    )
}

export default SubHeader;