import React from "react";
import {Form} from "react-bootstrap";
import  './eventCreate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const EventDateAndLocation = (props) => {
    return(
        <div className="container  emp-profile " style={{width:'50%'}} >
            <div className="row emp-text" style={{marginLeft:'20px'}}>
                Event Date
            </div>
            <div className="row" style={{marginLeft:'8px',marginRight:'8px'}}>
                <Form.Group controlId="dob">
                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                </Form.Group>
            </div>
            <div className="row emp-text" style={{marginLeft:'20px',marginTop:'30px'}}>
                Event Location
            </div>
            <div className="row emp-text" style={{marginLeft:'20px',marginTop:'10px',marginBottom:'3px',fontSize:'16px'}}>
                Country
            </div>
            <div className="row" style={{marginLeft:'8px',marginRight:'8px'}}>
                <div className="input-group input-group-default">
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>

            <div className="row emp-text" style={{marginLeft:'20px',marginTop:'10px',marginBottom:'3px',fontSize:'16px'}}>
                City
            </div>
            <div className="row" style={{marginLeft:'8px',marginRight:'8px'}}>
                <div className="input-group input-group-default">
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>

            <div className="row emp-text" style={{marginLeft:'20px',marginTop:'10px',marginBottom:'3px',fontSize:'16px'}}>
                Address
            </div>
            <div className="row" style={{marginLeft:'8px',marginRight:'8px'}}>
                <div className="input-group input-group-default">
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>
        </div>
    )
}