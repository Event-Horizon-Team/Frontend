import React from "react";

export const EventDescription = (props) => {
    return(
        <div className="container  emp-profile " style={{width:'50%'}}  >
            <div className="row emp-text" style={{marginLeft:'20px'}}>
                Event Description
            </div>
            <div className="row" style={{marginLeft:'8px',marginRight:'8px'}}>
                <div className="input-group">
                    <textarea className="form-control" aria-label="With textarea" style={{height:'100px'}}></textarea>
                </div>
            </div>
        </div>
    )
}