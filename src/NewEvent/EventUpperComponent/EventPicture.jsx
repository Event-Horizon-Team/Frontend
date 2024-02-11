import React from 'react';
import './EventUpperComponent.css';

export default function EventPicture({ imageSource }) {
    return (
        <div className="event-picture-container">
            <img src={imageSource} className="event-faded-picture"/>
            <div className="gradient-overlay"></div>
            <div className="overlay-component">
                <img src={imageSource} className="event-picture"/>
            </div>
        </div>
    );
}
