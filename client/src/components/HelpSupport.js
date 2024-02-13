import React from 'react';
import './HelpSupport.css';

const FAQ = () => {
  // Populate with frequently asked questions and their answers
  const faqs = [
    { question: 'How do I open a new account?', answer: 'To open a new account, you can visit our nearest branch...' },
    { question: 'How can I reset my online banking password?', answer: 'To reset your online banking password, follow these steps...' },
    // Add more FAQs as needed
  ];

  return (
    <div className="help-and-support-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

const UserGuide = () => {
  return (
    <div className="help-and-support-container">
      <h2>User Guide</h2>
      {/* Add detailed instructions and information about using the banking system */}
    </div>
  );
};

const ContactInformation = () => {
  // Provide customer support contact information here
  const contactDetails = {
    phone: '+1 123-456-7890',
    email: 'support@bank.com',
    officeHours: 'Monday to Friday, 9:00 AM to 5:00 PM',
  };

  return (
    <div className="help-and-support-container">
      <h2>Contact Information</h2>
      <p>For any inquiries or assistance, please contact our customer support:</p>
      <ul>
        <li>Phone: {contactDetails.phone}</li>
        <li>Email: {contactDetails.email}</li>
        <li>Office Hours: {contactDetails.officeHours}</li>
      </ul>
    </div>
  );
};

const HelpAndSupport = () => {
  return (
    <div className="help-and-support-container">
      <h1>Help and Support</h1>
      <nav>
        <ul>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#user-guide">User Guide</a></li>
          <li><a href="#contact-information">Contact Information</a></li>
        </ul>
      </nav>
      <div id="faq">
        <FAQ />
      </div>
      <div id="user-guide">
        <UserGuide />
      </div>
      <div id="contact-information">
        <ContactInformation />
      </div>
    </div>
  );
};

export default HelpAndSupport;
