import React from 'react';

export default function TicketNumberView({ attributeName, attributeValue, isTotalPrice }) {
    return (
        <>
            <span className={"fw-medium text-primary"}>{attributeName}</span>
            { isTotalPrice && <span className={"fw-medium text-danger"}> { attributeValue } </span> }
            { !isTotalPrice && <span> { attributeValue } </span> }
        </>
    );
}