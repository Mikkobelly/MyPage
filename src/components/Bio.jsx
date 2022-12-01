import React from "react";
import bioImg from "../images/bioImg.jpg";
import swanImg from "../images/swan.jpg";

const Bio = () => {
    return <div id="aboutSection" className="bio-container">
        <div>
            <h2 className="section-title medium-font">Bio</h2>
            <p className="bio-content grey-text">I am an <i>advnenturous</i> and <i>creative</i> web developer from Japan. I have created projects with both frontend and backend technologies. I was a professional ballet dancer for 8 years during which I enjoyed learning, evolving and making innovative work.
                Now as a web developer I continue being <i>inventive</i> in a differernt form of <i>Art</i>.
                I believe that web developers will <i>shape our future</i> and the way technology is used to better the world.</p>
        </div>
        <div className="bio-image-container">
            <img srcSet={bioImg} className="bio-image" />
            <img src={swanImg} className="swan-image" />
        </div>
    </div>
}

export default Bio;