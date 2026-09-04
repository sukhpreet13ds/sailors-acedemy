import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCheckCircle,
  faArrowRight,
  faUserGraduate,
  faBriefcase,
  faLaptopCode,
  faAward,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import EnquiryForm from "../components/EnquiryForm";
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import sailor1 from "../assets/sailor1.JPG";
import sailor2 from "../assets/sailor2.JPG";
import sailor3 from "../assets/sailor3.JPG";
import "./style/style.css";

const heroBgImages = [student1, student2, student3, sailor1, sailor2, sailor3];

const Enroll = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Background image rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBgImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          entry.target.classList.remove("scroll-reveal");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

    if (sectionRef.current) {
      const revealElements = sectionRef.current.querySelectorAll(".scroll-reveal");
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="enroll-page-wrapper" ref={sectionRef}>
      {/* HERO SECTION WITH ENQUIRY FORM */}
      <section className="enroll-hero-section">
        {/* Background Slideshow */}
        <div className="enroll-hero-bg-wrapper">
          {heroBgImages.map((img, index) => (
            <div
              key={index}
              className={`enroll-hero-bg-slide ${index === currentBgIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
        <div className="enroll-hero-overlay" />

        <div className="enroll-hero-container">
          {/* Left Hero Details */}
          <div className="enroll-hero-left scroll-reveal">
            <div className="enroll-badge-pill">
              <FontAwesomeIcon icon={faStar} className="badge-star-icon" />
              <span>OFFICIAL ADMISSIONS 2026-2027</span>
            </div>

            <h1 className="enroll-hero-title">
              Start Your Future in <span className="highlight-text">Tech & Leadership</span>
            </h1>

            <p className="enroll-hero-description">
              Transform your passion into a high-growth career with industry-aligned certification programs, 1-on-1 mentorship, and 100% practical learning.
            </p>

            {/* Quick Highlights List */}
            <div className="enroll-highlights-list">
              <div className="highlight-item">
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span>100% Practical & Real-World Projects</span>
              </div>
              <div className="highlight-item">
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span>Globally Recognized Professional Certifications</span>
              </div>
              <div className="highlight-item">
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                <span>Dedicated Placement Assistance & Career Support</span>
              </div>
            </div>

            {/* Prominent "Want Scholarship?" Banner Option */}
            <div className="want-scholarship-card">
              <div className="scholarship-card-left">
                <div className="scholarship-icon-badge">
                  <FontAwesomeIcon icon={faUserGraduate} />
                </div>
                <div className="scholarship-text-group">
                  <span className="scholarship-card-tag">FINANCIAL AID AVAILABLE</span>
                  <h4 className="scholarship-card-title">Looking for Scholarship Support?</h4>
                  <p className="scholarship-card-desc">
                    Get up to 100% tuition coverage based on merit & eligibility.
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="scholarship-btn btn-effect"
                onClick={() => navigate("/scholarship")}
              >
                <span>Apply for Scholarship</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          {/* Right Hero Enquiry Form */}
          <div className="enroll-hero-right scroll-reveal">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* WHY ENROLL SECTION */}
      <section className="enroll-why-section">
        <div className="enroll-section-container">
          <div className="enroll-section-header scroll-reveal">
            <span className="section-sub-tag">EXCELLENCE IN EDUCATION</span>
            <h2 className="enroll-section-title">Why Enroll at Sailors Academy?</h2>
            <p className="enroll-section-subtitle">
              We empower students with cutting-edge skills, hands-on training, and direct industry exposure to lead in the digital era.
            </p>
          </div>

          <div className="enroll-cards-grid">
            <div className="why-enroll-card scroll-reveal">
              <div className="why-card-icon-wrap">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h3 className="why-card-heading">Hands-on Industry Labs</h3>
              <p className="why-card-text">
                Work directly on live client projects, AI automations, and full-stack software applications under expert guidance.
              </p>
            </div>

            <div className="why-enroll-card scroll-reveal">
              <div className="why-card-icon-wrap">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <h3 className="why-card-heading">Certified Curriculum</h3>
              <p className="why-card-text">
                Our modules are regularly updated with industry standards to keep you ahead in AI, Web Dev, Marketing & Data.
              </p>
            </div>

            <div className="why-enroll-card scroll-reveal">
              <div className="why-card-icon-wrap">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3 className="why-card-heading">Placement & Career Support</h3>
              <p className="why-card-text">
                Resume building, mock interviews, portfolio creation, and direct recruitment drives with hiring partners.
              </p>
            </div>

            <div className="why-enroll-card scroll-reveal">
              <div className="why-card-icon-wrap">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3 className="why-card-heading">1-on-1 Mentorship</h3>
              <p className="why-card-text">
                Small batch sizes ensure personalized feedback, direct Q&A, and dedicated guidance for every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIP CTA BANNER AT BOTTOM */}
      <section className="enroll-scholarship-banner scroll-reveal">
        <div className="scholarship-banner-container">
          <div className="banner-text-content">
            <span className="banner-badge">SCHOLARSHIP PROGRAM 2026</span>
            <h2 className="banner-heading">Need Financial Support for Your Course?</h2>
            <p className="banner-subtext">
              Don't let financial constraints stop your dreams. Apply for our summer scholarship test and get up to 100% fee waiver.
            </p>
          </div>
          <Link to="/scholarship" className="banner-cta-btn btn-effect">
            <FontAwesomeIcon icon={faUserGraduate} />
            <span>Apply For Scholarship Now</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Enroll;
