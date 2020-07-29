import React from 'react'
import { CardBody, ListGroup, ListGroupItem, Col, Card, CardTitle, CardFooter, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export function AccountKycStatus({ kycStatus }) {
    return (
        <Col lg={2}>
            <Card className="left-card">
                <CardTitle>
                    Account Kyc
                </CardTitle>
                <CardBody>
                    <ListGroup className="kyc-status-list-item">
                        <ListGroupItem color="success">
                            {`Level 1 kyc is verified`}
                        </ListGroupItem>
                        <ListGroupItem color="success">
                            {`Level 2 kyc is verified`}
                        </ListGroupItem>
                    </ListGroup>
                </CardBody>
                <CardFooter className="kyc-footer ">
                    <Button color="primary" tag="a" href="https://kycdapp.com" target="_blank">
                        Verify kyc
                    </Button> 
                </CardFooter>
            </Card>
        </Col>
    )
}
