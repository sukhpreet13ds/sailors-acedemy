import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faUserGraduate, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import sailor1 from "../assets/sailor1.JPG";
import sailor2 from "../assets/sailor2.JPG";
import sailor3 from "../assets/sailor3.JPG";
import review from "../assets/review-avatar.jpg";
import FoldText from "../components/FoldText";
import Cta from "../components/Cta";
import ScholarshipForm from "../components/ScholarshipForm";
import "./style/style.css";

const scholarshipHeroImages = [student1, student2, student3, sailor1, sailor2, sailor3];

const Scholarship = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Counter state for 0 to 500
  const [count500, setCount500] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef(null);

  // Background slideshow timer (matching About.jsx)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % scholarshipHeroImages.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  // IntersectionObserver to trigger animate__fadeInUp on scroll for scroll-reveal elements
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

  // 0 to 500 animated counter effect
  useEffect(() => {
    const startCounting = () => {
      let start = 0;
      const end = 500;
      const duration = 1600;
      const step = 10;
      const stepTime = duration / (end / step);

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount500(end);
          clearInterval(timer);
        } else {
          setCount500(start);
        }
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    } else if (!hasCounted) {
      setHasCounted(true);
      startCounting();
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="scholarship-page">
      {/* 1. HERO SECTION */}
      <section className="scholarship-hero-section">
        {/* Background Slideshow with continuous slow zoom & crossfade (Same as About.jsx) */}
        <div className="about-hero-bg-container">
          {scholarshipHeroImages.map((img, index) => (
            <div
              key={index}
              className={`about-hero-bg-slide ${index === currentImageIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="about-hero-overlay" />
        </div>

        <div className="scholarship-hero-container">
          {/* Left Text & Stats Content */}
          <div className="scholarship-hero-content">
            <h1 className="scholarship-hero-main-title">
              <FoldText
                text={"SCHOLAR"}
                splitBy="char"
                hinge="top"
                trigger="mount"
                duration={0.65}
                stagger={0.035}
                ease="power3.out"
                perspective={700}
                creaseShading={0.55}
              />
              <br />
              <span className="highlight-text">
                <FoldText
                  text={"SHIPS"}
                  splitBy="char"
                  hinge="top"
                  trigger="mount"
                  duration={0.65}
                  stagger={0.035}
                  ease="power3.out"
                  perspective={700}
                  creaseShading={0.55}
                />
              </span>
            </h1>

            <p className="scholarship-hero-description">
              Sailors Academy is committed to nurturing raw talent. We believe
              financial barriers shouldn't stop future leaders. Apply for our fully
              funded programs and kickstart your dream career.
            </p>

            {/* Stats Row */}
            <div className="scholarship-stats-row" ref={statsRef}>
              <div className="scholarship-stat-item">
                <h3 className="scholarship-stat-number gold-text">₹1.2Cr+</h3>
                <p className="scholarship-stat-label">Total Fund Awarded</p>
              </div>

              <div className="scholarship-stat-item">
                <h3 className="scholarship-stat-number">{count500}+</h3>
                <p className="scholarship-stat-label">Students Supported</p>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="scholarship-hero-form-wrapper">
            <ScholarshipForm />
          </div>
        </div>
      </section>

      {/* 2. WHY APPLY WITH US SECTION */}
      <section className="scholarship-why-section">
        <div className="scholarship-why-container">
          <div className="scholarship-why-header scroll-reveal">
            <h2 className="scholarship-why-title">WHY APPLY WITH US?</h2>
            <p className="scholarship-why-subtitle">
              We provide more than just financial support. Our scholarship program is designed to catapult your professional growth and secure a stellar career launch.
            </p>
          </div>

          <div className="scholarship-why-grid">
            {/* Card 1 */}
            <div className="scholarship-why-card scroll-reveal">
              <div className="why-icon-box yellow-box">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3 className="why-card-title">100% Tuition Coverage</h3>
              <p className="why-card-desc">
                Get full or partial waiver on tuition fees for premium Digital Marketing, SEO, Design, and Development courses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="scholarship-why-card scroll-reveal">
              <div className="why-icon-box green-box">
                <FontAwesomeIcon icon={faUserGraduate} />
              </div>
              <h3 className="why-card-title">Elite Mentorship</h3>
              <p className="why-card-desc">
                Regular 1-on-1 sessions with seasoned industry leaders who actively shape marketing and tech landscape.
              </p>
            </div>

            {/* Card 3 */}
            <div className="scholarship-why-card scroll-reveal">
              <div className="why-icon-box green-box">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3 className="why-card-title">Guaranteed Internship</h3>
              <p className="why-card-desc">
                Gain direct access to hands-on projects, real-client campaigns, and high-quality practical experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SCHOLARSHIP STREAMS SECTION */}
      <section className="scholarship-streams-section">
        <div className="scholarship-streams-container">
          <div className="scholarship-streams-header scroll-reveal">
            <h2 className="scholarship-streams-title">SCHOLARSHIP STREAMS</h2>
            <p className="scholarship-streams-subtitle">
              Find the perfect financial pathway that aligns with your educational achievements, financial needs, or creative talent.
            </p>
          </div>

          <div className="scholarship-streams-grid">
            {/* Stream Card 1 - Merit Excellence */}
            <div className="scholarship-stream-card merit-card scroll-reveal">
              <div className="stream-card-body">
                <h3 className="stream-card-title">MERIT EXCELLENCE</h3>

                <div className="stream-field-block">
                  <span className="stream-field-label">ELIGIBILITY</span>
                  <p className="stream-field-text">
                    90% or above in senior secondary school examinations or equivalent collegiate score.
                  </p>
                </div>

                <div className="stream-field-block">
                  <span className="stream-field-label">AWARD AMOUNT</span>
                  <h4 className="stream-award-amount">Up to 100% Tuition Waiver</h4>
                </div>
              </div>

              <div className="stream-card-img-wrap">
                <img src={student1} alt="Merit Excellence Student" className="stream-card-img" />
              </div>
            </div>

            {/* Stream Card 2 - Opportunity Grant */}
            <div className="scholarship-stream-card grant-card scroll-reveal">
              <div className="stream-card-body">
                <h3 className="stream-card-title">OPPORTUNITY GRANT</h3>

                <div className="stream-field-block">
                  <span className="stream-field-label">ELIGIBILITY</span>
                  <p className="stream-field-text">
                    Candidates demonstrating genuine financial challenges with an annual household income limit.
                  </p>
                </div>

                <div className="stream-field-block">
                  <span className="stream-field-label">AWARD AMOUNT</span>
                  <h4 className="stream-award-amount">50% to 75% Support</h4>
                </div>
              </div>

              <div className="stream-card-img-wrap">
                <img src={student2} alt="Opportunity Grant Student" className="stream-card-img" />
              </div>
            </div>

            {/* Stream Card 3 - Creative Spark */}
            <div className="scholarship-stream-card spark-card scroll-reveal">
              <div className="stream-card-body">
                <h3 className="stream-card-title">CREATIVE SPARK</h3>

                <div className="stream-field-block">
                  <span className="stream-field-label">ELIGIBILITY</span>
                  <p className="stream-field-text">
                    Outstanding portfolio submission in Graphic Design, UI/UX, Video Editing or creative writing.
                  </p>
                </div>

                <div className="stream-field-block">
                  <span className="stream-field-label">AWARD AMOUNT</span>
                  <h4 className="stream-award-amount">50% to 75% Support</h4>
                </div>
              </div>

              <div className="stream-card-img-wrap">
                <img src={student3} alt="Creative Spark Student" className="stream-card-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. YOUR APPLICATION JOURNEY SECTION */}
      <section className="scholarship-journey-section">
        <div className="scholarship-journey-container">
          <div className="scholarship-journey-header scroll-reveal">
            <h2 className="scholarship-journey-title">YOUR APPLICATION JOURNEY</h2>
            <p className="scholarship-journey-subtitle">
              Four simple phases stand between you and a fully-funded career transformation at Sailors Academy.
            </p>
          </div>

          <div className="scholarship-journey-steps">
            <div className="journey-step-item scroll-reveal">
              <span className="journey-step-number">01</span>
              <h3 className="journey-step-title">Submit Online Profile</h3>
              <p className="journey-step-desc">
                Fill the registration form above or our detailed online application portal with your target courses.
              </p>
            </div>

            <div className="journey-step-item scroll-reveal">
              <span className="journey-step-number">02</span>
              <h3 className="journey-step-title">Upload Documents</h3>
              <p className="journey-step-desc">
                Attach academic mark sheets, parent income proofs, or portfolio samples for quick evaluation.
              </p>
            </div>

            <div className="journey-step-item scroll-reveal">
              <span className="journey-step-number">03</span>
              <h3 className="journey-step-title">Evaluation & Interview</h3>
              <p className="journey-step-desc">
                Attend a brief virtual or physical interview with our academy board to discuss your career vision.
              </p>
            </div>

            <div className="journey-step-item scroll-reveal">
              <span className="journey-step-number">04</span>
              <h3 className="journey-step-title">Get Award & Enroll</h3>
              <p className="journey-step-desc">
                Receive your custom grant letter and complete final onboarding into your target specialization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HEAR FROM OUR SCHOLARS SECTION */}
      <section className="scholarship-scholars-section">
        <div className="scholarship-scholars-container">
          <div className="scholarship-scholars-header scroll-reveal">
            <h2 className="scholarship-scholars-title">HEAR FROM OUR SCHOLARS</h2>
            <p className="scholarship-scholars-subtitle">
              Alumni stories that validate our mission. Real careers transformed with the help of Sailor's Academy.
            </p>
          </div>

          <div className="scholarship-scholars-grid">
            <div className="scholar-testimonial-card scroll-reveal">
              <p className="scholar-quote">
                "The Merit Excellence scholarship completely took care of my training costs. Within 2 weeks of finishing my Digital Marketing course, I got placed at an agency in Ludhiana."
              </p>
              <div className="scholar-author-row">
                <img src={review} alt="Rohan Sharma" className="scholar-avatar" />
                <div className="scholar-author-info">
                  <h4 className="scholar-name">Rohan Sharma</h4>
                  <span className="scholar-role">Digital Marketing - Merit Awardee</span>
                </div>
              </div>
            </div>

            <div className="scholar-testimonial-card scroll-reveal">
              <p className="scholar-quote">
                "As a self-taught graphic designer, the Creative Spark award gave me the hardware and formal training I desperately needed. Highly recommend applying!"
              </p>
              <div className="scholar-author-row">
                <img src={review} alt="Priya Kaur" className="scholar-avatar" />
                <div className="scholar-author-info">
                  <h4 className="scholar-name">Priya Kaur</h4>
                  <span className="scholar-role">Graphic Design - Creative Spark Awardee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KEY DATES & DEADLINES SECTION */}
      <section className="scholarship-dates-section">
        <div className="scholarship-dates-container">
          <div className="scholarship-dates-header scroll-reveal">
            <h2 className="scholarship-dates-title">KEY DATES & DEADLINES</h2>
            <p className="scholarship-dates-subtitle">
              Don't miss your chance. Keep an eye on our application schedule.
            </p>
          </div>

          <div className="scholarship-dates-grid">
            <div className="scholarship-date-card scroll-reveal">
              <span className="date-phase-tag">PHASE 01</span>
              <h3 className="date-card-title">Applications Open</h3>
              <h4 className="date-highlight-text">March 1, 2026</h4>
              <p className="date-card-desc">
                Online portal opens for the summer batch across all academy courses.
              </p>
            </div>

            <div className="scholarship-date-card scroll-reveal">
              <span className="date-phase-tag">PHASE 02</span>
              <h3 className="date-card-title">Deadline</h3>
              <h4 className="date-highlight-text">April 15, 2026</h4>
              <p className="date-card-desc">
                Final submission window for profiles, portfolios and income documents.
              </p>
            </div>

            <div className="scholarship-date-card scroll-reveal">
              <span className="date-phase-tag">PHASE 03</span>
              <h3 className="date-card-title">Interviews</h3>
              <h4 className="date-highlight-text">April 25, 2026</h4>
              <p className="date-card-desc">
                Evaluation panel conducts interactive reviews with short-listed applicants.
              </p>
            </div>

            <div className="scholarship-date-card scroll-reveal">
              <span className="date-phase-tag">PHASE 04</span>
              <h3 className="date-card-title">Announcements</h3>
              <h4 className="date-highlight-text">May 5, 2026</h4>
              <p className="date-card-desc">
                Award letters sent out and summer batch onboarding begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="scholarship-faq-section">
        <div className="scholarship-faq-container">
          <div className="scholarship-faq-header scroll-reveal">
            <h2 className="scholarship-faq-title">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="scholarship-faq-subtitle">
              Answers to common questions about our application process and requirements.
            </p>
          </div>

          <div className="scholarship-faq-grid">
            <div className="scholarship-faq-card scroll-reveal">
              <h3 className="faq-question">What documents are required to apply?</h3>
              <p className="faq-answer">
                You will need academic transcripts, identity proof, parent's income statements (for need-based), or portfolio links (for creative excellence).
              </p>
            </div>

            <div className="scholarship-faq-card scroll-reveal">
              <h3 className="faq-question">Is there an age limit for applicants?</h3>
              <p className="faq-answer">
                No! Anyone aged 16 and above, including university students, job seekers, and career changers can apply for our scholarship streams.
              </p>
            </div>

            <div className="scholarship-faq-card scroll-reveal">
              <h3 className="faq-question">Can I apply for multiple streams?</h3>
              <p className="faq-answer">
                Yes, our evaluation committee automatically checks your profile against all active streams to offer the best possible scholarship tier.
              </p>
            </div>

            <div className="scholarship-faq-card scroll-reveal">
              <h3 className="faq-question">Does it guarantee a job?</h3>
              <p className="faq-answer">
                While no academy can guarantee employment, we offer robust placement assistance, industry-visits, and resume guidance to ensure our scholars land great roles.
              </p>
            </div>
          </div>
        </div>
      </section>
       {/* 3. CUSTOM COURSE CTA SECTION */}
      <Cta
        title={
          <>
            Apply for Your Scholarship Today
          </>
        }
        description="Unleash your creative and technical spark at Sailor's Academy. Applications for our summer intake are filling fast."
        primaryBtnText="Get Application Form"
        secondaryBtnText={null}
        onPrimaryClick={scrollToTop}
      />
    </div>
  );
};

export default Scholarship;