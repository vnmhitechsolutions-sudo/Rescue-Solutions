import React, { useRef, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { BookOpen, MapPin, CheckCircle } from 'lucide-react';
import './Courses.css';

//  Reusable Hook for Scroll Animations 
const useScrollAnimation = (ref, threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            const currentRef = ref.current;
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, isVisible, threshold]);

    return isVisible;
};

//  Course Data 
const courseData = [
    {
        id: 'fullstack-mern',
        title: "Full Stack MERN Developer",
        duration: "4 Months",
        mode: "Online | Offline",
        image: '../images/mernbg.jpg',
        details: ["React & Redux", "Node.js & Express", "MongoDB Basics", "API Development"]
    },
    {
        id: 'data-analytics',
        title: "Data Analytics & Science",
        duration: "3 Months",
        mode: "Online",
        image: '../images/datasciencebg.jpg',
        details: ["Python/R", "SQL Fundamentals", "Statistical Analysis", "Tableau/Power BI"]
    },
    {
        id: 'flutter-mobile',
        title: "Flutter Mobile Development",
        duration: "3 Months",
        mode: "Online | Offline",
        image: '../images/flutterbg.png',
        details: ["Dart Programming", "iOS & Android Build", "State Management", "Firebase Integration"]
    },
    {
        id: 'ai-ml',
        title: "Artificial Intelligence & ML",
        duration: "6 Months",
        mode: "Online",
        image: '../images/aibg.jpg',
        details: ["Deep Learning", "TensorFlow/PyTorch", "NLP & Computer Vision", "Model Deployment"]
    },
    {
        id: 'devops',
        title: "DevOps Course",
        duration: "4 Months",
        mode: "Offline",
        image: '../images/devopsbg.jpg',
        details: ["Docker & Kubernetes", "CI/CD Pipelines", "AWS/Azure/GCP", "Infrastructure as Code"]
    },
    {
        id: 'cyber-security',
        title: "Cyber Security Fundamentals",
        duration: "3 Months",
        mode: "Online | Offline",
        image: '../images/cyberbg.jpg',
        details: ["Network Security", "Ethical Hacking", "Cryptography", "Risk Management"]
    }
];

// Initial form data state
const initialFormData = {
    name: '',
    email: '',
    mobile: '',
    location: '',
    course: '',
    message: '',
    linked_profile: ''
};

const Courses = () => {
    // Refs for scroll observation and manipulation
    const courseListingRef = useRef(null);
    const applicationFormRef = useRef(null);
    const heroRef = useRef(null);

    // Trigger state based on scroll visibility
    const coursesVisible = useScrollAnimation(courseListingRef);
    const formVisible = useScrollAnimation(applicationFormRef);

    const [selectedCourse, setSelectedCourse] = useState('');
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // List of course titles for the select dropdown
    const courseTitles = courseData.map(c => c.title);
    courseTitles.unshift('Select Course'); 
    

    //  Handlers 

    const handleApplyClick = (courseTitle) => {
        setSelectedCourse(courseTitle); 
        setFormData(prev => ({ ...prev, course: courseTitle }));

        if (applicationFormRef.current) {
            // Scroll smoothly to the form section
            setTimeout(() => {
                applicationFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'course') {
            setSelectedCourse(value);
            setFormData(prev => ({ ...prev, course: value }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //  SIMULATED EMAIL.JS SUBMISSION 
        console.log("Submitting course application:", formData);
        
        // Show success modal
        setIsSubmitted(true);
        // Reset form data after success
        setFormData(initialFormData);
        setSelectedCourse('');
    };

    const closeSuccessModal = () => {
        setIsSubmitted(false);
    };
    
    //  Rendering Functions 

    const renderCourseCard = (course, index) => (
        <div 
            key={course.id} 
            className="course-card card"
            // Apply staggered animation delay based on index
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="course-header">
                <div 
                    className="course-title-box" 
                    style={{ backgroundImage: `url(${course.image})` }}
                >
                    <p>{course.title}</p>
                </div>
            </div>
            
            <div className="course-body">
                <div className="course-meta">
                    <span><BookOpen size={16} /> {course.duration}</span>
                    <span><MapPin size={16} /> {course.mode}</span>
                </div>
            </div>
            
            <div className="course-footer">
                <button 
                    className="button-small view-details" 
                    onClick={() => handleApplyClick(course.title)}
                >
                    Apply for Course
                </button>
            </div>
        </div>
    );

    return (
        <div className="courses-page">
            <Header />
            <main>
                {/* 1. Hero / Introductory Section */}
                <section className="courses-hero section-container" ref={heroRef}>
                    <div className="courses-hero-content">
                        {/* Apply animate and delay classes for slide-in effect */}
                        <span className="tag animate delay-0">Our Latest Programs</span>
                        <h1 className="animate delay-1">Master Cutting-Edge Technologies</h1>
                        <p className="animate delay-2">Upskill with our job-ready courses in Full Stack Development, Data Science, and DevOps.</p>
                    </div>
                </section>

                {/* 2. Course Grid Section */}
                <section 
                    className={`course-listings section-container ${coursesVisible ? 'animate-in' : ''}`}
                    ref={courseListingRef}
                >
                    {/* ALIGNMENT FIX: Headers aligned left */}
                    <h2 className="section-title align-left">Top Trending Courses</h2>
                    <p className="subtitle-text align-left">Choose the path that accelerates your career.</p>
                    <div className="courses-grid">
                        {courseData.map(renderCourseCard)}
                    </div>
                </section>

                {/* 3. Application Form Section */}
                <section 
                    id="apply-for-course" 
                    className={`apply-course-section section-container ${formVisible ? 'animate-in' : ''}`} 
                    ref={applicationFormRef}
                >
                    <h2 className="section-title align-left">Enroll in a Course</h2>
                    <p className="subtitle-text align-left">
                        Fill out the form below to receive a consultation call and complete your enrollment.
                    </p>
                    
                    <div className="apply-form-wrapper">
                        
                        {/* Image/Decoration Column */}
                        <div className="form-decoration-column">
                            <div className="decoration-card card">
                                <h3 className="text-primary">Consult with an Expert</h3>
                                <p>Our team will contact you within 24 hours to discuss course details and payment options.</p>
                                
                                {/* NEW: Text Over Picture */}
                                <div className="image-overlay-wrapper">
                                    <h4 className="overlay-text">Book Your Free Consultation Call</h4>
                                    <img 
                                        src="../images/callbg.jpg" 
                                        alt="Consultation call illustration" 
                                        title="Consultation Call"
                                        className="consultation-image" 
                                        style={{borderRadius: '10px'}}
                                    />
                                </div>

                                <div className="contact-info-small">
                                    <p>Need immediate help? Call us:</p>
                                    <p style={{fontWeight: 'bold', color: '#6a00ff'}}>+91 9677757888</p>
                                </div>
                            </div>
                        </div>

                        {/* Application Form Column */}
                        <div className="form-column card">
                            <form onSubmit={handleSubmit} className="course-application-form">
                                <div className="form-row">
                                    <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required />
                                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-row">
                                    <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
                                    <input type="text" name="location" placeholder="Current Location" value={formData.location} onChange={handleChange} required />
                                </div>
                                
                                <div className="form-row form-row-select">
                                    {/* Course Select Dropdown */}
                                    <select 
                                        name="course"
                                        value={selectedCourse} 
                                        onChange={handleChange}
                                        required
                                        className={selectedCourse === 'Select Course' || selectedCourse === '' ? 'placeholder-selected' : ''}
                                    >
                                        {courseTitles.map((title, index) => (
                                            <option 
                                                key={index} 
                                                value={title} 
                                                disabled={index === 0}
                                            >
                                                {title}
                                            </option>
                                        ))}
                                    </select>

                                    {/* Linked Profile Input */}
                                    <input 
                                        type="url" 
                                        name="linked_profile" 
                                        placeholder="Paste Resume Link (Google Drive/Dropbox)" 
                                        value={formData.linked_profile} 
                                        onChange={handleChange} 
                                        required /* Made required to ensure link is sent */
                                    />
                                </div>

                                <textarea name="message" placeholder="Why are you interested in this course?" value={formData.message} onChange={handleChange}></textarea>

                                <button type="submit" className="button">Enroll Now</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Submission Success Modal */}
            {isSubmitted && (
                <div className="submission-modal-overlay">
                    <div className="submission-modal card">
                        <CheckCircle size={60} color="#6a00ff" className="check-icon" />
                        <h3 className="submission-title">Enrollment Request Sent!</h3>
                        <p className="submission-message">
                            Thank you! We have received your request and a course consultant will contact you shortly.
                        </p>
                        <button onClick={closeSuccessModal} className="button close-button">
                            Got It
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Courses;
