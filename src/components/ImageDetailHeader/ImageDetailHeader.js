import React from "react";
import "./ImageDetailHeader.css";
import Image from "../Image";
import { Row, Col } from "reactstrap";

export function ImageDetailHeader({ imageRight, imageClass, source, alt, headings, contentTextMajor, contentTextMinor }) {
    return (
       <React.Fragment>
          {imageRight ? ( 
          <Row>
            <Col>
              <h3>{headings}</h3>
              <p>{contentTextMajor}</p>
              <p>{contentTextMinor}</p>
            </Col>
            <Col>
              <Image
                  styleClass={imageClass}
                  source={source}
                  alt={alt}
                />
            </Col>
          </Row>): ( 
          <Row>
            <Col>
              <Image
                  styleClass={imageClass}
                  source={source}
                  alt={alt}
                />
            </Col>
            <Col>
              <h3>{headings}</h3>
              <p>{contentTextMajor}</p>
              <p>{contentTextMinor}</p>
            </Col>
            <br />
          </Row>)

          }
          <br/>
       </React.Fragment> 
    )
}