import React from 'react';
import "./Blog.css";
import { Element } from "react-scroll";
import { Container, Col, Row } from "reactstrap";
import BlogCard from "../BlogCard";
import placeHolderImage from "../../resources/icons/page.jpg";

export function Blog({ }) {
    return (
        <React.Fragment>
            <Element name="blog_section">
                <Container id="blog_section">
                    <Row>
                        <Col>
                            <h2 id="blogs">Our blogs</h2>
                            <p>Like "Our Clients" and "Our Blogs" also add "Our Decentralized Platforms" to promote other utility platforms</p><br/>
                        </Col>
                    </Row>
                    <Row>
                        <BlogCard cardImage={placeHolderImage} mainImg={placeHolderImage} />
                        <BlogCard cardImage={placeHolderImage} mainImg={placeHolderImage}/>
                        <BlogCard cardImage={placeHolderImage} mainImg={placeHolderImage}/>
                    </Row>
                </Container>
            </Element>
        </React.Fragment>
    )
}
