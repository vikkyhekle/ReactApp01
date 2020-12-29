import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/image/web1.jpg";
import Common from './Common';

const Home = () => {
    return(
        <>
          <Common 
            name="Grow your game with"
            imgsrc={web}
            visit="/service"
            btname="Get Started" />
        </>
    );
};

export default Home;