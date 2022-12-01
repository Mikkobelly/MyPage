import React from "react";
import headerImg from "../images/header.jpg";
import headerImgMobile from "../images/headerMobile.jpg";

const Header = () => {
    return <header id="headerSection">
        <div className="navbar">
            <ul>
                <li><a href="#headerSection">Home</a></li>
                <li><a href="#aboutSection">About</a></li>
                <li><a href="#projectSection">Project</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="header-container">
            <div>
                <img src={headerImg} className="header-image"></img>
                <img src={headerImgMobile} className="header-image-mobile"></img>
            </div>
            <div className="header-content">
                <p className="portfolio">Portfolio</p>
                <h1 className="bold-font">Miki Akuta</h1>
                <p className="job-title medium-font">Web Developer</p>
            </div>
        </div>
    </header>
}

export default Header;