import React from 'react';
import {TicketInformationTypes} from "./TicketInformationTypes";

export default function BuyingInformation({ ticketInformationType, children}) {

    const getSize = (s) => {
        if (ticketInformationType === TicketInformationTypes.IN_MODAL)
            return (s + " fs-4")
        else
            return s
    }

    return (
        <div className={getSize("justify-content-start container-fluid border-start border-4 border-danger")}>
            <p className={"m-0 p-0"}><span className={"fw-medium text-primary"}>Price:</span> 100 EGP</p>
            <div className={"d-flex"}>
                <p className={"me-1 mb-0"}><span className={"fw-medium text-primary"}>Available:</span> 100</p>
                <p className={"mx-1 mb-0"}><span className={"fw-medium text-primary"}>My Tickets:</span> 100</p>
            </div>
            {children}
        </div>
    )
}