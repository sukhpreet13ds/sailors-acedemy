import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay, faPause, faCompress } from "@fortawesome/free-solid-svg-icons";
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import sailor1 from "../assets/sailor1.JPG";
import sailor2 from "../assets/sailor2.JPG";
import sailor3 from "../assets/sailor3.JPG";
import thumbnailAbout from "../assets/thumbnail-about.png";
import FoldText from "../components/FoldText";
import "./style/style.css";

const aboutHeroImages = [student1, student2, student3, sailor1, sailor2, sailor3];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Background slideshow timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutHeroImages.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-page">
      {/* ABOUT HERO SECTION */}
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
              {/* iFrame is mounted so it's ready; src includes autoplay when isPlaying */}
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
                {/* Floating Collapse Controls */}
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

              {/* Preview Thumbnail Box */}
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
    </div>
  );
};

export default About;