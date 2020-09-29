import React from 'react'
import LandingPage from './LandingPage/LandingPage'
import Elder from './ElderPage/ElderComponent'
import Volunteer from './VolunteerPage/VolunteerComponent'
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'  

const Main = () => {
    return(
        <>
            <Router>
                <Switch>
                    <Route path="/home" component= {() => <LandingPage/>}/>
                    <Route path="/elders" component= {() => <Elder/>}/>
                    <Route path="/volunteers" component= {() => <Volunteer/>}/>
                    <Redirect to="/home"/>
                </Switch>
            </Router>
        </>
    );
}

export default Main;