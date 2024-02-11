import React from 'react';
import './BuyingInformation.css'

export default function BuyingInformation() {
    return (
        <div className={"d-none d-lg-flex justify-content-between align-items-end ticket-footer pb-2"}>
            <div className={"justify-content-start container-fluid"}>
                <p className={"m-0 p-0"}><span className={"fw-medium color-brown"}>Price:</span> 100 EGP</p>
                <div className={"d-flex"}>
                    <p className={"me-1"}><span className={"fw-medium color-brown"}>Quantity:</span> 100</p>
                    <p className={"mx-1"}><span className={"fw-medium color-brown"}>Quantity:</span> 100</p>
                </div>
            </div>
            <div className={"d-flex justify-content-end container-fluid mb-2"}>
                <button className={"btn btn-primary m-1"}>Buy</button>
                <button className={"btn btn-primary m-1"}>Refund</button>
            </div>
        </div>
    )
}