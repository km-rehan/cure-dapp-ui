import  React, { useState, useEffect } from "react";
import { Media } from "reactstrap";
import Image from "../Image";
import bannerImg  from "../../resources/icons/woman-discussing-a-lesson.jpg";


export function Banner({ children }) {
    return (
        <header>
            <Media>
                <Image source={bannerImg} styleClass="navimg" alt="banner_img" />
            </Media>
        </header>
    )
}