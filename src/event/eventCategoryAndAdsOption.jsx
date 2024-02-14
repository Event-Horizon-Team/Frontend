import React from "react";
import  './eventCreate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const EventCategoryAndAdsOption = (props) => {
    return (

        <div className="container  emp-profile " style={{width: '50%'}}>
            <div className="row emp-text" style={{marginLeft: '20px'}}>
                Choose a category for your event.
            </div>
            <div className="row" style={{marginLeft: '20px', marginRight: '20px'}}>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select Category</option>
                    <option value="music">Music Concerts</option>
                    <option value="sports">Sports Events</option>
                    <option value="arts">Art Exhibitions</option>
                    <option value="food">Food Festivals</option>
                    <option value="tech">Tech Conferences</option>
                    <option value="education">Educational Workshops</option>
                    <option value="business">Business Seminars</option>
                    <option value="health">Health and Wellness</option>
                    <option value="community">Community Gatherings</option>
                    <option value="charity">Charity Events</option>
                    <option value="fashion">Fashion Shows</option>
                    <option value="film">Film Festivals</option>
                </select>
            </div>
            <div className="row emp-text" style={{marginLeft: '20px', marginTop: '10px'}}>
                Choose an ads option for your event.
            </div>
            <div className="row" style={{marginLeft: '20px', marginRight: '20px'}}>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select Ads Option</option>
                    <option value="1">Free Plan</option>
                    <option value="2">Premium Plan</option>
                    <option value="3">Ultimate Plan</option>
                </select>
            </div>
        </div>
    )
}