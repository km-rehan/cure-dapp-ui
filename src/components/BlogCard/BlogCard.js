import React from "react";
import { Col, Row, Card, CardBody, CardImg, FormGroup, Input } from "reactstrap"
import Image from "../Image";
import "./BlogCard.css";


export function BlogCard ({ cardImage, mainImg }) {

    return (
        <Col>
            <Card className="blog-card">
                <CardImg className="blog-card-img" top src={cardImage} />
                <CardBody>
                    <Row>
                        <Col xs lg="3">
                            <Image width="40" height="40" source={mainImg} />
                        </Col>
                        <Col xs lg="9">
                            <FormGroup>
                                <Input type="textarea" name="textarea" aria-label="with textarea" />
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )

}