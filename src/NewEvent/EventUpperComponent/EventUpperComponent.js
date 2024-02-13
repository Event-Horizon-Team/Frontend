import React, {useEffect} from 'react';
import './EventUpperComponent.css'
import EventPicture from "./EventPicture";
import EventDataInUpperComponent from "./EventDataInUpperComponent";
import ButtonsRow from "./ButtonsRow/ButtonsRow";

export default function EventUpperComponent({ eventTabIndex, setEventTabIndex }) {

    return (
        <div className={"event-page-upper-container pb-3"}>
            <EventPicture imageSource={"https://i.ibb.co/6bYj7LH/ee.jpg"}/>
            <div className={"row"} >
                <div className={"col-1"} />
                <div className={"col-11"}>
                    <EventDataInUpperComponent/>
                    <ButtonsRow eventTabIndex={eventTabIndex} setEventTabIndex={setEventTabIndex}/>
                </div>
            </div>
        </div>
    );
}