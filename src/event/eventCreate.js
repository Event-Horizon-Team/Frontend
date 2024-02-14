import  './eventCreate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import {CreateEventHeader} from "./createEventHeader";
import {EventName} from "./eventName";
import {EventDescription} from "./eventDescription";
import {EventDateAndLocation} from "./eventDateAndLocation";
import React from "react";
import {EventCategoryAndAdsOption} from "./eventCategoryAndAdsOption";
function EventCreate() {

    return <div>
        <CreateEventHeader/>
        <EventName/>
        <EventDescription/>
        <EventDateAndLocation/>
        <EventCategoryAndAdsOption/>
        <button type="button" className="event-btn"  style={{position:'fixed',bottom:'50px',right:'100px'}}>Create</button>
    </div>
}

export default EventCreate;