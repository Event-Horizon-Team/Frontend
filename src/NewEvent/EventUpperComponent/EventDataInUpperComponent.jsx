import React, {useEffect} from 'react';
import './EventUpperComponent.css'

export default function EventDataInUpperComponent() {

    return (
        <div>
            <p className={"my-date my-0"}>FRYDAY, MARCH 1, 2024 AT 7:00 PM</p>
            <h3 className={"my-0"}>My New Event</h3>
            <p className={"my-0"}>Faculty of Engineering, Alexandria University</p>
        </div>
    );
}