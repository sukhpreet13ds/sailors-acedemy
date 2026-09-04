import React, { useEffect, useRef } from "react";
import contactHero from "../assets/contact-hero.jpg";
import "./style/style.css";

const Terms = () => {
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
            <span className="legal-hero-tag">SAILORS ACADEMY TERMS</span>
            <h1 className="legal-hero-title">
              TERMS <span className="highlight-text">— & CONDITIONS</span>
            </h1>
            <p className="legal-hero-desc">
              Welcome to Sailors Academy. These Terms & Conditions govern your enrollment, access, and use of our platform, training courses, and academic services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="legal-main-section">
        <div className="legal-main-container">
          <div className="legal-card scroll-reveal">
            <div className="legal-block">
              <h2 className="legal-block-title">1. Acceptance of Terms</h2>
              <p className="legal-text">
                By accessing or using the Sailors Academy website, enrolling in our training programs, or using any related educational services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not access or use our services.
              </p>
            </div>

            <div className="legal-divider" />

            <div className="legal-block">
              <h2 className="legal-block-title">2. Educational Programs & Admissions</h2>
              <p className="legal-text">
                Admission to courses, industrial training, and certification tracks is subject to seat availability, prerequisite evaluation, and verification of student credentials. Sailors Academy reserves the right to accept or decline any application at its sole discretion.
              </p>
            </div>

            <div className="legal-divider" />

            <div className="legal-block">
              <h2 className="legal-block-title">3. Tuition & Fees</h2>
              <p className="legal-text">
                Course fees, deposit amounts, and installment schedules are outlined during enrollment. All payments must be made in full or as per agreed payment plans prior to receiving final certifications or placement assistance. Fees paid under standard enrollment are non-refundable after course orientation except where explicitly stated under applicable policy.
              </p>
            </div>

            <div className="legal-divider" />

            <div className="legal-block">
              <h2 className="legal-block-title">4. Scholarship & Financial Aid</h2>
              <p className="legal-text">
                Scholarship grants, tuition waivers, and performance discounts awarded through our evaluation tests are subject to student attendance, academic performance, and compliance with academy guidelines. Misrepresentation of documents or failure to maintain attendance criteria may result in revocation of scholarship benefits.
              </p>
            </div>

            <div className="legal-divider" />

            <div className="legal-block">
              <h2 className="legal-block-title">5. Intellectual Property Rights</h2>
              <p className="legal-text">
                All course materials, lectures, source code, curriculum design, project frameworks, and documentation provided by Sailors Academy are protected by copyright and intellectual property laws. Content is provided solely for personal, non-commercial educational use. Reproducing, distributing, or re-selling academy materials without written permission is strictly prohibited.
              </p>
            </div>

            <div className="legal-divider" />

            <div className="legal-block">
              <h2 className="legal-block-title">6. Student Code of Conduct</h2>
              <p className="legal-text">
                Students and campus visitors are expected to maintain professional behavior, integrity, and mutual respect. Plagiarism, academic dishonesty, harassment, or disruption of classes will result in disciplinary action, up to and including immediate dismissal without refund.
              </p>
            </div>

            <div className="legal-divider" />

            <div className="legal-block">
              <h2 className="legal-block-title">7. Limitation of Liability</h2>
              <p className="legal-text">
                Sailors Academy strives to provide accurate and high-quality educational content; however, all services are provided on an "as is" and "as available" basis. Sailors Academy is not liable for indirect, incidental, or consequential damages resulting from the use or inability to use our website or training services.
              </p>
            </div>

            <div className="legal-divider" />

            <div className="legal-block">
              <h2 className="legal-block-title">8. Policy Modifications</h2>
              <p className="legal-text">
                We reserve the right to amend or update these Terms & Conditions at any time. Any changes will be posted on this page with an updated revision date. Continued use of our platform constitutes acceptance of the modified terms.
              </p>
            </div>

            <div className="legal-divider" />

            <div className="legal-block contact-block">
              <h2 className="legal-block-title">9. Contact Us</h2>
              <p className="legal-text">
                If you have any questions or inquiries regarding these Terms & Conditions, please contact us at:
              </p>
              <div className="contact-box-simple">
                <span>📍 Ground Floor, 28-G, SBS Nagar, Pakhowal Road, Ludhiana, Punjab</span>
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

export default Terms;
