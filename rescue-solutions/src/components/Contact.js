import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

// Custom hook to check if an element is in the viewport
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

const Contact = () => {

  // Form fields state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });

  // Success / Error alert
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Logo animation on scroll
  const logoRef = useRef(null);
  const isLogoVisible = useOnScreen(logoRef);

  // Update form data when user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form → Send to Django backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API URL (change to your backend URL)

      await axios.post("http://192.168.29.178:8000/", formData);


      // If successful
      setSubmissionStatus("success");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setSubmissionStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section section-container">
      <span className="tag">Contact Us</span>
      <h2>Let's get in touch</h2>
      <p className="contact-subtitle">
        Ready to start your next project? Get in touch with our team and let's discuss how we can help transform your business with our innovative solutions.
      </p>

      <div className="contact-content">

        {/* LEFT – FORM */}
        <div className="contact-form-card card">
          <h3>Let's get in touch</h3>
          <p>You can reach us anytime via <a href="mailto:info@vnmhitechsolutions.com">info@vnmhitechsolutions.com</a></p>

          {/* Alerts */}
          {submissionStatus === "success" && (
            <div className="submission-alert success">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submissionStatus === "error" && (
            <div className="submission-alert error">
              Failed to send your message. Please try again later.
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />

              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              placeholder="Leave us a message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="button">Get Started</button>
          </form>
        </div>

        {/* RIGHT – CONTACT INFO */}
        <div className="contact-info-card card">
          <h3>Contact Info</h3>

          <div className="info-item">
            <span className="icon-wrapper"><Phone size={20} color="#6a00ff" /></span>
            <div>
              <p>+91 9677757888</p>
              <p>Mon–Sat | 10am–6pm</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon-wrapper"><Mail size={20} color="#6a00ff" /></span>
            <div>
              <p><a href="mailto:info@vnmhitechsolutions.com">info@vnmhitechsolutions.com</a></p>
              <p>Drop us a line anytime</p>
            </div>
          </div>

          <h3 style={{ marginTop: "30px" }}>Visit our office</h3>

          <div className="info-item">
            <span className="icon-wrapper"><MapPin size={20} color="#6a00ff" /></span>
            <p>19/2 VA Plaza, 80 Feet Road, Sengunthapuram, Karur, Tamil Nadu 639002</p>
          </div>

          <img
            src="../images/vnm full logo 1.png"
            alt="VNM Hitech Solutions"
            className={`contact-image ${isLogoVisible ? "is-visible" : ""}`}
            ref={logoRef}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
