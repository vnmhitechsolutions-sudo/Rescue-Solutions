import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import './Footer.css'; // Keep the CSS import

// NOTE: Removed unnecessary imports for Terms and Privacy components.
// They are used in App.js for routing, not imported here.

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content section-container">
                {/* Add the 'brand-col' class to this div */}
                <div className="footer-col brand-col"> 
                    <div className="logo">VNM Hitech Solutions</div>
                    <p>Empowering businesses with innovative technology solutions and creating platforms that connect talent with opportunities.</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/vnm-hitech-solutions/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={24} color="#6a00ff" strokeWidth={2.5} /></a>
                        <a href="https://www.instagram.com/vnmhitechsolutions/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={24} color="#6a00ff" strokeWidth={2.5} /></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="mailto:info@vnmhitechsolutions.com">info@vnmhitechsolutions.com</a></li>
                        <li>+91 9677757888</li>
                        <li>19/2 VA Plaza, 80 Feet road, Sengunthapuram, Karur, Tamil Nadu 639002</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><Link to="/terms">Terms and Conditions</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 VNM Hitech Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;