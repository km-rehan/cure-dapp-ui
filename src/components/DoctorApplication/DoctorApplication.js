import React, { Component } from 'react'
import {
    Row,
    Col,
    Container,
    Button,
    Card,
    CardTitle,
    CardBody,
    Input,
    Label,
    Alert
} from "reactstrap";
import "./DoctorApplication.css";

export class DoctorApplication extends Component {
    
    componentDidMount() {
        this.props.getUserProfileAction();
    }

    render() {
        const {
            profile,
            user,
            token,
            profileError
        } = this.props;



        return (
            <div className="doctor-application-top-padding">
                <Container className="doctor-application-main-container">
                    {!user.kycDone && <Alert color="primary">
                                            This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                        </Alert>}
                    <DoctorForm profile={profile} user={user} token={token} isEnabled={!user.kycDone} />                    
                </Container>
            </div>
        )
    }
}
