import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets'; // Adjust the import path as necessary

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Company Logo" />
          <p>Our company tagline or description here</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-7697528326</li>
                    <li>ajayprajapati06245@gmail.com</li>
                </ul>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyright">Copyright 2024 Tomato.com-All Right Reserved. </p>
    </div>
  );
};

export default Footer;
