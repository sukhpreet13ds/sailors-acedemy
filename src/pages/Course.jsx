import React, { useEffect } from "react";
import course1 from "../assets/course1.jpg";
import CourseForm from "../components/CourseForm";
import CourseSyllabus from "../components/CourseSyllabus";
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
          {/* Left Side: Course Image, Title, Desc & Stats */}
          <div className="course-hero-left scroll-reveal">
            {/* Image Card */}
            <div className="course-hero-img-card scroll-reveal">
              <img src={course1} alt="Generative AI & Prompt Engineering" className="course-hero-img" />
              <div className="course-hero-badge">
                <span>FREE DEMO</span>
              </div>
            </div>

            {/* Title & Desc */}
            <h1 className="course-hero-main-title scroll-reveal">
              Generative AI & <span className="highlight-text">Prompt Engineering</span>
            </h1>

            <p className="course-hero-desc scroll-reveal">
              Learn generative AI and prompt engineering to scale operational workflows.
            </p>

            {/* Stats Row */}
            <div className="course-hero-stats scroll-reveal">
              <div className="course-stat-item">
                <span className="course-stat-value">83%</span>
                <span className="course-stat-label">JOB PLACEMENT</span>
              </div>

              <div className="course-stat-divider" />

              <div className="course-stat-item">
                <span className="course-stat-value">8 Weeks</span>
                <span className="course-stat-label">INTENSIVE TRACK</span>
              </div>

              <div className="course-stat-divider" />

              <div className="course-stat-item">
                <span className="course-stat-value">#1</span>
                <span className="course-stat-label">ACADEMY IN LUDHIANA</span>
              </div>
            </div>
          </div>

          {/* Right Side: Course Registration Form Component */}
          <div className="course-hero-right scroll-reveal">
            <CourseForm courseTitle="Generative AI & Prompt Engineering" />
          </div>
        </div>
      </section>

      {/* 2. SYLLABUS MODULES COMPONENT */}
      <CourseSyllabus />
    </div>
  );
};

export default Course;