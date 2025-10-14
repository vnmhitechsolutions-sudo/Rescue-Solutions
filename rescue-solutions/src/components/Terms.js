import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Terms = () => {
  return (
    <div className="terms-page">
      <Header />
      <div 
        className="section-container" 
        style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px', 
          minHeight: '100vh', 
          textAlign: 'left' 
        }}>
        
        <h1 className="text-primary" style={{ textAlign: 'center', marginBottom: '40px' }}>
          Terms and Conditions
        </h1>
        <div className="legal-content" >
          <span id="introduction" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>1. Introduction</h2>
          <p>Welcome to VNM Hitech Solutions. By accessing or using our website and services, you agree to be bound by these Terms and Conditions.</p>

          <span id="use-of-services" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>2. Use of Services</h2>
          <p>VNM Hitech Solutions provides innovative job portals, digital transformation, and comprehensive IT services. Our services are for business and professional use only. You agree not to misuse the services or help anyone else to do so.</p>

          <span id="intellectual-property" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>3. Intellectual Property</h2>
          <p>All content, features, and functionality on this website, including but not limited to all information, software, code, and design, are the exclusive property of VNM Hitech Solutions and are protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our explicit written permission.</p>

          <span id="user-accounts" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>4. User Accounts</h2>
          <p>If you create an account on our platform, you are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.</p>

          <span id="limitation-of-liability" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>5. Limitation of Liability</h2>
          <p>VNM Hitech Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the service; (ii) any conduct or content of any third party on the service.</p>
          
          <span id="governing-law" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>6. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of Tamil Nadu, India, without regard to its conflict of law provisions.</p>
          
          <span id="changes-to-terms" style={{ position: 'relative', top: '-80px' }}></span>
          <h2>7. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms on this page.</p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Terms;