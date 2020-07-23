import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import HORoute from "../../components/HORoute"
import AppointmentDoctors from './AppointmentDoctors';
import "./Appointment.css";
import AppointmentForm from "./AppointmentForm";


export function Appointment ({match}) {
    return (
        <Switch>
            <Route path={`${match.path}`} exact component={AppointmentDoctors}/>
            <HORoute path={`${match.path}/appointment`} component={AppointmentForm}/>
        </Switch>
    )
}