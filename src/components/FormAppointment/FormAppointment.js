import React, { Component } from 'react'
import StepZilla from "react-stepzilla";
import UserInformation from "./UserInformation";
import { Container } from "reactstrap";
import UserContactInformation from './UserContactInformation';
import UserLocationInformation from "./UserLocationInformation";
import UserTreatment from "./UserTreatment";


/* patientMobileNumber: this.props.getStore().patientMobileNumber,
        mobileNumber: this.props.getStore().mobileNumber,
        patientEmail: this.props.getStore().patientEmail,
        email: this.props.getStore().email */

export class FormAppointment extends Component {

    state = {

    }

    constructor(props) {
        super(props);
        this.store = {
            patientName: '',
            patientMobileNumber: '',
            mobileNumber: '',
            patientEmail: '',
            email: '',
            patientLocation: '',
            forTreatment: "",
            saveToCloud: false
        }
    }

    componentDidMount() {

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return {
            notifyChangeRequired: false
        }
    }

    componentDidUpdate(prevProps, prevState) {

    }

    getStore = () => {
        return this.store;
    }

    updateStore = (update) => {
        this.store = {
            ...this.store,
            ...update
        }
    }

    onChangeStep  = (step) => {

    }

    render() {
        const steps = [
            {
                name: "Patient information", component: <UserInformation getStore={this.getStore} updateStore={this.updateStore} />
            },
            {
                name: "Patient contact information", component: <UserContactInformation getStore={this.getStore} updateStore={this.updateStore} />
            },
            {
                name: "Patient location information", component: <UserLocationInformation getStore={this.getStore} updateStore={this.updateStore} />
            },
            {
                name: "Patient problems", component: <UserTreatment getStore={this.getStore} updateStore={this.updateStore} />
            }
        ]
        return (
            <Container>
                <div className="contact-box">
                    <div className="step-progress">
                        <StepZilla 
                            steps={steps} 
                            preventEnterSubmission={true} 
                            nextTextOnFinalActionStep="Schedule"
                            
                            // disable or enable the steps UI navigation on top
                            showSteps={true}
    
                            // disable or enable onClick step jumping from the UI navigation on top
                            stepsNavigation={true} 
                            onStepChange={this.onChangeStep} />
                    </div>
                </div>
            </Container>
            
        )
    }
}
