import React from 'react';
import './Tickets.css';
import BuyingInformation from "./BuyingInformation/BuyingInformation";

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
                <BuyingInformation />
            </div>
        </div>
    );
}
