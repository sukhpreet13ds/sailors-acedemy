import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import sailorCtaImg from "../assets/sailor-cta.jpg";
import "./style/style.css";
import "../pages/style/style.css";

const Cta = ({
  title = (
    <>
      Secure Your Enterprise <br />
      Potential Today
    </>
  ),
  description = "Enrollment is open for the upcoming cohort. Apply online or request detailed program schedules from our professional advisory team.",
  primaryBtnText = "Submit Admission Request",
  secondaryBtnText = "Download Brochure",
  primaryBtnLink = "/enroll",
  secondaryBtnLink = "/courses"
}) => {
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    });

    const revealElements = document.querySelectorAll(".scroll-reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-banner-section">
      {/* Background Image Container with Green Overlay */}
      <div
        className="cta-bg-image"
        style={{ backgroundImage: `url(${sailorCtaImg})` }}
      />
      <div className="cta-overlay" />

      <div className="cta-container scroll-reveal">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-desc">{description}</p>
        <div className="cta-buttons-row">
          <Link to={primaryBtnLink} className="cta-primary-btn btn-effect">
            {primaryBtnText}
          </Link>
          <Link to={secondaryBtnLink} className="cta-outline-btn btn-effect">
            {secondaryBtnText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
