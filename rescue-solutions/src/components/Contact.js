import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

// Custom hook to check if an element is in the viewport
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

const Contact = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        country: '',
        message: ''
    });

    // State to manage submission status (success or error)
    const [submissionStatus, setSubmissionStatus] = useState(null);

    // Ref for the logo to observe when it's on screen
    const logoRef = useRef(null);
    const isLogoVisible = useOnScreen(logoRef);

    // Update form data as user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Email.js service credentials
        const serviceID = 'service_m8x1y1a'; // Replace with your Service ID
        const templateID = 'template_7gc1zzm'; // Replace with your Template ID
        const publicKey = 'iAhlWmxHOW4zR-QbW'; // Replace with your Public Key

        // Capture the current date and time
        const currentDateTime = new Date().toLocaleString();
        const templateParams = {
            ...formData,
            date: currentDateTime, // Add the 'date' field
        };

        // Send the form data using Email.js
        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmissionStatus('success');
                setFormData({ // Reset form after successful submission
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    country: '',
                    message: ''
                });
            }, (error) => {
                console.log('FAILED...', error);
                setSubmissionStatus('error');
            });
    };

    return (
        <section id="contact" className="contact-section section-container">
            <span className="tag">Contact Us</span>
            <h2>Let's get in touch</h2>
            <p className="contact-subtitle">Ready to start your next project? Get in touch with our team and let's discuss how we can help transform your business with our innovative solutions.</p>
            <div className="contact-content">
                <div className="contact-form-card card">
                    <h3>Let's get in touch</h3>
                    <p>You can reach us anytime via <a href="mailto:info@vnmhitechsolutions.com">info@vnmhitechsolutions.com</a></p>

                    {/* Submission status alert */}
                    {submissionStatus === 'success' && (
                        <div className="submission-alert success">
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}
                    {submissionStatus === 'error' && (
                        <div className="submission-alert error">
                            Failed to send your message. Please try again later.
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
                            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
                        </div>
                        <textarea name="message" placeholder="Leave us a message..." value={formData.message} onChange={handleChange} required></textarea>
                        <button type="submit" className="button">Get Started</button>
                    </form>
                </div>
                <div className="contact-info-card card">
                    <h3>Contact Info</h3>
                    <div className="info-item">
                        <span className="icon-wrapper"><Phone size={20} color="#6a00ff" /></span>
                        <div>
                            <p>+91 9677757888</p>
                            <p>Mon-Sat from 10am to 6pm</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <span className="icon-wrapper"><Mail size={20} color="#6a00ff" /></span>
                        <div>
                            <p><a href="mailto:info@vnmhitechsolutions.com">info@vnmhitechsolutions.com</a></p>
                            <p>Drop us a line anytime</p>
                        </div>
                    </div>

                    
                    <h3 style={{ marginTop: '30px' }}>Visit our office</h3>
                    <div className="info-item">
                        <span className="icon-wrapper"><MapPin size={20} color="#6a00ff" /></span>
                        <p>19/2 VA Plaza, 80 Feet road, Sengunthapuram, Karur, Tamil Nadu 639002</p>
                    </div>

                    {/* The image element with the ref for scroll-triggering */}
                    <img 
                        src="../images/vnm full logo 1.png" 
                        alt="VNM Hitech Solutions" 
                        className={`contact-image ${isLogoVisible ? 'is-visible' : ''}`}
                        ref={logoRef}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;
