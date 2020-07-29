import React, { useEffect } from 'react'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';
import Landing from '../pages/Landing';
import { Alert } from "reactstrap";
import "./Routes.css"
import Account from "../pages/Account";
import HORoute from "../components/HORoute";
import Appointment from "../pages/Appointment";
import { ToastContainer, toast } from 'react-toastify';
import *  as jwt_decode from "jwt-decode"
import * as is from "is_js";

export function Routes({ token, user, logoutAction }) {

    useEffect(() => {
        if (token) {
             const jwt = jwt_decode(token);
             const current_time = new Date().getTime() / 1000;
             if (current_time > jwt.exp) {
                 logoutAction();
             }
        }
        return () => {
        }
    }, [token, user])

    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Landing} />
                <HORoute component={Account} path="/account" exact />
                <Route path="/doctors" component={Appointment} />
            </Switch>
            <ToastContainer />
        </Router>
    );
}
