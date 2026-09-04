import React, { useEffect, useRef } from "react";
import privacyText from "./privacy.txt?raw";
import contactHero from "../assets/contact-hero.jpg";
import "./style/style.css";

const Privacy = () => {
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

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });

    if (sectionRef.current) {
      const revealElements = sectionRef.current.querySelectorAll(".scroll-reveal");
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="legal-page-wrapper" ref={sectionRef}>
      {/* Hero Section */}
      <section className="legal-hero-section">
        <div
          className="legal-hero-bg"
          style={{ backgroundImage: `url(${contactHero})` }}
        />
        <div className="legal-hero-overlay" />
        <div className="legal-hero-container">
          <div className="legal-hero-content scroll-reveal">
            <span className="legal-hero-tag">SAILORS ACADEMY LEGAL</span>
            <h1 className="legal-hero-title">
              PRIVACY <span className="highlight-text">— POLICY</span>
            </h1>
            <p className="legal-hero-desc">
              At Sailors Academy, we are committed to protecting the privacy of our website visitors and users. Learn how we handle, protect, and respect your personal data.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="legal-main-section">
        <div className="legal-main-container">
          <div className="legal-card scroll-reveal">
            {/* Information We Collect */}
            <div className="legal-block">
              <h2 className="legal-block-title">Information We Collect</h2>
              <p className="legal-text">
                We may collect personal information that you voluntarily provide, such as your name, email address, and contact details. This typically occurs when you:
              </p>
              <ul className="legal-bullet-list">
                <li>Fill out forms or applications on our website</li>
                <li>Subscribe to our newsletter or course updates</li>
                <li>Communicate with our customer support & advisory team</li>
              </ul>

              <p className="legal-text">
                Additionally, we automatically collect certain data about your visit through cookies and similar tracking technologies. This may include:
              </p>
              <ul className="legal-bullet-list">
                <li>IP address & device details</li>
                <li>Browser type & operating system</li>
                <li>Pages visited & duration of stay</li>
              </ul>

              <p className="legal-text muted-text">
                This information helps us analyze user behavior and continuously enhance our website and educational services.
              </p>
            </div>

            <div className="legal-divider" />

            {/* How We Use Your Information */}
            <div className="legal-block">
              <h2 className="legal-block-title">How We Use Your Information</h2>
              <p className="legal-text">
                The information we collect may be used for the following purposes:
              </p>
              <ul className="legal-bullet-list">
                <li>To deliver, maintain, and personalize our courses and services</li>
                <li>To respond to your inquiries or manage your student account</li>
                <li>To send newsletters, course schedules, and educational updates</li>
                <li>To analyze website performance and user engagement trends</li>
                <li>To safeguard our services from fraud and unauthorized access</li>
              </ul>
            </div>

            <div className="legal-divider" />

            {/* Information Sharing */}
            <div className="legal-block">
              <h2 className="legal-block-title">Information Sharing</h2>
              <p className="legal-text">
                We do not sell, rent, or trade your personal information for marketing purposes. However, we may share your data with:
              </p>
              <ul className="legal-bullet-list">
                <li>Trusted third-party service providers who support our website and technical infrastructure under strict confidentiality agreements.</li>
                <li>Authorities or legal entities when required by law or necessary to protect our rights, property, or safety.</li>
              </ul>
            </div>

            <div className="legal-divider" />

            {/* Data Security */}
            <div className="legal-block">
              <h2 className="legal-block-title">Data Security</h2>
              <p className="legal-text">
                We implement reasonable technical and organizational safeguards to protect your personal data from unauthorized access, use, or disclosure. However, please be aware that no method of data transmission or storage is completely secure.
              </p>
            </div>

            <div className="legal-divider" />

            {/* Your Choices */}
            <div className="legal-block">
              <h2 className="legal-block-title">Your Choices</h2>
              <p className="legal-text">
                You may opt out of receiving promotional emails from us by following the unsubscribe link provided in our communications or by contacting us directly. Please note that opting out of marketing messages does not affect transactional or administrative communications.
              </p>
            </div>

            <div className="legal-divider" />

            {/* Accessing or Updating Your Information */}
            <div className="legal-block">
              <h2 className="legal-block-title">Accessing or Updating Your Information</h2>
              <p className="legal-text">
                You have the right to access, update, or request the deletion of your personal information. To do so, please contact us, and we will respond within a reasonable timeframe.
              </p>
            </div>

            <div className="legal-divider" />

            {/* Policy Updates */}
            <div className="legal-block">
              <h2 className="legal-block-title">Policy Updates</h2>
              <p className="legal-text">
                We may revise this Privacy Policy occasionally to reflect changes in our practices or legal requirements. We encourage you to review this policy periodically to stay informed.
              </p>
            </div>

            <div className="legal-divider" />

            {/* Contact Us */}
            <div className="legal-block contact-block">
              <h2 className="legal-block-title">Contact Us</h2>
              <p className="legal-text">
                If you have any questions or concerns about this Privacy Policy or our data handling practices, please reach out to us at:
              </p>
              <div className="contact-box-simple">
                <span>📞 Phone: <a href="tel:+918699388823">+91 86993-88823</a></span>
                <span>✉️ Email: <a href="mailto:director@sailorsacademy.ca">director@sailorsacademy.ca</a></span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
