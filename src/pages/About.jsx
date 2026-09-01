import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay, faPause, faCompress } from "@fortawesome/free-solid-svg-icons";
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import sailor1 from "../assets/sailor1.JPG";
import sailor2 from "../assets/sailor2.JPG";
import sailor3 from "../assets/sailor3.JPG";
import gurleen from "../assets/gurleen-kaur.jpg";
import pawan from "../assets/Pawandeep-Singh.jpg";
import satvir from "../assets/Satvir-Singh.jpg";
import vishal from "../assets/Vishal-Bhargav.jpg";
import sukhpreet from "../assets/sukhpreet-singh.jpg";
import sadik from "../assets/sadik.jpg";
import tiwari from "../assets/vishal-tiwari.jpg";
import gaurav from "../assets/gaurav.jpg";
import thumbnailAbout from "../assets/thumbnail-about.png";
import FoldText from "../components/FoldText";
import "./style/style.css";

const aboutHeroImages = [student1, student2, student3, sailor1, sailor2, sailor3];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Counter states for stats section
  const [stat1, setStat1] = useState(0);
  const [stat2, setStat2] = useState(0);
  const [stat3, setStat3] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);

  const statsRef = useRef(null);

  // Journey section observer for thread drawing animation
  const [journeyVisible, setJourneyVisible] = useState(false);
  const journeyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setJourneyVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (journeyRef.current) {
      observer.observe(journeyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Background slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutHeroImages.length);
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

  // Animated counter observer for 83%, 50+, 500+ stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);

          // Counter 1: 0 to 83
          let start1 = 0;
          const end1 = 83;
          const duration = 1400;
          const stepTime1 = duration / end1;
          const timer1 = setInterval(() => {
            start1 += 1;
            setStat1(start1);
            if (start1 >= end1) clearInterval(timer1);
          }, stepTime1);

          // Counter 2: 0 to 50
          let start2 = 0;
          const end2 = 50;
          const stepTime2 = duration / end2;
          const timer2 = setInterval(() => {
            start2 += 1;
            setStat2(start2);
            if (start2 >= end2) clearInterval(timer2);
          }, stepTime2);

          // Counter 3: 0 to 500
          let start3 = 0;
          const end3 = 500;
          const step3 = 10;
          const stepTime3 = duration / (end3 / step3);
          const timer3 = setInterval(() => {
            start3 += step3;
            if (start3 >= end3) {
              setStat3(end3);
              clearInterval(timer3);
            } else {
              setStat3(start3);
            }
          }, stepTime3);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <div className="about-page">
      {/* 1. ABOUT HERO SECTION */}
      <section className="about-hero-section">
        {/* Background Slideshow with continuous slow zoom & crossfade */}
        <div className="about-hero-bg-container">
          {aboutHeroImages.map((img, index) => (
            <div
              key={index}
              className={`about-hero-bg-slide ${index === currentImageIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="about-hero-overlay" />
        </div>

        <div className="about-hero-container">
          {/* Left Text Content */}
          <div className="about-hero-content">
            <h1 className="about-hero-main-title">
              <FoldText
                text={"ABOUT"}
                splitBy="char"
                hinge="top"
                trigger="mount"
                duration={0.65}
                stagger={0.035}
                ease="power3.out"
                perspective={700}
                creaseShading={0.55}
              />
              <span className="highlight-text">
                <FoldText
                  text={"SAILORS"}
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

            <p className="about-hero-description">
              Sailor's Academy is the ultimate launchpad for digital excellence, shaping the next
              generation of marketing leaders, website developers, and creative directors.
            </p>

            <Link to="/courses" className="about-hero-btn btn-effect">
              <span>Download Brochure</span>
              <FontAwesomeIcon icon={faArrowRight} className="about-btn-arrow" />
            </Link>
          </div>

          {/* Right Video / Interactive Thumbnail Card */}
          <div className="about-hero-video-wrapper">
            <div className={`about-video-card ${isPlaying ? "expanded" : "collapsed"}`}>
              <div className="about-iframe-container" style={{ display: isPlaying ? "block" : "none" }}>
                {isPlaying && (
                  <iframe
                    src="https://drive.google.com/file/d/1y0hdyM9jmftGtofvWF9o0AJx1Ah5ntfw/preview?autoplay=1"
                    title="Sailors Academy Video"
                    className="about-video-iframe"
                    allow="autoplay; fullscreen; encrypted-media"
                    allowFullScreen
                  />
                )}
                <div className="about-video-controls-overlay">
                  <button
                    type="button"
                    className="about-video-collapse-btn"
                    onClick={() => setIsPlaying(false)}
                    title="Minimize Video"
                  >
                    <FontAwesomeIcon icon={faCompress} />
                    <span>Minimize</span>
                  </button>
                </div>
              </div>

              {!isPlaying && (
                <div
                  className="about-thumbnail-box"
                  onClick={() => setIsPlaying(true)}
                  role="button"
                  tabIndex={0}
                >
                  <img
                    src={thumbnailAbout}
                    alt="Sailors Academy Video Preview"
                    className="about-thumbnail-img"
                  />
                  <div className="about-thumbnail-overlay">
                    <div
                      className="about-play-button"
                      aria-label="Play Sailors Academy Video"
                    >
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR VISION & PURPOSE SECTION */}
      <section className="about-vision-section">
        <div className="about-vision-container">
          {/* Left Column: Heading */}
          <div className="about-vision-left scroll-reveal">
            <h2 className="about-vision-title">
              Our Vision &<br />Purpose
            </h2>
            <div className="about-vision-yellow-bar" />
          </div>

          {/* Right Column: Mission & Vision Content */}
          <div className="about-vision-right">
            <div className="about-vision-block scroll-reveal">
              <h3 className="about-vision-subhead">THE MISSION</h3>
              <p className="about-vision-text">
                To provide high-impact, practical, and globally relevant technical education in digital marketing, web technologies, and creative design. We bridge the gap between classroom theory and real-world execution, ensuring every student steps into the workforce ready to lead.
              </p>
            </div>

            <div className="about-vision-block scroll-reveal">
              <h3 className="about-vision-subhead">THE VISION</h3>
              <p className="about-vision-text">
                We envision an inclusive tech ecosystem where practical learning is accessible to all backgrounds. Through cutting-edge curricula, hands-on internships, and robust community engagement, Sailors Academy aims to be the premiere digital training hub in Punjab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DARK GREEN STATS BAR SECTION */}
      <section className="about-stats-section" ref={statsRef}>
        <div className="about-stats-container">
          <div className="about-stat-item scroll-reveal">
            <h3 className="about-stat-number">{stat1}%</h3>
            <p className="about-stat-label">
              OF RECENT STUDENTS STARTED NEW ROLES WITHIN 90 DAYS OF GRADUATION
            </p>
          </div>

          <div className="about-stat-item scroll-reveal">
            <h3 className="about-stat-number">{stat2}+</h3>
            <p className="about-stat-label">
              SPECIALIZED COURSES IN PERFORMANCE MARKETING, DESIGN, & CODE
            </p>
          </div>

          <div className="about-stat-item scroll-reveal">
            <h3 className="about-stat-number">#1</h3>
            <p className="about-stat-label">
              RANKED PRACTICAL TECH TRAINING ACADEMY IN LUDHIANA
            </p>
          </div>

          <div className="about-stat-item scroll-reveal">
            <h3 className="about-stat-number">{stat3}+</h3>
            <p className="about-stat-label">
              STUDENTS PLACED IN HIGH-PACKAGE TECH CAREERS GLOBALLY
            </p>
          </div>
        </div>
      </section>

      {/* 4. MENTORS & EXPERTS SECTION */}
      <section className="about-mentors-section">
        <div className="about-mentors-container">
          {/* Header */}
          <div className="about-mentors-header scroll-reveal">
            <h2 className="about-mentors-title">Mentors & Experts</h2>
            <p className="about-mentors-subtitle">
              Learn directly from active industry operators who don't just teach, but ship digital assets daily.
            </p>
          </div>

          <div className="about-mentors-grid">
            {/* Card 1 */}
            <div className="mentor-card scroll-reveal">
              <div className="mentor-card-img-wrap">
                <img src={vishal} alt="Vishal Bhargav" className="mentor-card-img" />
              </div>
              <div className="mentor-card-body">
                <h3 className="mentor-name">Vishal Bhargav</h3>
                <span className="mentor-role">PHP SPECIALIST</span>
                <p className="mentor-desc">
                  Vishal Bhargav has 12+ years of experience in PHP and web development.
                </p>
                <div className="mentor-tags">
                  <span className="mentor-tag">Server</span>
                  <span className="mentor-tag">PHP</span>
                  <span className="mentor-tag">Deployment</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="mentor-card scroll-reveal">
              <div className="mentor-card-img-wrap">
                <img src={gurleen} alt="Gurleen Kaur" className="mentor-card-img" />
              </div>
              <div className="mentor-card-body">
                <h3 className="mentor-name">Gurleen Kaur</h3>
                <span className="mentor-role">SOCIAL MEDIA MARKETING</span>
                <p className="mentor-desc">
                  Gurleen is a creative force behind some of North India’s most viral content campaigns.
                </p>
                <div className="mentor-tags">
                  <span className="mentor-tag">Instagram</span>
                  <span className="mentor-tag">Meta Ads</span>
                  <span className="mentor-tag">Reels</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="mentor-card scroll-reveal">
              <div className="mentor-card-img-wrap">
                <img src={gaurav} alt="Gaurav" className="mentor-card-img" />
              </div>
              <div className="mentor-card-body">
                <h3 className="mentor-name">Gaurav</h3>
                <span className="mentor-role">CYBER SECURITY</span>
                <p className="mentor-desc">
                  Gaurav is a systems architect who spent a decade engineering enterprise-level web architectures.
                </p>
                <div className="mentor-tags">
                  <span className="mentor-tag">Networking</span>
                  <span className="mentor-tag">Cloud</span>
                  <span className="mentor-tag">Cyber Security</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="mentor-card scroll-reveal">
              <div className="mentor-card-img-wrap">
                <img src={sukhpreet} alt="Rohan Verma" className="mentor-card-img" />
              </div>
              <div className="mentor-card-body">
                <h3 className="mentor-name">Sukhpreet Singh</h3>
                <span className="mentor-role">MERN Stack</span>
                <p className="mentor-desc">
                  Sukhpreet is a full-stack developer with expertise in MERN stack.
                </p>
                <div className="mentor-tags">
                  <span className="mentor-tag">React</span>
                  <span className="mentor-tag">NodeJs</span>
                  <span className="mentor-tag">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="mentor-card scroll-reveal">
              <div className="mentor-card-img-wrap">
                <img src={pawan} alt="Pawandeep Singh" className="mentor-card-img" />
              </div>
              <div className="mentor-card-body">
                <h3 className="mentor-name">Pawandeep Singh</h3>
                <span className="mentor-role">SEO & DATA ANALYTICS</span>
                <p className="mentor-desc">
                  Pawandeep is an expert in performance marketing and Google Ads.
                </p>
                <div className="mentor-tags">
                  <span className="mentor-tag">SEO</span>
                  <span className="mentor-tag">Google Ads</span>
                  <span className="mentor-tag">Meta Ads</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="mentor-card scroll-reveal">
              <div className="mentor-card-img-wrap">
                <img src={satvir} alt="Satvir Singh" className="mentor-card-img" />
              </div>
              <div className="mentor-card-body">
                <h3 className="mentor-name">Satvir Singh</h3>
                <span className="mentor-role">UI/UX in Figma</span>
                <p className="mentor-desc">
                  Satvir leads technical UI/UX in Figma, and asset optimization.
                </p>
                <div className="mentor-tags">
                  <span className="mentor-tag">Figma</span>
                  <span className="mentor-tag">Photoshop</span>
                  <span className="mentor-tag">Illustrator</span>
                </div>
              </div>
            </div>
            {/* Card 7 */}
            <div className="mentor-card scroll-reveal">
              <div className="mentor-card-img-wrap">
                <img src={sadik} alt="Sadik" className="mentor-card-img" />
              </div>
              <div className="mentor-card-body">
                <h3 className="mentor-name">Sadik</h3>
                <span className="mentor-role">Video Editing</span>
                <p className="mentor-desc">
                  Sadik is a video editing expert who helps students and businesses create stunning.
                </p>
                <div className="mentor-tags">
                  <span className="mentor-tag">Video Editing</span>
                  <span className="mentor-tag">Premiere Pro</span>
                  <span className="mentor-tag">After Effects</span>
                </div>
              </div>
            </div>
            {/* Card 8 */}
            <div className="mentor-card scroll-reveal">
              <div className="mentor-card-img-wrap">
                <img src={tiwari} alt="Vishal Tiwari" className="mentor-card-img" />
              </div>
              <div className="mentor-card-body">
                <h3 className="mentor-name">Vishal Tiwari</h3>
                <span className="mentor-role">Wordpress & AI Automation</span>
                <p className="mentor-desc">
                  Vishal Tiwari is a Wordpress expert who helps students and businesses create stunning.
                </p>
                <div className="mentor-tags">
                  <span className="mentor-tag">Wordpress</span>
                  <span className="mentor-tag">Plugins</span>
                  <span className="mentor-tag">CMS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR JOURNEY SO FAR SECTION */}
      <section className="about-journey-section" ref={journeyRef}>
        <div className="about-journey-container">
          {/* Header */}
          <div className="about-journey-header scroll-reveal">
            <h2 className="about-journey-title">Our Journey so Far</h2>
            <p className="about-journey-subtitle">
              Tracing our evolutionary steps from a boutique creative lab to a premier digital career hub.
            </p>
          </div>

          {/* Timeline */}
          <div className={`timeline-wrapper ${journeyVisible ? "active" : ""}`}>
            <div className="timeline-thread" />

            <div className="timeline-items">
              {/* Item 1 - 2018 */}
              <div className="timeline-item left-year scroll-reveal">
                <div className="timeline-left">
                  <span className="timeline-year">2018</span>
                </div>
                <div className="timeline-node">
                  <div className="node-dot" />
                </div>
                <div className="timeline-right">
                  <h3 className="timeline-item-title">The Launchpad</h3>
                  <p className="timeline-item-desc">
                    Sailor's Academy was founded in Ludhiana with a simple goal: provide real practical agency workflows to students instead of dry textbooks.
                  </p>
                </div>
              </div>

              {/* Item 2 - 2021 */}
              <div className="timeline-item right-year scroll-reveal">
                <div className="timeline-left">
                  <h3 className="timeline-item-title">Expanding the Deck</h3>
                  <p className="timeline-item-desc">
                    Introduced advanced technical courses in PHP development, Laravel architectures, and UI/UX design. Teamed with local technology groups.
                  </p>
                </div>
                <div className="timeline-node">
                  <div className="node-dot" />
                </div>
                <div className="timeline-right">
                  <span className="timeline-year">2021</span>
                </div>
              </div>

              {/* Item 3 - 2024 */}
              <div className="timeline-item left-year scroll-reveal">
                <div className="timeline-left">
                  <span className="timeline-year">2024</span>
                </div>
                <div className="timeline-node">
                  <div className="node-dot" />
                </div>
                <div className="timeline-right">
                  <h3 className="timeline-item-title">A Gold Standard</h3>
                  <p className="timeline-item-desc">
                    Recognized as the premier training institute in Punjab. Achieved record placement packages of over 6 Lakh Rupees.
                  </p>
                </div>
              </div>

              {/* Item 4 - 2026 */}
              <div className="timeline-item right-year scroll-reveal">
                <div className="timeline-left">
                  <h3 className="timeline-item-title">The Generative Shift</h3>
                  <p className="timeline-item-desc">
                    Fully integrated modern Generative AI, Meta Ads Automation, and technical workflows into the entire academy curriculum.
                  </p>
                </div>
                <div className="timeline-node">
                  <div className="node-dot" />
                </div>
                <div className="timeline-right">
                  <span className="timeline-year">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;