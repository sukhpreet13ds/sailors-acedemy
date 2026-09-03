import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCalendarDays,
  faTrophy,
  faBookOpen,
  faLaptopCode,
  faUserGraduate,
  faBrain,
  faWandMagicSparkles,
  faRocket,
  faFileLines,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import real4 from "../assets/Generative AI & Prompt Engineering.jpg";
import review from "../assets/review-avatar.jpg";
import CourseForm from "../components/CourseForm";
import CourseSyllabus from "../components/CourseSyllabus";
import Cta from "../components/Cta";
import "./style/style.css";

const Course = () => {
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
    <div className="course-detail-page">
      {/* 1. HERO DEMO SECTION */}
      <section className="course-hero-section">
        <div className="course-hero-container">
          {/* Column 1: Course Info (Image, Title, Desc, Stats, 3 Feature Cards) */}
          <div className="course-hero-col-1 scroll-reveal">
            {/* Image Card */}
            <div className="course-hero-img-card scroll-reveal">
              <img src={real4} alt="Generative AI & Prompt Engineering" className="course-hero-img" />
              <div className="course-hero-badge">
                <span>FREE DEMO</span>
              </div>
            </div>

            {/* Title & Desc */}
            <h1 className="course-hero-main-title scroll-reveal">
              Generative AI & <br />
              Prompt Engineering
            </h1>

            <p className="course-hero-desc scroll-reveal">
              Learn generative AI and prompt engineering to scale operational workflows.
            </p>

            {/* Stats Row */}
            <div className="course-hero-stats scroll-reveal">
              <div className="course-stat-item">
                <div className="course-stat-icon-wrap">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <span className="course-stat-value">83%</span>
                <span className="course-stat-label">JOB PLACEMENT</span>
              </div>

              <div className="course-stat-divider" />

              <div className="course-stat-item">
                <div className="course-stat-icon-wrap">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                <span className="course-stat-value">8 Weeks</span>
                <span className="course-stat-label">INTENSIVE TRACK</span>
              </div>

              <div className="course-stat-divider" />

              <div className="course-stat-item">
                <div className="course-stat-icon-wrap">
                  <FontAwesomeIcon icon={faTrophy} />
                </div>
                <span className="course-stat-value">#1</span>
                <span className="course-stat-label">ACADEMY IN LUDHIANA</span>
              </div>
            </div>
          </div>

          {/* Column 2: Middle Highlights Card + Quote Testimonial */}
          <div className="course-hero-col-2 scroll-reveal">
            <div className="course-highlights-card">
              <div className="course-highlights-grid">
                <div className="course-highlight-item">
                  <div className="highlight-icon-circle">
                    <FontAwesomeIcon icon={faBrain} />
                  </div>
                  <div className="highlight-info">
                    <h4>AI-Powered Learning</h4>
                    <p>Leverage cutting-edge AI tools to build practical solutions.</p>
                  </div>
                </div>

                <div className="course-highlight-item">
                  <div className="highlight-icon-circle">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                  </div>
                  <div className="highlight-info">
                    <h4>Prompt Engineering Expertise</h4>
                    <p>Master the art of crafting prompts for better AI results.</p>
                  </div>
                </div>

                <div className="course-highlight-item">
                  <div className="highlight-icon-circle">
                    <FontAwesomeIcon icon={faRocket} />
                  </div>
                  <div className="highlight-info">
                    <h4>Future-Ready Skills</h4>
                    <p>Build in-demand skills that companies are hiring for.</p>
                  </div>
                </div>

                <div className="course-highlight-item">
                  <div className="highlight-icon-circle">
                    <FontAwesomeIcon icon={faFileLines} />
                  </div>
                  <div className="highlight-info">
                    <h4>Certification</h4>
                    <p>Earn a recognized certificate and boost your career.</p>
                  </div>
                </div>
              </div>

              <a href="#syllabus" className="course-explore-btn btn-effect">
                <span>Explore Course Details</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>

            {/* Testimonial Quote */}
            <div className="course-hero-quote">
              <div className="quote-mark">“</div>
              <p className="quote-text">
                "Sailors Academy helped me transform my career with practical learning and real-world exposure."
              </p>
              <div className="quote-author">
                <div className="author-avatar">
                  <img src={review} alt="Review" style={{width:"100%", borderRadius:"50%"}} />
                </div>
                <div className="author-info">
                  <span className="author-name">Arjun Mehta</span>
                  <span className="author-role">Sailors Acedemy Student</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Schedule Demo Class Form */}
          <div className="course-hero-col-3 scroll-reveal">
            <CourseForm courseTitle="Generative AI & Prompt Engineering" />
          </div>

          {/* 3 Feature Cards Container */}
          <div className="course-hero-bottom-container">
            <div className="course-hero-feature-cards scroll-reveal">
              <div className="course-feature-card">
                <div className="course-feature-icon">
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                <h4 className="course-feature-title">Industry-Relevant Curriculum</h4>
                <p className="course-feature-desc">Stay ahead with a syllabus designed by industry experts.</p>
              </div>

              <div className="course-feature-card">
                <div className="course-feature-icon">
                  <FontAwesomeIcon icon={faLaptopCode} />
                </div>
                <h4 className="course-feature-title">Hands-on Learning</h4>
                <p className="course-feature-desc">Work on real-world projects and case studies.</p>
              </div>

              <div className="course-feature-card">
                <div className="course-feature-icon">
                  <FontAwesomeIcon icon={faUserGraduate} />
                </div>
                <h4 className="course-feature-title">Career Support</h4>
                <p className="course-feature-desc">Resume building, mock interviews & placement help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SYLLABUS MODULES COMPONENT */}
      <CourseSyllabus />

      {/* 3. CUSTOM COURSE CTA SECTION */}
      <Cta
        title={
          <>
            The Best Generative AI &
            Prompt Engineering Course in Ludhiana
          </>
        }
        description="Explore our Generative AI & Prompt Engineering course, meet our team, and discover how the program can help you build practical AI skills for today’s industry."
        primaryBtnText="Book a Demo"
        secondaryBtnText="Download Brochure"
      />
    </div>
  );
};

export default Course;