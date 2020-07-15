import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from "reactstrap";
import SolutionItem from "../SolutionItem";
import placeholderImage from "../../resources/icons/page.jpg";
import ImageDetailHeader from '../ImageDetailHeader';

export function Solutions({}) {
    const [state, setState] = useState({
        imageDetails: [
            {
                imageToRight: false,
                heading: "Your data will travel shouldn't your security",
                contentTextMajor: `CureDapp uses a blockchain to create a user-focused electronic health record and maintain a
                single true version of the user's data.`,
                contentTextMinor: `CureDapp by implementing blockchain will transform the healthcare big data ecosystem by enabling data flow in a secured and structured way, to create patient-centric health information, management, and utilization hub.`,
                alt: "Generic placeholder"
            },
            {
                imageToRight: true,
                heading: "Your data will travel shouldn't your security",
                contentTextMajor: `To make the supply chain less complex and more efficient, CureDapp tracks the complete journey of the supply chain using IOT Devices. IOT tenderly connect all physical objects in the global internet-based infrastructure for the purpose of exchanging information and communication with IOT, CureDApp aims
                to support intelligent identification, location, tracking, monitoring and management.`,
                contentTextMinor: "",
                alt: "Generic placeholder"
            }
        ]
    })
    return (
        <React.Fragment>
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
        <Container>
            {state.imageDetails.map(imageDetail => <ImageDetailHeader 
                source={placeholderImage} 
                alt={imageDetail.alt} 
                imageClass="mr-3" 
                imageRight={imageDetail.imageToRight} 
                headings={imageDetail.heading} 
                contentTextMajor={imageDetail.contentTextMajor} 
                contentTextMinor={imageDetail.contentTextMinor} />)}
        </Container>
        </React.Fragment>
    )
}
