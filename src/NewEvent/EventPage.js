import React, { useEffect, createContext, useContext } from 'react';
import './EventUpperComponent/EventUpperComponent.css';
import EventUpperComponent from './EventUpperComponent/EventUpperComponent';
import EventMiddleComponent from './EventMiddleComponent';

const PageSizeAndTabIndexContext = createContext();

export default function EventPage() {
    const [eventTabIndex, setEventTabIndex] = React.useState(0);
    const [middlePageSize, setMiddlePageSize] = React.useState(6);

    const getColNumber = (index) => {
        if (index === 0) return 'col-3';
        else if (index === 1) return `col-${middlePageSize}`;
        else return `col-${9 - middlePageSize}`;
    };

    return (
        <div>
            <PageSizeAndTabIndexContext.Provider value={{ eventTabIndex, setEventTabIndex, setMiddlePageSize }}>
                <EventUpperComponent />
            </PageSizeAndTabIndexContext.Provider>
            <div className="row">
                <div className={getColNumber(0)}></div>
                <div className={getColNumber(1)}>
                    <EventMiddleComponent eventTabIndex={eventTabIndex} />
                </div>
                <div className={getColNumber(2)}></div>
            </div>
        </div>
    );
}

export function usePageSizeAndTabIndex() {
    return useContext(PageSizeAndTabIndexContext);
}
