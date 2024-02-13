import React, {useEffect} from 'react';
import Tickets from "../NewTickets/Tickets";
import AboutPage from "./EventMiddleComponent/AboutPage/AboutPage";

export default function EventMiddleComponent({ eventTabIndex }) {

    return (
        <div className={"mt-3"}>
            {eventTabIndex === 0 ? <AboutPage /> : null}
            {eventTabIndex === 2 ? <Tickets /> : null}
        </div>
    );
}