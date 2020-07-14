import React from 'react'
import { Row, Col } from "reactstrap";
import Image from "../Image";
import "./ImageDetail.css";

export function ImageDetail({ image, imageClass, alt, imageRight, contentText }) {
    return (
        <React.Fragment>
             {
                imageRight ?
                ( 
                    <Row>
                      <Col>
                        <p className="content">{contentText}</p>
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
                        <p className="content">{contentText}</p>
                      </Col>
                    </Row>
                )
            }
        </React.Fragment>
           
    )
}
