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



export class DoctorEstablishmentTimings extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
           <Card className="right-card">
                    <CardTitle>
                        <h3>Establishment time</h3>
                    </CardTitle>
                    <CardBody>
                        <div className="section">
                            <Col className="items">
                                <Label>
                                    Days
                                </Label>
                                <Chips
                                    value={value.days}
                                    onChange={handleChange("days")}
                                    suggestions={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
                                />
                                {
                                    values.isError.days.length > 0 && (
                                    <span className="invalid-feedback">{values.isError.colleges}</span>
                                )}
                            </Col>

                            <h2>
                                Section 1
                            </h2>
                            <Col className="items">
                                <Row>
                                    <Col>
                                        <Label>
                                            From
                                        </Label>
                                        <Input 
                                            type="time" 
                                            className={values.isError.section1TimeFrom.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={values.section1TimeFrom}  
                                            placeholder="City"
                                            onChange={handleChange("section1TimeFrom")} />
                                        {values.isError.section1TimeFrom.length > 0 && (
                                            <span className="invalid-feedback">{values.isError.section1TimeFrom}</span>
                                        )}
                                    </Col>
                                    <Col>
                                        <Label>
                                            To
                                        </Label>
                                        <Input 
                                            type="time" 
                                            className={values.isError.section1TimeTo.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={values.section1TimeTo}  
                                            placeholder="City"
                                            onChange={handleChange("section1TimeTo")} />
                                        {values.isError.section1TimeTo.length > 0 && (
                                            <span className="invalid-feedback">{values.isError.section1TimeTo}</span>
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                            <h2>
                                Section 2
                            </h2>
                            <Col className="items">
                                <Row>
                                    <Col>
                                        <Label>
                                            From
                                        </Label>
                                        <Input 
                                            type="time" 
                                            className={values.isError.section2TimeFrom.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={values.section2TimeFrom}  
                                            placeholder="City"
                                            onChange={handleChange("section2TimeFrom")} />
                                        {values.isError.section2TimeFrom.length > 0 && (
                                            <span className="invalid-feedback">{values.isError.section2TimeFrom}</span>
                                        )}
                                    </Col>
                                    <Col>
                                        <Label>
                                            To
                                        </Label>
                                        <Input 
                                            type="time" 
                                            className={values.isError.section2TimeTo.length > 0 ? "is-invalid form-control" : "form-control"}
                                            value={values.section2TimeTo}  
                                            placeholder="City"
                                            onChange={handleChange("section2TimeTo")} />
                                        {values.isError.section2TimeTo.length > 0 && (
                                            <span className="invalid-feedback">{values.isError.section2TimeTo}</span>
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </CardBody>
                </Card>
        )
    }
}
