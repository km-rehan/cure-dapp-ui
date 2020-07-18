import "./Account.css";
import React, { useState } from "react";
import { Row, Col, Container, Button, Card, CardTitle, CardBody, Input, Label } from "reactstrap";
import Image from "../../components/Image";
import defaultImage from "../../resources/icons/img_avatar.png";
import LanguageList from "../../components/LanguageList";
import moment from "moment";


const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

export class Account extends React.Component {

    state = {
        pickedImage: defaultImage,
        avatar: defaultImage,
        fname: "",
        lname: "",
        phoneNumber: "",
        emailId: "",
        gender: "",
        dateOfBirth: "",
        bloodGroup: "",
        timezone: "",
        house_number: "",
        colony: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        altername_email: "",
        alternate_number: "",
        language: "",
        isError: {
            fname: "",
            lname: "",
            phoneNumber: "",
            emailId: "",
            gender: "",
            dateOfBirth: "",
            bloodGroup: "",
            timezone: "",
            house_number: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
            language: "",
        }
    }

    componentDidMount() {

    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (formValid(this.state)) {

            const formData = new FormData();
            formData.append('profileImage', this.state.pickedImage);
            formData.append('userId', this.props.user._id);
            formData.append('firstname', this.state.fname);
            formData.append('lastname', this.state.lname);
            formData.append('email', this.state.emailId);
            formData.append('mobile', this.state.phoneNumber);
            formData.append('address', this.state.colony ? this.state.house_number + " " + this.state.colony : this.state.house_number);
            formData.append('city', this.state.city);
            formData.append('country', this.state.country);
            formData.append('state', this.state.state);
            formData.append('pinCode', this.state.pincode);
            formData.append('gender', this.state.gender ? this.state.gender : "");
            formData.append('dateOfBirth', moment(this.state.dateOfBirth).format("YYYY-MM-DD"));
            formData.append('secondaryEmail', this.state.altername_email ? this.state.altername_email : "");
            formData.append('secondaryPhone', this.state.alternate_number ? this.state.alternate_number: "");
            formData.append('bloodGroup', this.state.bloodGroup ? this.state.bloodGroup : "")
            formData.append('language', this.state.language ? this.state.language : "")
            formData.append('timeZone', this.state.timezone ? this.state.timezone : "")

            this.props.saveProfileAction(formData)
        }
        
    }

    onTextInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        console.log("Event ", name + " Value " + value);
        let isError = { ...this.state.isError }
        switch(name) {
            case "fname":
                isError.fname = value.length < 2 ? "First name should be more than 2 characters": "";
                break;
            case "lname":
                isError.lname = value.length < 2 ? "Last name should be more than 2 characters": "";
                break;
            case "phoneNumber":
                isError.phoneNumber = 
                    (value.length < 10 || !value.match(new RegExp(/^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/))) ? "Phone number is invalid" : ""
                break;
            case "emailId":
                isError.emailId = 
                    (!value.match(new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) ? "Email id is invalid" : ""
                break;
            case "gender":
                isError.gender = value === "" ? "gender should not be left blank": ""
                break;
            case "dateOfBirth":
                isError.dateOfBirth = value === "" ? "Date of birth should not be left blank": ""
                break;
            case "bloodGroup":
                isError.bloodGroup = value === "" ? "Blood group should not be left blank": ""
                break;
            case "timezone":
                isError.timezone = value === "" ? "Timezone should not be left blank" : ""
                break;
            case "house_number":
                isError.house_number = value === "" ? "Please enter house number, area or street": ""
                break;
            case "city":
                isError.city = value === "" ? "City should not be left blank": ""
                break;
            case "state":
                isError.state = value === "" ? "State should not be left blank": ""
                break;
            case "country":
                isError.country = value === "" ? "Country should not be left blank": ""
                break;
            case "pincode":
                isError.pincode = value === "" ? "Pin code should not be left blank": ""
                break;
            default:
                break;
        }
        this.setState({
            ...this.state,
            isError,
            [name]: value
        });
    }

    getBase64Image = (file, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            callback(null, reader.result);
        }
        reader.onerror = function(error) {
            callback(error, null);
        }
    }

    buildFileSelector = () => {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('multiple', 'multiple');
        fileSelector.onchange = function (ev) {
            console.log("Files", ev.currentTarget.files[0], ev.currentTarget.files)
            const pickedImage = ev.currentTarget.files[0];
            this.getBase64Image(pickedImage, (err, file) => {
                if (!err) {
                    this.setState({
                        ...this.state,
                        pickedImage: pickedImage,
                        imagePreview: file
                    })
                }   
            });
            
        }
        return fileSelector;
    }

    fileSelector = this.buildFileSelector();
   
    launchFileUploader = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.fileSelector.click();
    }

    render() {
        const { bloodGroups, timezoneList, saveProfileAction } = this.props;

        return (
            <Container>
                <Row lg={12}>
                <Col lg={2}>
                    <Card className="left-card">
                        <CardTitle>
                            Account Kyc
                        </CardTitle>
                    </Card>
                </Col>
                <Col lg={10}>
                    <Card className="right-card">
                        <CardTitle>
                            <h3>Account</h3>
                            <div className="top-account-profile">
                                <div className="profile-img" onClick={this.launchFileUploader}>
                                    <Image source={this.state.avatar} styleClass="avatar" alt="file-upload" />
                                </div>
                                <div className="ac-flex">
                                    <Label>
                                        Enter first name
                                    </Label>
                                    <Input 
                                        type="text" 
                                        id="fname" 
                                        name="fname"
                                        className={this.state.isError.fname.length > 0 ? "is-invalid form-control" : "form-control"} 
                                        value={this.state.fname} 
                                        placeholder="First name"
                                        onChange={this.onTextInputChange} />
                                    {this.state.isError.fname.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.fname}</span>
                                    )}
                                </div>
                                <div className="ac-flex">
                                    <Label>
                                        Enter last name
                                    </Label>
                                    <Input 
                                        type="text" 
                                        id="lname" 
                                        name="lname"
                                        className={this.state.isError.lname.length > 0 ? "is-invalid form-control" : "form-control"} 
                                        value={this.state.lname} 
                                        placeholder="Last name"
                                        onChange={this.onTextInputChange} />
                                    {this.state.isError.lname.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.lname}</span>
                                    )}
                                </div>
                            </div>
                        </CardTitle>
                        <CardBody>
                            <div className="section">
                                <Row className="form-container">
                                    <Col className="items">
                                        <Label>
                                            Enter contact number
                                        </Label>
                                        <Input 
                                        type="text" 
                                        name="phoneNumber" 
                                        inputMode="tel"
                                        className={this.state.isError.phoneNumber.length > 0 ? "is-invalid form-control" : "form-control"} 
                                        value={this.state.phoneNumber}
                                        onChange={this.onTextInputChange} />
                                        {this.state.isError.phoneNumber.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.phoneNumber}</span>
                                        )}
                                    </Col>

                                    <Col className="items">
                                        <Label>
                                            Enter email
                                        </Label>
                                        <Input 
                                            type="email" 
                                            id="emailId"
                                            className={this.state.isError.emailId.length > 0 ? "is-invalid form-control" : "form-control"} 
                                            name="emailId" 
                                            value={this.state.emailId}  
                                            placeholder="Email ID"
                                            onChange={this.onTextInputChange} />
                                        {this.state.isError.emailId.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.emailId}</span>
                                        )}
                                    </Col>
                                    <Col className="items">
                                        <Label>
                                            Select gender
                                        </Label>
                                        <Input 
                                            name="gender" 
                                            type="select"
                                            value={this.state.gender}
                                            className={this.state.isError.gender.length > 0 ? "is-invalid form-control" : "form-control"} 
                                            placeholder="Select gender"
                                            onChange={this.onTextInputChange}>
                                            <option value="">Select your gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </Input>
                                        {this.state.isError.gender.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.gender}</span>
                                        )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="items">
                                        <Label>
                                            Date of birth
                                        </Label>
                                        <Input 
                                            type="date" 
                                            placeholder="Select date of birth" 
                                            name="dateOfBirth"
                                            className={this.state.isError.dateOfBirth.length > 0 ? "is-invalid form-control" : "form-control"} 
                                            value={this.state.dateOfBirth}
                                            onChange={this.onTextInputChange} />
                                        {this.state.isError.dateOfBirth.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.dateOfBirth}</span>
                                        )}
                                    </Col>
                                    <Col className="items">
                                        <Label>
                                            Select your blood group
                                        </Label>
                                        <Input 
                                            type="select" 
                                            id="bloodGroup" 
                                            name="bloodGroup"
                                            className={this.state.isError.bloodGroup.length > 0 ? "is-invalid form-control" : "form-control"} 
                                            value={this.state.bloodGroup}
                                            onChange={this.onTextInputChange}
                                            placeholder="Blood group">
                                            {bloodGroups.map(bg => <option key={bg.value} value={bg.value}>{bg.name}</option>)}
                                        </Input>
                                        {this.state.isError.bloodGroup.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.bloodGroup}</span>
                                        )}
                                    </Col>
                                    <Col className="items">
                                        <Label>
                                            Select your timezone
                                        </Label>
                                        <Input 
                                            type="select" 
                                            value={this.state.timezone}
                                            placeholder="Timezone"
                                            className={this.state.isError.timezone.length > 0 ? "is-invalid form-control" : "form-control"} 
                                            onChange={this.onTextInputChange} 
                                            name="timezone" 
                                            id="timezone">
                                            <option value="">Select your timezone</option>
                                            {timezoneList.map(timezone => <option key={timezone} value={timezone}>{timezone}</option>)}
                                        </Input>
                                        {this.state.isError.timezone.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.timezone}</span>
                                        )}
                                    </Col>
                                </Row>
                            </div>
                            <div className="section">
                                <Row className="form-container">
                                    <Col className="items">
                                        <Label>
                                            Enter House No / area / street
                                        </Label>
                                        <Input 
                                            type="text" 
                                            name="house_number"
                                            className={this.state.isError.house_number.length > 0 ? "is-invalid form-control" : "form-control"} 
                                            onChange={this.onTextInputChange}
                                            value={this.state.house_number} 
                                            placeholder="House No / area / street"  />
                                        {this.state.isError.house_number.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.house_number}</span>
                                        )}
                                    </Col>

                                    <Col className="items">
                                        <Label>
                                            Enter Colony / street / locality
                                        </Label>
                                        <Input 
                                            type="text" 
                                            id="colony" 
                                            name="colony"
                                            value={this.state.colony}
                                            onChange={this.onTextInputChange}
                                            placeholder="Colony / street / locally" />
                                    </Col>
                                    <Col className="items">
                                        <Label>
                                            Enter city
                                        </Label>
                                        <Input 
                                            type="text" 
                                            id="city" 
                                            name="city"
                                            className={this.state.isError.city.length > 0 ? "is-invalid form-control" : "form-control"} 
                                            value={this.state.city}
                                            onChange={this.onTextInputChange}
                                            placeholder="City" />
                                        {this.state.isError.city.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.city}</span>
                                        )}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="items">
                                        <Label>Enter state</Label>
                                        <Input 
                                            type="text" 
                                            id="state" 
                                            name="state"
                                            value={this.state.state}
                                            className={this.state.isError.state.length > 0 ? "is-invalid form-control" : "form-control"} 
                                            onChange={this.onTextInputChange}
                                            placeholder="State" />
                                        {this.state.isError.state.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.state}</span>
                                        )}
                                    </Col>
                                    <Col className="items">
                                        <Label>Enter country</Label>
                                        <Input 
                                            type="text" 
                                            id="country" 
                                            name="country"
                                            className={this.state.isError.country.length > 0 ? "is-invalid form-control" : "form-control"} 
                                            value={this.state.country}
                                            onChange={this.onTextInputChange} 
                                            placeholder="Country" />
                                        {this.state.isError.country.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.country}</span>
                                        )}
                                    </Col>
                                    <Col className="items">
                                        <Label>Enter pincode</Label>
                                        <Input 
                                            type="text" 
                                            id="pincode" 
                                            inputMode="numeric" 
                                            name="pincode"
                                            className={this.state.isError.pincode.length > 0 ? "is-invalid form-control" : "form-control"} 
                                            value={this.state.pincode}
                                            onChange={this.onTextInputChange} 
                                            placeholder="Pincode" />
                                        {this.state.isError.pincode.length > 0 && (
                                            <span className="invalid-feedback">{this.state.isError.pincode}</span>
                                        )}
                                    </Col>
                                </Row>
                            </div>

                            <div className="section">
                                <Row className="form-container">
                                    <Col className="items">
                                        <Label>
                                            Enter alternative number
                                        </Label>
                                        <Input 
                                            type="text" 
                                            id="alternate_number" 
                                            inputMode="tel" 
                                            name="alternate_number"
                                            value={this.state.alternate_number}
                                            onChange={this.onTextInputChange} 
                                            placeholder="Alternate phone number" />
                                    </Col>
                                    <Col className="items">
                                        <Label>
                                            Enter alternative email
                                        </Label>
                                        <Input 
                                            type="email" 
                                            id="alternate_email" 
                                            name="alternate_email"
                                            value={this.state.alternate_email}
                                            onChange={this.onTextInputChange} 
                                            placeholder="Alternate phone number" />
                                    </Col>
                                    <Col className="items">
                                        <Label>
                                            Select language
                                        </Label>
                                        <Input 
                                            type="select" 
                                            id="language" 
                                            name="language"
                                            value={this.state.language}
                                            onChange={this.onTextInputChange} 
                                            placeholder="Language">
                                            <LanguageList />
                                        </Input>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Button onClick={this.onFormSubmit} color="info" size="lg" block>Submit</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                </Row>
            </Container>
        )
    }
}