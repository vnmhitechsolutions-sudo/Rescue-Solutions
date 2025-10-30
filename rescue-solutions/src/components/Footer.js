import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content section-container">
                {/* Brand Column (Reordered for Mobile View) */}
                <div className="footer-col brand-col"> 
                    
                    {/* 1. Logo/Title moved to the top */}
                    <div className="logo">VNM Hitech Solutions</div>
                    
                    {/* 2. Paragraph follows the Logo */}
                    <p>Empowering businesses with innovative technology solutions and creating platforms that connect talent with opportunities.</p>
                    
                    {/* 3. Social Icons follow the Paragraph */}
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/vnm-hitech-solutions/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Linkedin size={24} color="#6a00ff" strokeWidth={2.5} /></a>
                        <a href="https://www.instagram.com/vnmhitechsolutions/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={24} color="#6a00ff" strokeWidth={2.5} /></a>
                    </div>
                </div>
                {/* Contact Column */}
                <div className="footer-col">
                    <h4>Contact</h4>
                    {/* ... rest of Contact content ... */}
                    <ul>
                        <li><a href="mailto:info@vnmhitechsolutions.com">info@vnmhitechsolutions.com</a></li>
                        <li>+91 9677757888</li>
                        <li>19/2 VA Plaza, 80 Feet road, Sengunthapuram, Karur, Tamil Nadu 639002</li>
                    </ul>
                </div>
                {/* Legal Column */}
                <div className="footer-col">
                    <h4>Legal</h4>
                    {/* ... rest of Legal content ... */}
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