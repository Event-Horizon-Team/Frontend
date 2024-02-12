import React from 'react';
import {TicketInformationTypes} from "./TicketInformationTypes";
import TicketNumberView from "./TicketNumberView";

export default function BuyingInformation({ ticketInformationType, children}) {

    const getSize = (s) => {
        if (ticketInformationType === TicketInformationTypes.IN_MODAL)
            return (s + " fs-4")
        else
            return s
    }

    return (
        <div className={getSize("justify-content-start container-fluid border-start border-4 border-danger")}>
            <p className={"m-0 p-0"}><TicketNumberView attributeName={"Price: "} attributeValue={100}/></p>
            <div className={"d-flex"}>
                <p className={"me-1 mb-0"}><TicketNumberView attributeName={"Available: "} attributeValue={100}/></p>
                <p className={"mx-1 mb-0"}><TicketNumberView attributeName={"My Tickets: "} attributeValue={100} /></p>
            </div>
            {children}
        </div>
    )
}