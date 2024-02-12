import React from 'react';
import './Tickets.css';
import BuyingInformation from "./BuyingInformation/TicketInformation/BuyingInformation";
import {TicketInformationTypes} from "./BuyingInformation/TicketInformation/TicketInformationTypes";
import TicketsModal from "../../../tickets/ticketsModal";
import TicketBuyingModal from "./BuyingInformation/Modal/TicketBuyingModal";

export default function TicketHeader() {
    return (
        <div className={"row pe-1 background-white mb-2 ticket-header"}>
            <div className={"col-3 p-0"}>
                <img src={"https://i.ibb.co/drMM7TC/gggggg.jpg"} className={"ticket-image"}/>
            </div>
            <div className={"col-9 d-flex flex-column"}>
                <h2>Lorem ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aut culpa eaque earum est ex
                    explicabo ipsa labore laudantium libero modi, nihil numquam obcaecati, saepe, suscipit totam velit.
                    Facilis!</p>

                <div className={"d-flex justify-content-between align-items-end pb-2 h-100"} >
                    <BuyingInformation ticketInformationType={TicketInformationTypes.IN_TICKET}/>
                    <div className={"d-flex justify-content-end align-items-end"}>
                        <TicketBuyingModal />
                        <button className={"btn btn-primary m-1"}>Refund</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
