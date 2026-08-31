import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import logoColorImg from "../assets/sailor-color-logo.png";
import "./style/style.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      {/* Top Main Footer Section */}
      <div className="footer-top-container">
        <div className="footer-grid">
          {/* Brand & Address Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link">
              <img src={logoColorImg} alt="Sailors Academy" className="footer-logo-img" />
            </Link>
            <address className="footer-address">
              Ground floor, 28-G, SBS Nagar, Pakhowal<br />
              Road, Ludhiana, Punjab
            </address>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-direction-link"
            >
              Direction
            </a>
            <div className="footer-direct-call">
              Direct Call: <span>+91 86993-68823</span>
            </div>
          </div>

          {/* Column 1: Main Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">MAIN NAVIGATION</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home Portal</Link></li>
              <li><Link to="/courses">Course Catalog</Link></li>
              <li><Link to="/admission">Admission Guidelines</Link></li>
              <li><Link to="/academics">Academics</Link></li>
            </ul>
          </div>

          {/* Column 2: Student Information */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">STUDENT INFORMATION</h4>
            <ul className="footer-links-list">
              <li><Link to="/how-to-apply">How to Apply</Link></li>
              <li><Link to="/schedules">Schedules & Dates</Link></li>
              <li><Link to="/student-handbook">Student Handbook</Link></li>
              <li><Link to="/campus-tours">Campus Tours</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">RESOURCES</h4>
            <ul className="footer-links-list">
              <li><Link to="/placements">Industry Placements</Link></li>
              <li><Link to="/scholarships">Scholarship Funds</Link></li>
              <li><Link to="/journal">Academic Journal</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Social Strip */}
      <div className="footer-social-strip">
        <div className="footer-social-container">
          <p className="footer-social-tagline">
            Connecting professional communities worldwide.
          </p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p className="footer-copyright-text">
            Copyright © 2026 Sailors Academy. All rights reserved. Registered under educational state regulations.
          </p>
          <div className="footer-legal-links">
            <Link to="/cookies">Cookies</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
