import React from 'react'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';
import Landing from '../pages/Landing';
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Image from "../components/Image";
import loadingImage from "../resources/images/loading.gif";
import "./Routes.css"
import Account from "../pages/Account";
import HORoute from "../components/HORoute";
import Appointment from "../pages/Appointment";

export function Routes({ }) {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Landing} />
                <HORoute component={Account} path="/account" exact />
                <Route path="/products/appointment" component={Appointment} />
            </Switch>
            {/* <Modal isOpen={loading}>
                <ModalHeader>
                    Loading
                </ModalHeader>
                <ModalBody>
                    <Image source={loadingImage} />
                </ModalBody>
            </Modal> */}
        </Router>
    );
}
