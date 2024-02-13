import React, {useEffect} from 'react';
import Tickets from "../NewTickets/Tickets";

export default function EventMiddleComponent({ eventTabIndex }) {

    return (
        <div className={"mt-3"}>
            {/*<h1>{eventTabIndex}</h1>*/}
            {eventTabIndex === 2 ? <Tickets /> : null}
        </div>
    );
}