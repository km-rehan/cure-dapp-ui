import  React, { useState, useEffect } from "react";
import { Media } from "reactstrap";
import Image from "../Image";
import bannerImg  from "../../resources/icons/woman-discussing-a-lesson.jpg";
import { Element } from "react-scroll";


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