import React from 'react';
import './About.css';
// Assuming you are placing the image in public/images/
// const aboutImage = '/images/about-image.jpg'; 

const About = () => {
    return (

        <div className='wholeabout'>
        <section id="about" className="about-section section-container">
            <div className="about-content">
                <span className="tagabout">About Us</span><br></br>
                <h2>Innovation for<br /><span className="text-primary">Business Success</span></h2>
                <p>VNM Hitech Solutions is a forward-thinking IT company specializing in job portal development and comprehensive digital solutions. We are passionate about transforming businesses through innovative technology and creating platforms that connect talent with opportunities.</p>
                <p>Our team of experienced professionals is dedicated to delivering cutting-edge solutions that drive growth, efficiency, and success for our clients across various industries.</p>
                <div className="what-we-believe">
                    <h4>What We Believe In:</h4>
                    <ul>
                        <li><span role="img" aria-label="checkmark">✅</span> Innovation-driven approach</li>
                        <li><span role="img" aria-label="checkmark">✅</span> Client-focused solutions</li>
                        <li><span role="img" aria-label="checkmark">✅</span> Quality assurance</li>
                        <li><span role="img" aria-label="checkmark">✅</span> Timely delivery</li>
                        <li><span role="img" aria-label="checkmark">✅</span> Continuous support</li>
                        <li><span role="img" aria-label="checkmark">✅</span> Cost-effective solutions</li>
                    </ul>
                </div>
            </div>
            <div className="about-right">
               
                    <img src="/images/mission-image.jpg" alt="Team meeting" className="about-image" />
                
                <div className="mission-card card">
                    <h3>Our Mission</h3>
                    <p>To empower businesses with innovative technology solutions that drive digital transformation, enhance operational efficiency, and create meaningful connections between talent and opportunities in the modern digital landscape.</p>
                </div>
            </div>
        </section>
        </div>
    );
};

export default About;