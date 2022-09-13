// import React from "react";
import myLogo from "../images/my-logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://trajanonj-portfolio.netlify.app" target="_blank"><img className="my-logo" src={myLogo} width="85rem"/></a>
        </footer>
    );
};