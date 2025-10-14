import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <Header />
      <div 
        className="section-container" 
        style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px', 
          minHeight: '100vh', 
          textAlign: 'left' 
        }}>
        
        {/* Table of Contents */}
        <h1 className="text-primary" style={{ textAlign: 'center', marginBottom: '40px' }}>
          Privacy Policy
        </h1>
        
        {/* Main Content */}
        <div className="legal-content">
          <span id="introduction" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>1. Introduction</h2>
          <p>VNM Hitech Solutions is committed to protecting the privacy of your data. This policy describes how we collect, use, and share your personal information. Our services are tailored to empower businesses with innovative technology solutions while prioritizing data protection and privacy.</p>

          <span id="information-we-collect" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>2. Information We Collect</h2>
          <p>We collect several types of information to provide and improve our services:</p>
          <ul>
            <li><strong>Personal Data:</strong> Includes name, email address, phone number, and location when you contact us via the contact form.</li>
            <li><strong>Usage Data:</strong> Information like your IP address, browser type, visited pages, and the time and date of your visit. This data is collected automatically to analyze and enhance our service's performance.</li>
          </ul>
          
          <span id="how-we-use-your-information" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>3. How We Use Your Information</h2>
          <p>VNM Hitech Solutions uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our services effectively.</li>
            <li>To notify you about important changes and updates to our services.</li>
            <li>To offer dedicated customer support and respond to your inquiries.</li>
            <li>To monitor and analyze the usage of our website to improve user experience.</li>
            <li>To detect, prevent, and address technical issues and security threats.</li>
          </ul>

          <span id="data-protection" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>4. Data Protection</h2>
          <p>The security of your data is paramount to us. We implement robust security measures, including encryption and access controls, to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of data transmission over the Internet is 100% secure.</p>

          <span id="sharing-your-information" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>5. Sharing Your Information</h2>
          <p>We do not sell or trade your Personal Data. We may share your information only in specific situations:</p>
          <ul>
            <li>With your explicit consent.</li>
            <li>To comply with legal obligations, such as court orders or government requests.</li>
            <li>To trusted third-party service providers who assist us in operating our business, such as hosting and analytics.</li>
          </ul>
          
          <span id="third-party-services" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>6. Third-Party Services</h2>
          <p>Our website may contain links to third-party services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
          
          <span id="your-rights" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>7. Your Rights</h2>
          <p>You have the right to request access, correction, or deletion of your personal data. To exercise these rights or for any privacy-related questions, please contact us directly at the email address provided below.</p>

          <span id="changes-to-our-policy" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>8. Changes to Our Policy</h2>
          <p>We may update this Privacy Policy periodically. We will notify you of any significant changes by posting the new policy on this page and updating the "Effective Date" at the top.</p>

          <span id="contact-us" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>9. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, you can contact us at:</p>
          <p>Email: <a href="mailto:info@vnmhitechsolutions.com">info@vnmhitechsolutions.com</a></p>
          <p>Address: 80 Feet Rd, VA Plaza 1st Floor, Sengunthapuram, Karur, Tamil Nadu 639002</p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;