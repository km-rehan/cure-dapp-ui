import "./Account.css";
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, Card, CardTitle, CardBody, CardFooter } from "reactstrap";
import Image from "../../components/Image";
import defaultImage from "../../resources/icons/img_avatar.png";

export function Account({ user }) {

    const [state, setState] = useState({
        pickedImage: defaultImage,
        imagePreview: null
    })

    const getBase64Image = (file, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
            callback(null, reader.result);
        }
        reader.onerror = function(error) {
            callback(error, null);
        }
    }

    const buildFileSelector = () => {
        const fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.setAttribute('multiple', 'multiple');
        fileSelector.onchange = function (ev) {
            console.log("Files", ev.currentTarget.files[0], ev.currentTarget.files)
            const pickedImage = ev.currentTarget.files[0];
            getBase64Image(pickedImage, (err, file) => {
                if (!err) {
                    setState({
                        pickedImage: pickedImage,
                        imagePreview: file
                    }) 
                }   
            });
            
        }
        return fileSelector;
    }

    const fileSelector = buildFileSelector();


    useEffect(() => {
        //const imagePreview = getBase64Image(defaultImage.file)
        setState({
            imagePreview: defaultImage
        })
    }, [])

   
    const launchFileUploader = (e) => {
        e.stopPropagation();
        e.preventDefault();
        fileSelector.click();
    }


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
                            <div className="profile-img" onClick={launchFileUploader}>
                                <Image source={state.imagePreview} styleClass="avatar" alt="file-upload" />
                            </div>
                            <div className="ac-flex">
                                <input className='ac-name-field' type="text" id="fname" name="fname" placeholder="Name" />
                            </div>
                        </div>
                    </CardTitle>
                    <CardBody>
                    <div className="section">
                            <Row className="form-container">
                                <Col className="items">
                                    <input  type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone no." />
                                </Col>

                                <Col className="items">
                                    <input  type="email" id="emailId" name="emailId" placeholder="Email ID" />
                                </Col>
                                <Col className="items">
                                    <input  type="text" id="gender" name="gender" placeholder="Gender" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="items">
                                    <input  type="text" id="dateOfBirth" name="dateOfBirth" placeholder="Date of birth" />
                                </Col>
                                <Col className="items">
                                    <input  type="text" id="bloodGroup" name="bloodGroup" placeholder="Blood group" />
                                </Col>
                                <Col className="items">
                                    <input  type="text" id="timezone" name="timezone" placeholder="Timezone" />
                                </Col>
                            </Row>
                        </div>
                        <div className="section">
                            <Row className="form-container">
                                <Col className="items">
                                    <input  type="text" id="house_number" name="house_number" placeholder="House No / area / street" />
                                </Col>

                                <Col className="items">
                                    <input  type="text" id="colony" name="colony" placeholder="Colony / street / locally" />
                                </Col>
                                <Col className="items">
                                    <input  type="text" id="city" name="city" placeholder="City" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="items">
                                    <input  type="text" id="state" name="state" placeholder="State" />
                                </Col>
                                <Col className="items">
                                    <input  type="text" id="country" name="country" placeholder="Country" />
                                </Col>
                                <Col className="items">
                                    <input  type="text" id="pincode" name="pincode" placeholder="Pincode" />
                                </Col>
                            </Row>
                        </div>

                        <div className="section">
                            <Row className="form-container">
                                <Col className="items">
                                    <input  type="text" id="fname" name="alternate_number" placeholder="Alternate phone number" />
                                </Col>
                                <Col className="items">
                                    <input  type="text" id="fname" name="language" placeholder="Language" />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Button color="info" size="lg" block>Submit</Button>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            </Row>
            
        </Container>
    )
}