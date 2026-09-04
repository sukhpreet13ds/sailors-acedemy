import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import contactHero from "../assets/contact-hero.jpg";
import "./style/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          entry.target.classList.remove("scroll-reveal");
        }
      });
    };

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) {
      const revealElements = sectionRef.current.querySelectorAll(".scroll-reveal");
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      toast.error("Full Name is required.");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Email Address is required.");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Phone Number is required.");
      return;
    }

    toast.success("Thank you! Your contact message has been sent.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      message: ""
    });
  };

  return (
    <div className="contact-page-wrapper" ref={sectionRef}>
      <Toaster position="top-center" reverseOrder={false} containerStyle={{ zIndex: 999999 }} />

      {/* Hero Section */}
      <section className="contact-hero-section">
        <div
          className="contact-hero-bg"
          style={{ backgroundImage: `url(${contactHero})` }}
        />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-container">
          <div className="contact-hero-left scroll-reveal">
            <h1 className="contact-hero-title">
              CONTACT<br/>
              <span className="contact-hero-sub-title"> — US</span>
            </h1>
          </div>

          <div className="contact-hero-right scroll-reveal">
            <span className="contact-hero-tag">GET IN TOUCH WITH SAILORS</span>
            <p className="contact-hero-desc">
              Have questions about digital marketing certifications, web development
              scholarships, or our industry-guided tours? Reach out. Our advisors are
              here to frame your path.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-main-section">
        <div className="contact-main-container">
          {/* Left Column: Campus Info, Office Hours, Map */}
          <div className="contact-left-col">
            {/* Campus Info Header & Items */}
            <div className="contact-info-block scroll-reveal">
              <h2 className="contact-section-title">Our Campus Info</h2>

              <div className="contact-info-list">
                {/* Phone Item */}
                <div className="contact-info-item">
                  <div className="info-icon-circle">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="info-content">
                    <span className="info-label">CALL US DIRECTLY</span>
                    <a href="tel:+918699388823" className="info-value">
                      +91 86993-88823
                    </a>
                  </div>
                </div>

                {/* Email Item */}
                <div className="contact-info-item">
                  <div className="info-icon-circle">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="info-content">
                    <span className="info-label">WRITE AN EMAIL</span>
                    <a href="mailto:director@sailorsacademy.ca" className="info-value">
                      director@sailorsacademy.ca
                    </a>
                  </div>
                </div>

                {/* Address Item */}
                <div className="contact-info-item">
                  <div className="info-icon-circle">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div className="info-content">
                    <span className="info-label">CAMPUS HEADQUARTERS</span>
                    <span className="info-value">
                      Ground Floor, 28-G, SBS Nagar, Pakhowal Road, Ludhiana, Punjab
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours Box */}
            <div className="office-hours-box scroll-reveal">
              <h3 className="office-hours-title">Office Hours</h3>
              <div className="office-hours-row">
                <span className="hours-day">Monday – Friday</span>
                <span className="hours-time highlighted">10:00 AM – 6:00 PM</span>
              </div>
              <div className="hours-divider" />
              <div className="office-hours-row">
                <span className="hours-day">Saturday – Sunday</span>
                <span className="hours-time closed">Closed</span>
              </div>
            </div>

            {/* Map Section */}
            <div className="contact-location-block scroll-reveal">
              <h2 className="contact-section-title">Our Location</h2>
              <div className="map-embed-wrapper">
                <iframe
                  title="Sailors Academy Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4418.462210788771!2d75.80823280000001!3d30.881156599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa03ecc68622fa817%3A0x608f57933121c931!2sSailors%20Academy!5e1!3m2!1sen!2sin!4v1788507673195!5m2!1sen!2sin"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Send Us a Message Form Card */}
          <div className="contact-right-col scroll-reveal">
            <div className="contact-form-card">
              <h2 className="contact-form-title">Send Us a Message</h2>
              <p className="contact-form-subtitle">
                Fill out the form below. Our academic coordinators will respond within 24 business hours to book your free demo class.
              </p>

              <form onSubmit={handleSubmit} className="contact-actual-form">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="contactFullName">Full Name</label>
                  <input
                    type="text"
                    id="contactFullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="contactEmail">Email Address</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label htmlFor="contactPhone">Phone Number</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="phone"
                    placeholder="+91 00000-00000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Course of Interest */}
                <div className="form-group">
                  <label htmlFor="contactCourse">Course of Interest</label>
                  <div className="select-wrapper">
                   <select
              id="fieldOfInterest"
              name="fieldOfInterest"
              value={formData.fieldOfInterest}
              onChange={handleChange}
            >
              <option value="">Select a field of interest</option>

              {/* AI & Emerging Technologies */}
              <optgroup label="AI & Emerging Technologies">
                <option value="Generative AI and Prompt Engineering">
                  Generative AI and Prompt Engineering
                </option>
                <option value="AI Agent and Automation">
                  AI Agent and Automation
                </option>
                <option value="AI and Automation Professional Program">
                  AI and Automation Professional Program
                </option>
                <option value="Generative AI and Agentic AI Track">
                  Generative AI and Agentic AI Track
                </option>
                <option value="Prompt Engineering">
                  Prompt Engineering
                </option>
                <option value="ChatGPT for Business">
                  ChatGPT for Business
                </option>
              </optgroup>

              {/* Web & Software Development */}
              <optgroup label="Web & Software Development">
                <option value="Full Stack Web Development">
                  Full Stack Web Development
                </option>
                <option value="MERN Stack">
                  MERN Stack
                </option>
                <option value="Python Training">
                  Python Training
                </option>
                <option value="Java Training">
                  Java Training
                </option>
                <option value="Web Development Internship">
                  Web Development Internship
                </option>
                <option value="Full Stack Development Internship">
                  Full Stack Development Internship
                </option>
              </optgroup>

              {/* Digital Marketing */}
              <optgroup label="Digital Marketing">
                <option value="Digital Marketing and Performance Ads">
                  Digital Marketing and Performance Ads
                </option>
                <option value="Digital Marketing">
                  Digital Marketing
                </option>
                <option value="Performance Marketing">
                  Performance Marketing
                </option>
                <option value="SEO Specialist">
                  SEO Specialist
                </option>
                <option value="Google Ads Specialist">
                  Google Ads Specialist
                </option>
                <option value="Meta Ads and Social Media Marketing">
                  Meta Ads and Social Media Marketing
                </option>
                <option value="Digital Marketing Internship">
                  Digital Marketing Internship
                </option>
              </optgroup>

              {/* Design & Creative */}
              <optgroup label="Design & Creative">
                <option value="Content Creation and Reels Marketing">
                  Content Creation and Reels Marketing
                </option>
                <option value="Video & Reels Editing">
                  Video & Reels Editing
                </option>
                <option value="UI/UX with Figma">
                  UI/UX with Figma
                </option>
                <option value="UI/UX Design Internship">
                  UI/UX Design Internship
                </option>
                <option value="Graphic Design Internship">
                  Graphic Design Internship
                </option>
              </optgroup>

              {/* Data, Cloud & Cybersecurity */}
              <optgroup label="Data, Cloud & Cybersecurity">
                <option value="Data Analytics Professional">
                  Data Analytics Professional
                </option>
                <option value="Data Analytics Internship">
                  Data Analytics Internship
                </option>
                <option value="Data Science / Machine Learning Training">
                  Data Science / Machine Learning Training
                </option>
                <option value="Cloud and DevOps">
                  Cloud and DevOps
                </option>
                <option value="Advanced Cybersecurity">
                  Advanced Cybersecurity
                </option>
                <option value="Cybersecurity Internship">
                  Cybersecurity Internship
                </option>
                <option value="Python and AI Internship">
                  Python and AI Internship
                </option>
              </optgroup>

              {/* Fast-Track & Specialized Programs */}
              <optgroup label="Fast-Track & Specialized Programs">
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Mobile App Development Internship">
                  Mobile App Development Internship
                </option>
                <option value="6-Month Industrial Training">
                  6-Month Industrial Training
                </option>
                <option value="6-Weeks Industrial Training">
                  6-Weeks Industrial Training
                </option>
                <option value="Winter Industrial Training">
                  Winter Industrial Training
                </option>
                <option value="Summer Training">
                  Summer Training
                </option>
                <option value="Final Year Project Training">
                  Final Year Project Training
                </option>
              </optgroup>
            </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contactMessage">Your Message</label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your digital career goals..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <button type="submit" className="contact-submit-btn btn-effect">
                  <span>Submit Contact Message</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
