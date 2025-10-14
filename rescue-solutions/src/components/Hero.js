import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    // 1. Create a ref to attach to the hero section
    const heroRef = useRef(null);

    // 2. Use a useEffect hook to set up the IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 3. Add 'animated' class to trigger animations
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target); // Stop observing after animation
                    }
                });
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is visible
                rootMargin: '0px'
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        // Cleanup function
        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        // 4. Attach the ref to the section
        <section id="home" className="hero-section section-container" ref={heroRef}>
                
            <div className="hero-content">
                {/* Add a new class 'animate' to the elements you want to animate */}
                {/* --- COMPANY NAME HEADING (Made bigger for prominence) --- */}
                <h1 className="animate delay-0" style={{ 
                    fontSize: '2.5rem', /* Increased size for desktop prominence */
                    fontWeight: 'bold', 
                    marginBottom: '10px' /* Reduced margin to bring closer to headline */
                }}>
                    <span style={{ color: '#270d88ff' }}>VNM</span>
                    <span style={{ color: '#3e4343ff', fontWeight: 'normal', margin: '0 5px' }}>Hitech</span>
                    <span style={{ color: '#33bcceff', fontWeight: 'normal' }}>Solutions</span>
                </h1>
                <h1 className="animate delay-1">Transforming Ideas.<br /><span className="text-primary">Delivering Excellence.</span></h1>
                <p className="subtitle animate delay-2">Where innovation meets execution.</p>
                <p className="animate delay-3">Empowering businesses with cutting-edge technology solutions. We specialize in creating innovative job portals and digital transformation services.</p>
                <a href="#contact" className="button animate delay-4">Get Started →</a>
            </div>
            <div className="hero-image-container">
                <div className="hero-image-card card animate delay-5">
                    <img src="images/himage.jpg" alt="Team working in an office" className="hero-image" />
                </div>
            </div>
        </section>
    );
};

export default Hero;