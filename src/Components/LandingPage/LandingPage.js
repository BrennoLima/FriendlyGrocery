import React from 'react'
import { Image } from 'react-bootstrap'
import './landingpage.css'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import img1 from '../../assets/images/img1.png'
import img2 from '../../assets/images/img2.png'
import img3 from '../../assets/images/img3.png'
import styled from 'styled-components'

const MyLink = styled(Link)`
    color: black;
    &:hover{
        color: black;
        text-decoration: none;
    }
`

const LandingPage = () => {
    return(
        <div className="container-fluid landingpage-container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h1 className="landingpage-title">Friendly Grocery</h1>
                </div>
            </div>
            <div className="row justify-content-center">
            <div className="col-12 col-md-5 landingpage-link">
                <MyLink to="/volunteers">
                    <h1 className="category">I'm a Volunteer</h1>
                    <Image src={img3} className="landingpage-image" fluid/>
                </MyLink>
            </div>
            <div className="col-12 col-md-5 landingpage-link">
                <MyLink to="/elders">
                    <h1 className="category">I'm an Elder</h1>
                    <Image src={img2} className="landingpage-image" fluid/>
                </MyLink>
            </div>
            </div>
        </div>
    )
}

export default LandingPage;