import React, { Component } from 'react'
import { 
    Card,
    CardTitle,
    CardBody,
    Row,
    Col,
    Input,
    Label
 } from "reactstrap";

export class DoctorsBasicInformation extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        
        const { values, handleChange, profile } = this.props;

        return (
                <Card className="right-card">
                    <CardTitle>
                        <h3>{`Hello Dr.${profile.firstname} ${profile.lastname} lets create a profile for you`}</h3>
                    </CardTitle>
                    <CardBody>
                        <div className="section">
                            <Col className="items">
                                <Label>
                                    Enter specialization
                                </Label>
                                <Input 
                                type="text"  
                                inputMode="text"
                                className={values.isError.specialization.length > 0 ? "is-invalid form-control" : "form-control"} 
                                value={values.specialization}
                                onChange={handleChange('specialization')} />
                                {values.isError.specialization.length > 0 && (
                                    <span className="invalid-feedback">{formDate.isError.specialization}</span>
                                )}
                            </Col>

                            <Col className="items">
                                <Label>
                                    Enter city
                                </Label>
                                <Input 
                                    type="text" 
                                    id="city"
                                    className={values.isError.city.length > 0 ? "is-invalid form-control" : "form-control"}
                                    value={values.city}  
                                    placeholder="City"
                                    onChange={handleChange("city")} />
                                {formDate.isError.city.length > 0 && (
                                    <span className="invalid-feedback">{values.isError.city}</span>
                                )}
                            </Col>
                        </div>
                    </CardBody>
                </Card>
        )
    }
}
