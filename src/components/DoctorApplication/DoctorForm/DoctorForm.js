import React, { Component, Fragment } from 'react'
import { CardImgOverlay, Card, CardText, CardBody, CardTitle } from "reactstrap";
import DoctorsBasicInformation from "../DoctorsBasicInformation";
import DoctorsEducationInformation from "../DoctorsEducationInformation";
import DoctorPractice from "../DoctorPractice";
import DoctorEstablishment from "../DoctorEstablishment";
import DoctorEstablishmentTimings from "../DoctorEstablishmentTimings";
import DoctorDetails from "../DoctorDetails";


export class DoctorForm extends Component {

    state = {
        step: 1,
        specialization: "",
        city: "",
        degrees: [],
        colleges: [],
        yearOfExperience: 0,
        isOwnEstablishment: false,
        isNotOwnEstablishment: false,
        establishmentName: "",
        establishmentCity: "",
        establishmentEmail: "",
        establishmentContact: "",
        establishmentAddress: "",
        days: [],
        section1TimeFrom: "",
        section1TimeTo: "",
        section2TimeFrom: "",
        section2TimeTo: "",
        consultation: "",
        isError: {
            specialization: "",
            city: "",
            degrees: "",
            colleges: "",
            yearOfExperience: "",
            isOwnEstablishment: "",
            isNotOwnEstablishment: "",
            establishmentName: "",
            establishmentCity: "",
            establishmentEmail: "",
            establishmentContact: "",
            establishmentAddress: "",
            days: "",
            section1TimeFrom: "",
            section1TimeTo: "",
            section2TimeFrom: "",
            section2TimeTo: "",
            consultation: "",
        }
    }

    nexStep = () => {
        this.setState(prevState => ({
            step: prevState.step + 1
        }))
    }

    prevStep = () => {
        this.setState(prevState => ({
            step: prevState.step - 1
        }))
    }

    handleInputChange = input => e => {
        this.setState({
            [input]: e.targe.value
        })
    }


    render() {
        const {  profile, user, token, isEnabled  } = this.props;

        const {
            specialization,
            city,
            degrees,
            colleges,
            yearOfExperience,
            isOwnEstablishment,
            isNotOwnEstablishment,
            establishmentName,
            establishmentCity,
            establishmentEmail,
            establishmentContact,
            establishmentAddress,
            days,
            section1TimeFrom,
            section1TimeTo,
            section2TimeFrom,
            section2TimeTo,
            consultation
        } = this.state;

        values = {
            specialization,
            city,
            degrees,
            colleges,
            yearOfExperience,
            isOwnEstablishment,
            isNotOwnEstablishment,
            establishmentName,
            establishmentCity,
            establishmentEmail,
            establishmentContact,
            establishmentAddress,
            days,
            section1TimeFrom,
            section1TimeTo,
            section2TimeFrom,
            section2TimeTo,
            consultation
        }

        if (!isEnabled) {
            return (
                <Card lg={12} md={8} sm={6}>
                    <CardImgOverlay>
                        <CardText>
                            Please get your kyc verified first.
                        </CardText>
                    </CardImgOverlay>
                </Card>
            )
        } else {
            switch (this.state.step) {
                case 1:
                    return (
                        <DoctorsBasicInformation
                            handleChange={this.handleInputChange}
                            values={values}
                            profile={profile}
                        />
                    );
                case 2:
                    return (
                        <DoctorsEducationInformation
                            handleChange={this.handleInputChange}
                            values={values}
                         />
                    )

                case 3:
                    return (
                        <DoctorPractice
                            handleChange={this.handleInputChange}
                            values={values} />
                    )
                case 4:
                    return (
                        <DoctorEstablishment
                            handleChange={this.handleInputChange}
                            values={values} 
                            />
                    )
                case 5:
                    return (
                        <DoctorEstablishmentTimings
                            handleChange={this.handleInputChange}
                            values={values} />
                    )
                case 6:
                    return (
                        <DoctorDetails
                            handleChange={this.handleInputChange}
                            values={values} />
                    )
            
                default:
                    return (
                         <DoctorsBasicInformation
                            handleChange={this.handleInputChange}
                            values={values}
                            profile={profile}
                        />
                    );
            }
        }

        
    }
}
