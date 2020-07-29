import React, { Component } from 'react'
import { Container, Button, Col } from "reactstrap";
import FormAppointment from "../../../components/FormAppointment";

export class AppointmentForm extends Component {

    state = {
    }

    componentDidMount() {
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {

    }


    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return (
            <Container className="form-container">
                <Col>
                    <Container>
                        <FormAppointment / >
                    </Container>
                </Col>
            </Container>
        )
    }
}
