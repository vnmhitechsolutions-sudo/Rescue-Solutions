import React, { useRef, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Clock, IndianRupee, CheckCircle } from 'lucide-react'; 
import emailjs from '@emailjs/browser'; 
import './Careers.css';

// Define the opening positions data
const openPositions = [
    {
        id: 'mern-stack',
        title: "MERN Stack Developer",
        description: "We're looking for a skilled developer to build scalable and high-performance web applications using the MERN stack.",
        type: "Full-time",
        compensation: "Not Disclosed",
        skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
        id: 'ui-ux',
        title: "UI/UX Developer",
        description: "We seek a creative professional to design and implement exceptional user interfaces and experiences.",
        type: "Full-time",
        compensation: "Not Disclosed",
        skills: ["Figma", "Sketch", "HTML/CSS", "JavaScript"]
    },
    {
        id: 'mobile-developer',
        title: "Mobile Developer",
        description: "We're looking for a Senior Mobile Developer to join our team.",
        type: "Full-time",
        compensation: "Not Disclosed",
        skills: ["React Native", "iOS", "Android", "Flutter"]
    },
];

// Initial state for form data
const initialFormData = {
    name: '',
    email: '',
    mobile: '',
    location: '',
    position: '',
    message: '',
    resumeLink: '' // Changed from 'file' to 'resumeLink'
};

//  EMAIL.JS CONFIGURATION 
const SERVICE_ID = 'service_m8x1y1a'; // <<< REPLACE with your Service ID
const TEMPLATE_ID = 'template_174u98b'; // <<< REPLACE with your Template ID 
const PUBLIC_KEY = 'iAhlWmxHOW4zR-QbW'; // <<< REPLACE with your Public Key

const Careers = () => {
    const applicationFormRef = useRef(null);
    const imageColumnRef = useRef(null); 

    const [selectedPosition, setSelectedPosition] = useState('Select Position');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [imageAnimated, setImageAnimated] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    
    // Intersection Observer to trigger animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !imageAnimated) {
                    setImageAnimated(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (applicationFormRef.current) {
            observer.observe(applicationFormRef.current);
        }

        return () => {
            const currentRef = applicationFormRef.current;
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [imageAnimated]);
    
    const jobTitles = openPositions.map(p => p.title);
    jobTitles.unshift('Select Position'); 

    const handleApplyClick = (positionTitle) => {
        setSelectedPosition(positionTitle); 
        setFormData(prev => ({ ...prev, position: positionTitle }));
        setImageAnimated(true); 

        if (applicationFormRef.current) {
            setTimeout(() => {
                applicationFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'position') {
            setSelectedPosition(value);
            setFormData(prev => ({ ...prev, position: value }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };
    
    // Handle form submission (EMAIL.JS INTEGRATION - NOW INCLUDING RESUME LINK)
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            mobile_number: formData.mobile,
            user_location: formData.location,
            position_applied: formData.position,
            message: formData.message,
            // NEW: Sending the resume link instead of the file
            resume_link: formData.resumeLink, 
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                // Reset form and show success modal
                setFormData(initialFormData);
                setSelectedPosition('Select Position');
                setIsSubmitted(true);
            }, (error) => {
                console.log('FAILED...', error);
                alert("Application failed to send. Please try again."); 
            });
    };
    
    const closeSuccessModal = () => {
        setIsSubmitted(false);
        window.scrollTo(0, 0); 
    };


    //  RENDERING 

    const renderJobCard = (job) => (
        <div key={job.id} className="job-card card">
            <h3>{job.title}</h3>
            <p className="job-description">{job.description}</p>
            <div className="job-meta">
                <span><Clock size={16} /> {job.type}</span>
                <span><IndianRupee size={16} /> {job.compensation}</span>
            </div>
            <div className="job-skills">
                {job.skills.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                ))}
            </div>
            <button 
                className="button-small" 
                onClick={() => handleApplyClick(job.title)}
            >
                Apply Now
            </button>
        </div>
    );

    return (
        <div className="careers-page">
            <Header />
            <main>
                {/* 1. Hero / Introductory Section (Unchanged) */}
                <section className="careers-hero section-container">
                    <div className="careers-hero-content">
                        <span className="tag">Join Our Team</span>
                        <h1>Shape the Future with VNM Hitech Solutions</h1>
                        <p>We believe in talent, passion, and innovation. Explore our open roles and find your next career adventure with us.</p>
                    </div>
                </section>

                {/* 2. Opening Positions Section (Unchanged) */}
                <section className="opening-positions section-container">
                    <h2>Opening Positions</h2>
                    <p className="subtitle-text">Find the opportunity that matches your ambition.</p>
                    <div className="jobs-grid">
                        {openPositions.map(renderJobCard)}
                    </div>
                </section>

                {/* 3. Application Form Section with Images */}
                <section id="apply-for-job" className="apply-section section-container" ref={applicationFormRef}>
                    <h2>Apply for a Job</h2>
                    <p className="subtitle-text">
                        Creating a friendly, independent and remote culture is essential to our work and we are always looking for the best professionals.
                        To submit your resume, please upload it to Google Drive/Dropbox and paste the shareable link below.
                    </p>
                    
                    <div className="apply-content-wrapper">
                        
                        <div 
                            className={`image-column ${imageAnimated ? 'animate-in' : ''}`}
                            ref={imageColumnRef}
                        >
                            <div className="image-card-career">
                                <img src="../images/developer.png" alt="Developer working on laptop" className="career-image" />
                            </div>
                        </div>

                        {/* Application Form Column */}
                        <div className="form-column card">
                            <form onSubmit={handleSubmit} className="job-application-form">
                                <div className="form-row">
                                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-row">
                                    <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
                                    <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
                                </div>
                                
                                {/* Position Select Row */}
                                <div className="form-row form-row-select">
                                    <select 
                                        name="position"
                                        value={selectedPosition} 
                                        onChange={handleChange}
                                        required
                                        className={selectedPosition === 'Select Position' || selectedPosition === '' ? 'placeholder-selected' : ''}
                                    >
                                        {jobTitles.map((title, index) => (
                                            <option 
                                                key={index} 
                                                value={title} 
                                                disabled={index === 0} 
                                            >
                                                {title}
                                            </option>
                                        ))}
                                    </select>
                                    {/* NEW: Input for Resume Link (Replaces file input) */}
                                    <input 
                                        type="url" 
                                        name="resumeLink" 
                                        placeholder="Resume Link (Google Drive/Dropbox)" 
                                        value={formData.resumeLink} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>

                                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>

                                <button type="submit" className="button">Apply Now</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Submission Success Modal (Unchanged) */}
            {isSubmitted && (
                <div className="submission-modal-overlay">
                    <div className="submission-modal card">
                        <CheckCircle size={60} color="#28a745" className="check-icon" />
                        <h3 className="submission-title">Profile Submitted Successfully!</h3>
                        <p className="submission-message">
                            Your Profile was successfully Submitted. Thank you, We will get back to you soon!
                        </p>
                        <button onClick={closeSuccessModal} className="button close-button">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Careers;
