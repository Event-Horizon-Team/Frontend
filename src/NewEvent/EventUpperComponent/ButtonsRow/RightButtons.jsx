import React, {useEffect} from 'react';

export default function RightButtons() {

    return (
        <div className={"d-flex justify-content-end"}>
            <button className={"btn border border-2 backgroung-dark-grey fw-semibold me-1"}>Save</button>
            <button className={"btn border border-2 backgroung-dark-grey fw-semibold ms-1"}>Cancel</button>
        </div>
    );
}