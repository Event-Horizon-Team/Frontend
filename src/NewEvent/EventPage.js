import React, {useEffect} from 'react';
import './EventUpperComponent/EventUpperComponent.css'
import EventUpperComponent from "./EventUpperComponent/EventUpperComponent";
import EventMiddleComponent from "./EventMiddleComponent/EventMiddleComponent";

export default function EventPage() {

    const [eventTabIndex, setEventTabIndex] = React.useState(0);

    return (
        <div>
            <EventUpperComponent eventTabIndex={eventTabIndex} setEventTabIndex={setEventTabIndex}/>
            <div className="row">
                <div className="col-3">
                </div>
                <div className={"col-6"}>
                    <EventMiddleComponent eventTabIndex={eventTabIndex}/>
                </div>
                <div className={"col-3"}>
                </div>
            </div>
        </div>
    );
}