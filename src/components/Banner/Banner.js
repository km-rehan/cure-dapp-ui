import  React, { useState, useEffect } from "react";
import { Media } from "reactstrap";
import Image from "../Image";
import bannerImg  from "../../resources/icons/doctor.jpg";
import { Element } from "react-scroll";
import "./Banner.css";


export function Banner({ children }) {
    return (
        <Element name="top">
            <header>
                <Media>
                    <Image source={bannerImg} styleClass="navimg" alt="banner_img" />
                </Media>
            </header>
        </Element>
    )
}