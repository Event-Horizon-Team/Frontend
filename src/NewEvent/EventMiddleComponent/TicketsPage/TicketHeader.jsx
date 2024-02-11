import React from 'react';
import './Tickets.css';

export default function TicketHeader(props) {
    return (
        <div className={"row pe-1 background-white mb-2 ticket-header"}>
            <div className={"col-3 p-0"}>
                {/*<img src={"https://i.ibb.co/Yfprz3Y/ticketlogo.png"} className={"ticket-image"}/>*/}
                <img src={"https://i.ibb.co/drMM7TC/gggggg.jpg"} className={"ticket-image"}/>
            </div>
            <div className={"col-9 d-flex flex-column"}>
                <h2 >Lorem ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aut culpa eaque earum est ex explicabo ipsa labore laudantium libero modi, nihil numquam obcaecati, saepe, suscipit totam velit. Facilis!</p>

                <div className={"d-flex justify-content-between align-items-end ticket-footer pb-2"}>
                    <div className={"justify-content-start container-fluid"}>
                        <p className={"m-0 p-0"}>Price: 100 EGP</p>
                        <div className={"d-flex"}>
                            <p className={"me-1"}>Quantity: 100</p>
                            <p className={"mx-1"}>Quantity: 100</p>
                        </div>
                    </div>
                    <div className={"d-flex justify-content-end container-fluid mb-2"}>
                        <button className={"btn btn-primary m-1"}>Buy</button>
                        <button className={"btn btn-primary m-1"}>Refund</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
