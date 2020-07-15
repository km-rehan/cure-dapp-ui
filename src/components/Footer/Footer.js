import React from 'react'
import "./Footer.css";
import {  Col,Row,Container,Figure } from "reactstrap";
import Image from "../Image";
import curelogo from "../../resources/icons/curelogo.png"
import fb from "../../resources/icons/fb.png";
import insta from "../../resources/icons/insta.png";
import twittr from "../../resources/icons/twittr.png";
import linkdin from "../../resources/icons/linkdin.png";
import youtube from "../../resources/icons/utube.png";

export function Footer({}) {
    return (
        (
            <footer>
               <Container className="">
                    <Row>
                        <Col className="subscribe">
                            <p>Subscribe for Newsletter</p>
                            <p>Sign up with email address to receive news and updates</p>
                        </Col>
                        <Col>
                            <div className="footer-input">
                                <input class="input-field-footer" type="text" placeholder="Email id" />                       
                                <button className="send-btn-footer">Send</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <figure className="figure">
                                <Image
                                    width={171}
                                    height={180}
                                    alt="Cure logo"
                                    styleClass="figure-img img-fluid"
                                    source={curelogo}
                                />
                                <div className="below-footer-txt">
                                    It is long estaiblished fact that reader can be distracted by a readable content
                                </div>
                            </figure>
                            
                        </Col>
                        <Col> 
                            <Row>
                                <Col>
                                    <h2>Menu</h2>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Privacy policy</li>
                                    </ul>
                                </Col>
                                <Col>
                                <h2>Home</h2>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Contact Us</li>
                                        <li>Privacy policy</li>
                                    </ul>
                                </Col>

                            </Row>
                            <Col> 
                                <ul className="footer-social-link">
                                    <li>
                                        <Image styleClass="social-img" source={fb} alt='fb' />
                                    </li>
                                    <li>
                                        <Image styleClass='social-img'  source={insta} alt='insta' />
                                    </li>
                                    <li>
                                        <Image styleClass='social-img' source={twittr} alt='twitter' />
                                    </li>
                                    <li>
                                        <Image styleClass='social-img' source={linkdin} alt='linkdin' />
                                    </li>
                                    <li>
                                        <Image styleClass='social-img' source={youtube} alt='youtube' />
                                    </li>
                                </ul>
                            </Col>
                        </Col>

                      
                       
                    </Row>
                   
               </Container>
            </footer>
        )
    )
}
