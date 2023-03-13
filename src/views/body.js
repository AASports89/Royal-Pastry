import React from "react";
import Body from "../components/Body";
import Precision from "../components/Precision";
import Monitor from "../components/Monitor";
import Section from "../components/Section";

export default function Body_View() {

    return (
        <React.Fragment>
            
                    <Precision />
                    <div className="container" id="divider-1"></div>
                    <Monitor />
                    <div className="container" id="divider-1"></div>
                    <Section />
                    <div className="container" id="divider-1"></div>
                    <Body />
                    <div className="container" id="divider-1"></div>

        </React.Fragment>
    );
}