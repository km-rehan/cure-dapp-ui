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

const Msg = ({ }) => (
  <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: "space-between"
  }}>
    Your kyc is not yet completed, please click on the the button to complete your kyc
    <a href="https://kycdapp.com" target="_blank">Visit Kyc dapp</a>
  </div>
)

export function Routes({ token, user, logoutAction }) {

    useEffect(() => {
        if (token) {
             const jwt = jwt_decode(token);
             const current_time = new Date().getTime() / 1000;
             if (current_time > jwt.exp) {
                 logoutAction();
             }
        }
        if (user && !user.isKycDone) {
            toast.warning(<Msg />, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false
            })
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
