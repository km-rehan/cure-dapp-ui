import React from 'react';
import ImageDetail from '../ImageDetail';
import placeHolderImage from "../../resources/icons/page.jpg";
import "./Vision.css";

export function Vision() {
    return (
        <React.Fragment>
            <h1>
                Vision
            </h1>
            <p>
                It is a long estaiblished fact that a reader will be distract
            </p>
            <ImageDetail image={placeHolderImage} imageClass="mr-3" imageRight={false} contentText="It is a long estaiblished fact that a reader will be distract" alt="Generic placeholder" />
            <ImageDetail image={placeHolderImage} imageClass="mr-3" imageRight={true} contentText="Secured network for your medical records and report, easily accessible to doctors." alt="Generic placeholder" />
            <ImageDetail image={placeHolderImage} imageClass="mr-3" imageRight={false} contentText="Insuring delivery of authentic medicine'c to medical stores and patient without any inconsistencies" alt="Generic placeholder" />
        </React.Fragment>
    )
}
