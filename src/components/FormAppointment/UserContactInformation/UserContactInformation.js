import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import * as is from "is_js";

export class UserContactInformation extends Component {

    state = {
        patientMobileNumber: this.props.getStore().patientMobileNumber,
        mobileNumber: this.props.getStore().mobileNumber,
        patientEmail: this.props.getStore().patientEmail,
        email: this.props.getStore().email
    }

    constructor(props) {
        super(props);
        this._validateOnDemand = true;
    }

    isValidated = () => {
        const userInput = this._grabUserInput();
        const validateNewInput = this._validateData(userInput);
        let isDataValidated = false;

        if (Object.keys(validateNewInput).every(k => {
                return validateNewInput[k] === true
            })) {
            if (this.props.getStore().patientMobileNumber !== userInput.patientMobileNumber) {
                this.props.updateStore({
                    ...userInput,
                    saveToCloud: false
                })
            }
            if (this.props.getStore().mobileNumber !== userInput.mobileNumber) {
                this.props.updateStore({
                    ...userInput,
                    saveToCloud: false
                })
            }
            if (this.props.getStore().patientEmail !== userInput.patientEmail) {
                this.props.updateStore({
                    ...userInput,
                    saveToCloud: false
                })
            }
            if (this.props.getStore().email !== userInput.email) {
                this.props.updateStore({
                    ...userInput,
                    saveToCloud: false
                })
            }

            isDataValidated = true;
        } else {
            this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
        }

        return isDataValidated;
    }

    validationCheck = () => {
        if (!this._validateOnDemand) {
            return;
        }

        const userInput = this._grabUserInput();
        const validateNewInput = this._validateData(userInput);

        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)))
    }

    _validateData = (data) => {
        return {
            mobilePatient: (data.patientMobileNumber.length > 0 && is.nanpPhone(data.patientMobileNumber)),
            validMobile: (data.mobileNumber.length > 0 && is.nanpPhone(data.mobileNumber)),
            emailPatient: (data.patientEmail.length > 0 && is.email(data.patientEmail)),
            validEmail: (data.email.length > 3 && is.email(data.email)),
        }
    }

    _validationErrors = (val) => {
        console.log("Val", val)
        const errMsgs = {
            patientValMobile: val.mobilePatient ? '' : 'Not valid mobile number',
            valMobile: val.validMobile ? '' : 'Not valid mobile number',
            patientValEmail: val.emailPatient ? '' : 'Not valid mobile number',
            valEmail: val.validEmail ? '' : 'Not valid mobile number'
        }
        return errMsgs;
    }

    _grabUserInput = () => {
        return {
            patientMobileNumber: this.state.patientMobileNumber,
            mobileNumber: this.state.mobileNumber,
            patientEmail: this.state.patientEmail,
            email: this.state.email
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const {
            name,
            value
        } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {

        return (
            <div className="container-wrapper">
                <Container>
                    <Row>
                        <Col lg={12} md={8} sm={4}>
                            <Form>
                            <FormGroup>
                                <Label for="patientMobileNumber">
                                    Patient Mobile number
                                </Label>
                                <div>
                                    <Input 
                                        autoComplete="off" 
                                        type="tel"
                                        name="patientMobileNumber"
                                        placeholder="Enter patient mobile number" 
                                        className = {
                                            !this.state.mobilePatient ? "is-invalid form-control" : "form-control"
                                        }
                                        required
                                        onChange={this.handleInputChange}
                                        defaultValue={this.state.patientMobileNumber}
                                        value={this.state.patientMobileNumber}
                                        onBlur={this.validationCheck} />
                                    {!this.state.mobilePatient && 
                                     <span className="invalid-feedback">{this.state.patientValMobile}</span>}
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="patientName">
                                    Mobile number
                                </Label>
                                <div>
                                    <Input 
                                        autoComplete="off" 
                                        type="tel"
                                        name="mobileNumber" 
                                        placeholder="Enter mobile number" 
                                        className = {
                                            !this.state.validMobile ? "is-invalid form-control" : "form-control"
                                        }
                                        required
                                        value={this.state.mobileNumber}
                                        onChange={this.handleInputChange}
                                        defaultValue={this.state.mobileNumber}
                                        onBlur={this.validationCheck} />
                                    {!this.state.validMobile && 
                                     <span className="invalid-feedback">{this.state.valMobile}</span>}
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="patientEmail">
                                    Patient email
                                </Label>
                                <div>
                                    <Input 
                                        autoComplete="off" 
                                        type="email"
                                        name="patientEmail"
                                        placeholder="Enter patient email" 
                                        className = {
                                            !this.state.emailPatient ? "is-invalid form-control" : "form-control"
                                        }
                                        required
                                        value={this.state.patientEmail}
                                        onChange={this.handleInputChange}
                                        defaultValue={this.state.patientEmail}
                                        onBlur={this.validationCheck} />
                                    {!this.emailPatient && 
                                     <span className="invalid-feedback">{this.state.patientValEmail}</span>}
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="patientName">
                                    Email
                                </Label>
                                <div>
                                    <Input 
                                        autoComplete="off" 
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email" 
                                        className = {
                                            !this.state.validEmail ? "is-invalid form-control" : "form-control"
                                        }
                                        required
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        defaultValue={this.state.email}
                                        onBlur={this.validationCheck} />
                                    {!this.state.validEmail && 
                                     <span className="invalid-feedback">{this.state.valEmail}</span>}
                                </div>
                            </FormGroup>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
