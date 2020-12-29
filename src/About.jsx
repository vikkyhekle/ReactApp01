import React from 'react';
import Common from './Common';
import web from "../src/image/web2.jpg";

const About = () => {
    return(
        <>
            <Common name="Welcome to About page"
            imgsrc={web}
            visit="/contact"
            btname="Contact Now" />
        </>
    );
};

export default About;