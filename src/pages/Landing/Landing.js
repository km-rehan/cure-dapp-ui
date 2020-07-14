import React from 'react'
import { Container } from 'reactstrap'
import Banner from '../../components/Banner'
import Vision from "../../components/Vision"
import About from "../../components/About";
import Solutions from "../../components/Solutions";

export function Landing({}) {
    return (
        <div className="App-header">
            <Banner />

            <div className="maindiv">
                <Container>
                    <Vision />
                </Container>
                <About />
                <Solutions/>
            </div>
        </div>
    )
}
