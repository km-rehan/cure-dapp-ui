import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'

export class UserInformation extends Component {

    state = {
        patientName: this.props.getStore().patientName
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
            if (this.props.getStore().patientName !== userInput.patientName) {
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
            namePatient: (data.patientName.length > 3)
        }
    }

    _validationErrors = (val) => {
        console.log("Val", val)
        const errMsgs = {
            patientValMessage: val.namePatient ? '' : 'Patient name is required field'
        }
        return errMsgs;
    }

    _grabUserInput = () => {
        return  {
            patientName: this.state.patientName
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value 
        })
    }

    render() {
        return (
            <div className="container">
                <Container>
                    <Row>
                        <Col lg={12} md={8} sm={4}>
                            <Form>
                            <FormGroup>
                                <Label for="patientName">
                                    Patient name
                                </Label>
                                <Input
                                    autoComplete="off" 
                                    type="text"
                                    id="patientName"
                                    name="patientName"
                                    placeholder="patient name" 
                                    className = {
                                        !this.state.namePatient ? "is-invalid form-control" : "form-control"
                                    }
                                    required
                                    onChange={this.handleInputChange}
                                    defaultValue={this.state.patientName}
                                    value={this.state.patientName}
                                    onBlur={this.validationCheck} />
                                {!this.state.namePatient ?  
                                    <span className="invalid-feedback">{this.state.patientValMessage}</span>: null}
                            </FormGroup>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
