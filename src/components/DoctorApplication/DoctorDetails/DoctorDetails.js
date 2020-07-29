import React, { Component } from 'react'
import {
    InputGroup,
    InputGroupAddon,
    Card,
    CardTitle,
    CardBody,
    Row,
    Col,
    Input,
    Label
} from 'reactstrap'

export class DoctorDetails extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
             <Card className="right-card">
                    <CardTitle>
                        <h3>Doctor details</h3>
                    </CardTitle>
                    <CardBody>
                        <div className="section">
                            <Col className="items">
                                <Label>
                                    Consultation fees
                                </Label>
                                <InputGroup size="sm">
                                <InputGroupAddon addonType="prepend">ES</InputGroupAddon>
                                    <Input 
                                    type="number"  
                                    inputMode="numeric"
                                    className={values.isError.consultation.length > 0 ? "is-invalid form-control" : "form-control"} 
                                    value={values.consultation}
                                    onChange={handleChange('consultation')} />
                                    {values.isError.consultation.length > 0 && (
                                        <span className="invalid-feedback">{formDate.isError.consultation}</span>
                                    )}
                                </InputGroup>
                            </Col>
                        </div>
                    </CardBody>
                </Card>
        )
    }
}
