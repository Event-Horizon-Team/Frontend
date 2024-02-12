import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function TicketIncremental( { numberOfBoughtTickets, setNumberOfBoughtTickets }) {

    const goUp = () => {
        setNumberOfBoughtTickets(numberOfBoughtTickets+1)
    }

    const goDown = () => {
        setNumberOfBoughtTickets(numberOfBoughtTickets-1)
    }

    return (
        <div className={"d-flex justify-content-end align-items-center incremental"}>
            <button className={"btn"} onClick={goDown} disabled={numberOfBoughtTickets === 1}><ArrowDropDownIcon className={"fs-6"}/>
            </button>
            <span className={"mx-2"}>{numberOfBoughtTickets}</span>
            <button className={"btn"} onClick={goUp} disabled={numberOfBoughtTickets === 10}><ArrowDropUpIcon className={"fs-6"}/>
            </button>
        </div>
    );
}