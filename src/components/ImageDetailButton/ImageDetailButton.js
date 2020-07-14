import React from "react";
import Image from "../Image";
import { Row, Col, Button } from "reactstrap";


export function ImageDetailButton({ imageRight, image, imageClass, contentText, alt, headingText }) {
    
    return (
        <React.Fragment>
            {
                imageRight ?
                (
                    <Row>
                        <Col>
                            <h5 className="abouth">{headingText}</h5>
                            <p>{contentText}</p>
                            <Button color="primary">Read more</Button>
                        </Col>
                        <Col>
                            <Image source={image} styleClass={imageClass} alt={alt} />
                        </Col>
                    </Row>
                ):
                (
                    <Row>
                        <Col>
                            <Image source={image} styleClass={imageClass} alt={alt} />
                        </Col>
                        <Col>
                            <h5 className="abouth">{headingText}</h5>
                            <p>{contentText}</p>
                            <Button color="primary">Read more</Button>
                        </Col>
                    </Row>
                )
            }
        </React.Fragment>
    )
}