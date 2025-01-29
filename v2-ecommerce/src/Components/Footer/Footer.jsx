import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
    <footer>
        <p>&copy; 2025 Nate Sherer All Rights Reserved To ThriftTech</p>
        <p>
        <a href="https://www.instagram.com/roadtohire/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> 
        </a>
        </p>
        <p>
        <u>Code Of Conduct</u>
        </p>
        <p>
        <u>Private Policy</u>
        </p>
        <p>
        <a href="https://www.linkedin.com/in/nate-sherer-072472330/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> 
        </a>
        </p>
    </footer>
    );
};

export default Footer;