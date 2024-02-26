import React from 'react';
import {Link } from 'react-router-dom';
import './About.css'; // Make sure to create an About.css file in the same directory

export default function About() {
  return (
    <div className='center-wrapper'>
    <div className="aboutContainer">
      <h1>About Keisha Banking</h1>
     <Link to="/">HOME</Link>
      <section className="aboutContent">
        <p >
         <strong>Welcome to Keisha Banking, where tradition meets innovation to create a banking experience unparalleled in its capacity to meet your needs. Our mission is to empower you with tools and services that make managing your finances effortless and secure.</strong> 
        </p>
        <p>
          <strong>At the heart of our approach is a commitment to not just meet, but exceed the standards of the digital banking industry. Here's how we're setting new benchmarks:</strong>
        </p>
        <ul>
          <li><strong>Advanced Security Measures:</strong> Your peace of mind is paramount. We employ cutting-edge security technologies, including biometric authentication and real-time alerts, to safeguard your financial information.</li>
          <li><strong>Comprehensive Financial Management:</strong> From personalized budgeting tools to savings goals and expense trackers, we put the power to manage your finances effectively at your fingertips.</li>
          <li><strong>Customizable User Experience:</strong> We believe that banking should be as unique as you are. Our customizable dashboards and AI-powered insights ensure that you're always in control and informed.</li>
          <li><strong>Seamless Integration:</strong> Your financial ecosystem, simplified. We offer seamless integration with a variety of financial services and institutions, for a holistic view of your finances.</li>
          <li><strong>Innovative Payment Solutions:</strong> From instant peer-to-peer transactions to international transfers, we make payments fast, simple, and affordable.</li>
          <li><strong>Exceptional Support:</strong> Our dedicated team of financial experts is available 24/7, ready to provide you with personalized support and advice whenever you need it.</li>
          <li><strong>Future-Forward Banking:</strong> We're constantly exploring new ways to enhance your banking experience, from digital wallet integration to flexible loan and credit options.</li>
        </ul>
        <p>
          At Keisha Banking, we're not just a bank; we're your partner in financial success. We invite you to join us on this journey, where your financial dreams become our shared goal. Welcome to the future of banking.
        </p>
      </section>
    </div>
    </div>
  );
}
