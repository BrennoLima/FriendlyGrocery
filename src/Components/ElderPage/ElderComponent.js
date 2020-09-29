import React from 'react'
import './elder.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Elder = () => {
    return(
        <div className="container-fluid elder-container">
            <div className="row justify-content-center">
                <h1 className="elder-title">Elder Page</h1>
            </div>
            <div className="row justify-content-start">
                <div className="col-12 col-md-2">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Elder</Breadcrumb.Item>
                    </Breadcrumb>
                </div> 
            </div>
        </div>
    );
}

export default Elder;