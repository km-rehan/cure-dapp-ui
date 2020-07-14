import React from 'react';
import Image from '../Image';
import { Col } from "reactstrap";
import "./SolutionItem.css"

export function SolutionItem({ image, alt, contentText }) {
    return (
        <Col>
            <Image width="164" height="164" styleClass="solimg" source={image} alt={alt} />
            <p>{contentText}</p>
        </Col>
    )
}
