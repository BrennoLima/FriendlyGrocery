import React from 'react';
import './volunteer.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Volunteer = () => {
    return(
        <div className="container-fluid volunteer-container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="volunteer-title">Volunteer Page</h1>
                </div>
                <div className="col-12">
                    <h6>Thanks for being a volunteer in such a difficult time</h6>
                </div>           
            </div>
            <div className="row justify-content-start">
                <div className="col-12 col-md-2">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Volunteer</Breadcrumb.Item>
                    </Breadcrumb>
                </div> 
            </div>
        </div>
    );
}

export default Volunteer;
