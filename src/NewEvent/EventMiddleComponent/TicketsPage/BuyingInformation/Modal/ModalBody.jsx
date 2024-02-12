import React from 'react';
import BuyingInformation from "../TicketInformation/BuyingInformation";
import {TicketInformationTypes} from "../TicketInformation/TicketInformationTypes";
import TicketNumberView from "../TicketInformation/TicketNumberView";
import TicketIncremental from "./TicketIncremental";

export default function ModalBody({ numberOfBoughtTickets, setNumberOfBoughtTickets }) {
    return (
        <div className={"my-2 me-2 d-flex flex-column my-modal-body"}>
            <h2 className={"display-5 border-bottom border-2 modal-border me-1"}>Ticket Title</h2>
            <div className={"d-flex justify-content-between parent"}>
                <BuyingInformation ticketInformationType={TicketInformationTypes.IN_MODAL}>
                    <p className={"mb-0"}><TicketNumberView isTotalPrice={true} attributeName={"Total Price: "}
                                                            attributeValue={numberOfBoughtTickets * 100}/></p>
                </BuyingInformation>
                <TicketIncremental numberOfBoughtTickets={numberOfBoughtTickets}
                                   setNumberOfBoughtTickets={setNumberOfBoughtTickets}/>
            </div>
        </div>
    );
}