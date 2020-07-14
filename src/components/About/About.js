import  React, {} from "react";
import { Element } from "react-scroll";
import { Container } from "reactstrap";
import ImageDetailButton from "../ImageDetailButton";
import aboutImages from "../../resources/icons/page.jpg"

export function About({}) {
    return (
        <React.Fragment>
            <Element name="about_us">
                <Container id="about">
                    <h2>About CureDapp</h2>
                    <ImageDetailButton 
                        image={aboutImages} 
                        imageClass="mr-3" 
                        imageRight={false} 
                        contentText="CureDapp, is a central hub for medical data exhange between Hospitals, government agencies, pharmacies, fitness center, reasearch organization, and insaurance companies. So that relevant parties, assured by you can easily access yor medical data on single network"
                        alt="Generic image" 
                        headingText="Your medical records secured on blockchain" />
                    <ImageDetailButton 
                        image={aboutImages} 
                        imageClass="mr-3" 
                        imageRight={true} 
                        contentText="CureDapp, keeps records of your daily miles you walked and step you took. Keeps you motivated by Global leader-board, and rewadrs you for Era Swap for task completions" 
                        alt="Generic image" 
                        headingText="Your fitness tracker powered on blockchain" />
                </Container>
            </Element>
        </React.Fragment>
    )
}