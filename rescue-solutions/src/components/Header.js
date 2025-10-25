import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

// Import the logo image (assuming it's relative to components/Header.js)
// Path: components/Header.js is in src/components/, so images are in src/images/ or public/images/
// Using the public path is safest if the image is in public/images/logo1.png
const logo = '../images/vnm logo.png';

const Header = () => {
    // State to toggle the mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);
    
    // Tracks the last target for the About Us link (initial target is 'about')
    const [aboutTarget, setAboutTarget] = useState('about');
    
    // Hook to programmatically navigate between routes
    const navigate = useNavigate();

    // Function to toggle the mobile menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Helper function to close menu (used by external links)
    const handleNavClick = () => {
        setIsOpen(false);
        // Force scroll to top when navigating to a new route
        window.scrollTo(0, 0);
    }
    
    // REUSABLE HANDLER: Navigates to the root path and then scrolls with an offset.
    const handleScrollLinkClick = (e, sectionId) => {
        setIsOpen(false);
        e.preventDefault(); 
        
        // Define the fixed header's height (for scroll offset)
        const HEADER_HEIGHT = 80; 
        
        // 1. Navigate to the root path
        navigate('/');
        
        // 2. Wait a moment for the new page content to render before scrolling
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                // Calculate the position: Element's distance from top + current scroll position - header height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - HEADER_HEIGHT;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100); 
    };
    
    // HANDLER: Toggles the About Us link target between #home and #about, and performs scroll.
    const handleAboutClick = (e) => {
        setIsOpen(false); 
        e.preventDefault(); 
        
        const targetId = aboutTarget === 'about' ? 'about' : 'home';
        
        // Use the reusable handler to ensure navigation back to '/' first
        handleScrollLinkClick(e, targetId);
        
        // Cycle the target for the next click: 'about' -> 'home' or 'home' -> 'about'
        setAboutTarget(aboutTarget === 'about' ? 'home' : 'about');
    };
    
    // LOGO/HOME HANDLER: Uses the reusable handler for scrolling to the top.
    const handleHomeClick = (e) => {
        setAboutTarget('about'); 
        handleScrollLinkClick(e, 'home');
    };


    return (
        <header className="header">
            {/* Logo Link (Order 1 on Mobile) */}
            <a href="/" className="logo" onClick={handleHomeClick}>
                <img src={logo} alt="VNM Hitech Solutions Logo" className="logo-img" />
            </a>
            
            
            
            {/* Contact Us Button (Order 2 on Mobile - Visible on mobile header) */}
            <a href="/#contact" className="button contact-button" onClick={handleNavClick}>Contact Us</a>
            
            {/* Hamburger Icon (Order 3 on Mobile) */}
            <div 
                className={`hamburger ${isOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Navigation Menu (Hidden on mobile header, shown on click) */}
            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                
                {/* Home link uses a handler to ensure scroll to #home */}
                <a href="/" onClick={handleHomeClick}>Home</a>
                
                {/* Scroll links for sections on the Home Page. */}
                <a href="/#services" onClick={(e) => handleScrollLinkClick(e, 'services')}>Services</a>
                
                {/* Links to new, separate pages (MUST use the Link component) */}
                <Link to="/careers" onClick={handleNavClick}>Careers</Link>
                <Link to="/courses" onClick={handleNavClick}>Courses</Link>
                
                {/* UPDATED ABOUT LINK: Uses the custom handler for click-and-cycle logic. */}
                <a href={`/#${aboutTarget}`} onClick={handleAboutClick}>About Us</a>

                {/* Scroll links for sections on the Home Page */}
                <a href="/#contact" onClick={(e) => handleScrollLinkClick(e, 'contact')}>Contact</a>
            </nav>
        </header>
    );
};

export default Header;
