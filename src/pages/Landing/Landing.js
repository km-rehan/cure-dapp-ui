import React from 'react'
import "./Landing.css";
import Banner from '../../components/Banner'
import Vision from "../../components/Vision"
import About from "../../components/About";
import Solutions from "../../components/Solutions";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";

export function Landing({}) {
    return (
        <div className="App">
            <Banner />
            <div className="App-header">
                <div className="maindiv">
                    
                    <Vision />
                    <About />
                    <Solutions/>
                    <Blog />
                </div>
            </div>
            <Footer />
        </div>
    )
}
