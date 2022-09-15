import React from "react";
import myLogo from "../images/my-logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://trajanonj-portfolio.netlify.app" target="_blank"><img className="my-logo" src={myLogo}/></a>
        </footer>
    );
};
export default Footer;