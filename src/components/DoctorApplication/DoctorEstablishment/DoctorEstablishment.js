import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    CardBody,
    Row,
    Col,
    Input,
    Label
} from "reactstrap";

export class DoctorEstablishment extends Component {
    
    render() {
        const {values, handleChange} = this.props;
        return (
             <Card className="right-card">
                    <CardTitle>
                        <h3>Establishment basic details</h3>
                    </CardTitle>
                    <CardBody>
                        <div className="section">
                            <Col className="items">
                                <Label>
                                    Enter establishment name
                                </Label>
                                <Input 
                                type="text"  
                                inputMode="text"
                                className={values.isError.establishmentName.length > 0 ? "is-invalid form-control" : "form-control"} 
                                value={values.establishmentName}
                                onChange={handleChange('establishmentName')} />
                                {values.isError.establishmentName.length > 0 && (
                                    <span className="invalid-feedback">{values.isError.establishmentName}</span>
                                )}
                            </Col>

                            <Col className="items">
                                <Label>
                                    Enter establishment city
                                </Label>
                                <Input 
                                    type="text" 
                                    className={values.isError.establishmentCity.length > 0 ? "is-invalid form-control" : "form-control"}
                                    value={values.establishmentCity}  
                                    placeholder="Establishment City"
                                    onChange={handleChange("establishmentCity")} />
                                {values.isError.establishmentCity.length > 0 && (
                                    <span className="invalid-feedback">{values.isError.establishmentCity}</span>
                                )}
                            </Col>

                            <Col className="items">
                                <Label>
                                    Enter establishment email
                                </Label>
                                <Input 
                                    type="text" 
                                    className={values.isError.establishmentEmail.length > 0 ? "is-invalid form-control" : "form-control"}
                                    value={values.establishmentEmail}  
                                    placeholder="City"
                                    onChange={handleChange("establishmentEmail")} />
                                {values.isError.establishmentEmail.length > 0 && (
                                    <span className="invalid-feedback">{values.isError.establishmentEmail}</span>
                                )}
                            </Col>
                            <Col className="items">
                                <Label>
                                    Enter establishment contact number
                                </Label>
                                <Input 
                                    type="tel" 
                                    className={values.isError.establishmentContact.length > 0 ? "is-invalid form-control" : "form-control"}
                                    value={values.establishmentContact}  
                                    placeholder=""
                                    onChange={handleChange("establishmentContact")} />
                                {values.isError.establishmentContact.length > 0 && (
                                    <span className="invalid-feedback">{values.isError.establishmentContact}</span>
                                )}
                            </Col>
                            <Col className="items">
                                <Label>
                                    Enter establishment address
                                </Label>
                                <Input 
                                    type="tel" 
                                    className={values.isError.establishmentAddress.length > 0 ? "is-invalid form-control" : "form-control"}
                                    value={values.establishmentAddress}  
                                    placeholder=""
                                    onChange={handleChange("establishmentAddress")} />
                                {values.isError.establishmentAddress.length > 0 && (
                                    <span className="invalid-feedback">{values.isError.establishmentAddress}</span>
                                )}
                            </Col>
                        </div>
                    </CardBody>
                </Card>
        )
    }
}
