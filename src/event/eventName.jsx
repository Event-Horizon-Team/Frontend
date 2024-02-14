import React from "react";
import  './eventCreate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const EventName = (props) => {
    return(
        <div className="container  emp-profile " style={{width:'50%'}} >
            <div className="row emp-text" style={{marginLeft:'20px'}}>
                Event Name
            </div>
            <div className="row" style={{marginLeft:'8px',marginRight:'8px'}}>
                <div className="input-group input-group-default">
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required />
                </div>
            </div>
        </div>
    )
}