import React, { useState } from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function TicketIncremental() {

    const [value, setValue] = useState(1);

    const goUp = () => {
        setValue(value+1);
    }

    const goDown = () => {
        setValue(value-1);
    }

    return (
        <div className={"d-flex justify-content-end align-items-center incremental"}>
            <button className={"btn"} onClick={goDown} disabled={value === 1}><ArrowDropDownIcon className={"fs-6"}/>
            </button>
            <span className={"mx-2"}>{value}</span>
            <button className={"btn"} onClick={goUp} disabled={value === 10}><ArrowDropUpIcon className={"fs-6"}/>
            </button>
        </div>
    );
}