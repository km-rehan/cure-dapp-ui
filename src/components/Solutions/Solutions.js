import React from 'react';
import { Container, Row, Col } from "reactstrap";
import SolutionItem from "../SolutionItem";
import placeholderImage from "../../resources/icons/page.jpg"

export function Solutions({}) {
    return (
        <Container>
            <Row>
                <Col>
                    <h3 className="text-center">Our Solutions</h3>
                </Col>
            </Row>
            <h6 className="text-center">Key factor benefits of CureDapp</h6>
            <Row>
                <SolutionItem image={placeholderImage} alt="Generic placeholder" contentText="All Your fitness stats and medical recors in single app" />
                <SolutionItem image={placeholderImage} alt="Generic placeholder" contentText="All Your data stored to Secured & Decentralized network" />
                <SolutionItem image={placeholderImage} alt="Generic placeholder" contentText="Your data are easily accessible by your relevant third parties" />
                <SolutionItem image={placeholderImage} alt="Generic placeholder" contentText="No complication like centralized platforms, using P2P mode" />
            </Row>
            <Row>
                 <SolutionItem image={placeholderImage} alt="Generic placeholder" contentText="Connecting Pharmacy, Hospitals, Govt Agencies and You" />
                <SolutionItem image={placeholderImage} alt="Generic placeholder" contentText="Compete on Global Leader-board & Stay Fit, Stay Healthy" />
                <SolutionItem image={placeholderImage} alt="Generic placeholder" contentText="Blood Test by using specialists using special Blood testing devices" />
                <SolutionItem image={placeholderImage} alt="Generic placeholder" contentText="Patients get the total control over their health information" />
            </Row>
        </Container>
    )
}
