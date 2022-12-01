import React from "react";
import contactImg from "../images/contact.jpg"
import contactImgMobile from "../images/contactMobile.jpg"

const Contact = () => {
    return <div id="contactSection">
        <h2 className="contact medium-font section-title">Contact</h2>
        <div className="contact-container">
            <div className="contact-img-container">
                <img className="contact-image" src={contactImg} />
                <img className="contact-image-mobile" src={contactImgMobile} />
            </div>
            <div className="contact-info-container">
                <p>Email:<a href="mailto:mikiakuta0529@gmail.com" class="email">mikiakuta0529@gmail.com</a></p>
                <p> Phone: 07710983126</p>
            </div>
        </div>
        <div className="footer-container">
            <div class="icons-container">
                <a href="https://www.linkedin.com/in/miki-akuta-a618b2248/"><i
                    class="fa-brands fa-linkedin media-icon"></i></a>
                <a href="https://github.com/Mikkobelly"><i
                    class="fa-brands fa-square-github media-icon"></i></a>
                <a href="https://www.instagram.com/mikiakuta/"><i
                    class="fa-brands fa-square-instagram media-icon"></i></a>
            </div>
            <footer class="footer">
                &copy; Miki Akuta
            </footer>
        </div>
    </div>
}

export default Contact;