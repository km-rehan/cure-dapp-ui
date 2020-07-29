import React, { Component } from 'react'
import Chips, { Chip } from "react-chips";
import {
    Card,
    CardTitle,
    CardBody,
    Row,
    Col,
    Input,
    Label
} from "reactstrap";

export class DoctorsEducationInformation extends Component {

    state = {
    }
    
    render() {
        const { values, handleChange } = this.props;
        return (
            <Card className="right-card">
                <CardTitle>
                    <h3>Enter your education information</h3>
                </CardTitle>
                <CardBody>
                    <div className="section">
                        <Col className="items">
                            <Label>
                                Enter your degrees
                            </Label>
                            <Chips
                                value={value.degrees}
                                onChange={handleChange("specialization")}
                            />
                            {
                                values.isError.degrees.length > 0 && (
                                <span className="invalid-feedback">{values.isError.degrees}</span>
                            )}
                        </Col>

                        <Col className="items">
                            <Label>
                                Enter your colleges
                            </Label>
                            <Chips
                                value={value.colleges}
                                onChange={handleChange("colleges")}
                            />
                            {
                                values.isError.colleges.length > 0 && (
                                <span className="invalid-feedback">{values.isError.colleges}</span>
                            )}
                        </Col>
                        <Col className="items">
                            <Label>
                                Enter years of experience
                            </Label>
                            <Input 
                                type="number" 
                                id="experience"
                                value={values.yearOfExperience}  
                                placeholder="Experience"
                                onChange={handleChange("yearOfExperience")} />
                            {values.isError.yearOfExperience.length > 0 && (
                                <span className="invalid-feedback">{values.isError.yearOfExperience}</span>
                            )}
                        </Col>
                    </div>
                </CardBody>
            </Card>
        );
    }
}
