import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export class UserTreatment extends Component {

        state = {
        forTreatment: this.props.getStore().forTreatment
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
            treatmentFor: (data.forTreatment.length > 100)
        }
    }

    _validationErrors = (val) => {
        console.log("Val", val)
        const errMsgs = {
            treatmentForValMessage: val.treatmentFor ? '' : 'Its required to have this information and should be explain in more than 100 characters'
        }
        return errMsgs;
    }

    _grabUserInput = () => {
        return  {
            forTreatment: this.state.forTreatment
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
                                    Please give us information about the problem
                                </Label>
                                <Input
                                    autoComplete="off" 
                                    type="textarea"
                                    id="forTreatment"
                                    name = "forTreatment"
                                    placeholder="Please explain in detail about your problem" 
                                    className = {
                                        !this.state.treatmentFor ? "is-invalid form-control" : "form-control"
                                    }
                                    required
                                    onChange={this.handleInputChange}
                                    defaultValue={this.state.forTreatment}
                                    value={this.state.forTreatment}
                                    onBlur={this.validationCheck} />
                                {!this.state.treatmentFor ?  
                                    <span className="invalid-feedback">{this.state.treatmentForValMessage}</span>: null}
                            </FormGroup>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
