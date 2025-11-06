import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target); 
                    }
                });
            },
            {
                threshold: 0.5, 
                rootMargin: '0px'
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <div id="homeback">
        <section id="home" className="hero-section section-container" ref={heroRef}>
            <div className="hero-content">
                {/* MODIFIED: Staggered animation structure for VNM Hitech Solutions */}
                <h1 className="company-logo-text">
                    <span className="animate delay-0" style={{ color: '#270d88ff' }}>VNM</span>
                    <span className="hitech-solution-text animate delay-0-5" style={{ color: '#3e4343ff', fontWeight: 'normal', margin: '0 5px' }}>Hitech</span>
                    <span className="hitech-solution-text animate delay-0-5" style={{ color: '#33bcceff', fontWeight: 'normal' }}>Solutions</span>
                </h1>
                
                <h1 className="animate delay-1">Transforming Ideas.
                <br /><h1 className="text-primary">Delivering Excellence.</h1></h1>
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
        </div>
    );
};

export default Hero;