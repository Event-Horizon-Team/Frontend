import React, {useEffect} from 'react';
import RightButtons from "./RightButtons";
import LeftTabs from "./LeftTabs";
import './ButtonsRow.css'

export default function ButtonsRow({ eventTabIndex, setEventTabIndex }) {

    return (
        <div className={"px-0 container container-fluid mt-2 ms-0 border-top border-1"}>
            <div className={"ms-0 mt-2 d-flex justify-content-between align-items-center"} >
                <LeftTabs eventTabIndex={eventTabIndex} setEventTabIndex={setEventTabIndex} />
                <RightButtons />
            </div>
        </div>
    );
}