import React from 'react';
import {TicketInformationTypes} from "./TicketInformationTypes";

export default function BuyingInformation({ ticketInformationType}) {

    const getSize = (s) => {
        if (ticketInformationType === TicketInformationTypes.IN_MODAL)
            return (s + " fs-4")
        else
            return s
    }

    return (
        <div className={"justify-content-start container-fluid"}>
            <p className={"m-0 p-0"}><span className={"fw-medium text-primary"}>Price:</span> 100 EGP</p>
            <div className={"d-flex"}>
                <p className={"me-1"}><span className={"fw-medium text-primary"}>Available:</span> 100</p>
                <p className={"mx-1"}><span className={"fw-medium text-primary"}>My Tickets:</span> 100</p>
            </div>
        </div>
    )
}