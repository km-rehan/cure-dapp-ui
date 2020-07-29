import React, { Component } from "react";
import {
    Card,
    CardTitle,
    CardBody,
    Row,
    Col,
    Input,
    Label
} from "reactstrap";

export class DoctorPractice extends Component {

    constructor() {

    }

    componentDidMount() {

    }

    render() {
        const  { values, handleChange } = this.props;
        return (
            <Card className="right-card">
                <CardTitle>
                    <h3>Connect a  practice</h3>
                </CardTitle>
                <CardBody>
                    <div className="section">
                        <Col className="items">
                           <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="own_establishment" onChange={handleChange("isOwnEstablishment")} value={values.isOwnEstablishment} />{' '}
                                    I Own an establishment
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col className="items">
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="not_own_establishment" onChange={handleChange("isNotOwnEstablishment")} value={values.isNotOwnEstablishment} />{' '}
                                    I visit an establishment
                                </Label>
                            </FormGroup>
                        </Col>
                        <h3>Note: You can add multiple establishment one by one</h3>
                    </div>
                </CardBody>
            </Card>
        );
    }
}