import { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faClock, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import sailor1 from "../assets/sailor1.JPG";
import sailor2 from "../assets/sailor2.JPG";
import sailor3 from "../assets/sailor3.JPG";
import sailor4 from "../assets/sailor4.JPG";
import menuImg from "../assets/menu.png";
import about1 from "../assets/about-sailor1.jpg";
import about2 from "../assets/about-sailor2.jpg";
import about3 from "../assets/about-sailor3.JPG";
import about4 from "../assets/about-sailor4.jpg";
import about5 from "../assets/about-sailor5.JPG";
import student1 from "../assets/student1.jpg";

import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";
import course6 from "../assets/course6.jpg";
import course7 from "../assets/course7.jpg";
import course8 from "../assets/course8.jpg";
import real2 from "../assets/AI and Automation Professional Program.jpg";

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import EnquiryForm from "../components/EnquiryForm";
import FoldText from "../components/FoldText";
import "./style/style.css";

const heroImages = [sailor1, sailor2, sailor3, sailor4];

const aboutSlides = [
    {
        image: menuImg,
        title: "Modern Interactive Learning Labs",
        desc: "Equipped with state-of-the-art workstations & mentorship desks"
    },
    {
        image: about1,
        title: "Collaborative Workshop Spaces",
        desc: "Hands-on team projects and interactive code-reviews"
    },
    {
        image: about2,
        title: "Executive Training Classrooms",
        desc: "Focused group discussions and corporate leadership sessions"
    },
    {
        image: about3,
        title: "Advanced Technology & AI Center",
        desc: "Practical exposure to current industry frameworks and tools"
    },
    {
        image: about4,
        title: "1-on-1 Advisory & Mentorship",
        desc: "Personalized roadmap planning and technical guidance"
    },
    {
        image: about5,
        title: "Industry-Ready Digital Atmosphere",
        desc: "Simulating corporate workflows for accelerated career growth"
    }
];

// 6 images loop for seamless marquee
const studentImages = [student1, student2, student3, sailor1, sailor2, sailor3];


const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [aboutSlideIndex, setAboutSlideIndex] = useState(0);
    const [salaryCount, setSalaryCount] = useState(1);

    // Marquee drag-to-scroll refs
    const marqueeWrapRef = useRef(null);
    const marqueeTrackRef = useRef(null);
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const dragScrollLeft = useRef(0);
    const autoScrollResumeTimer = useRef(null);
    const manualOffset = useRef(0);
    const rafId = useRef(null);
    const autoRunning = useRef(true);
    const lastTimestamp = useRef(null);
    const SPEED = 80; // pixels per second for auto scroll

    // Auto-scroll loop using requestAnimationFrame
    const autoScrollLoop = useCallback((timestamp) => {
        if (!autoRunning.current || !marqueeTrackRef.current) return;
        if (lastTimestamp.current !== null) {
            const delta = (timestamp - lastTimestamp.current) / 1000;
            const track = marqueeTrackRef.current;
            const totalWidth = track.scrollWidth / 2; // duplicated content
            manualOffset.current = (manualOffset.current + SPEED * delta) % totalWidth;
            track.style.transform = `translateX(-${manualOffset.current}px)`;
        }
        lastTimestamp.current = timestamp;
        rafId.current = requestAnimationFrame(autoScrollLoop);
    }, []);

    const stopAutoScroll = useCallback(() => {
        autoRunning.current = false;
        lastTimestamp.current = null;
        if (rafId.current) cancelAnimationFrame(rafId.current);
    }, []);

    const startAutoScroll = useCallback(() => {
        autoRunning.current = true;
        lastTimestamp.current = null;
        rafId.current = requestAnimationFrame(autoScrollLoop);
    }, [autoScrollLoop]);

    useEffect(() => {
        const wrapper = marqueeWrapRef.current;
        const track = marqueeTrackRef.current;
        if (!wrapper || !track) return;

        // Disable CSS animation — we drive it via RAF
        track.style.animation = 'none';
        track.style.willChange = 'transform';
        startAutoScroll();

        const onMouseDown = (e) => {
            isDragging.current = true;
            dragStartX.current = e.clientX;
            dragScrollLeft.current = manualOffset.current;
            stopAutoScroll();
            if (autoScrollResumeTimer.current) clearTimeout(autoScrollResumeTimer.current);
            wrapper.classList.add('grabbing');
            e.preventDefault();
        };

        const onMouseMove = (e) => {
            if (!isDragging.current) return;
            const dx = dragStartX.current - e.clientX;
            const totalWidth = track.scrollWidth / 2;
            manualOffset.current = ((dragScrollLeft.current + dx) % totalWidth + totalWidth) % totalWidth;
            track.style.transform = `translateX(-${manualOffset.current}px)`;
        };

        const onMouseUp = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            wrapper.classList.remove('grabbing');
            autoScrollResumeTimer.current = setTimeout(() => startAutoScroll(), 800);
        };

        const onMouseLeave = () => {
            if (!isDragging.current) return;
            isDragging.current = false;
            wrapper.classList.remove('grabbing');
            autoScrollResumeTimer.current = setTimeout(() => startAutoScroll(), 800);
        };

        // Touch events
        const onTouchStart = (e) => {
            isDragging.current = true;
            dragStartX.current = e.touches[0].clientX;
            dragScrollLeft.current = manualOffset.current;
            stopAutoScroll();
            if (autoScrollResumeTimer.current) clearTimeout(autoScrollResumeTimer.current);
        };

        const onTouchMove = (e) => {
            if (!isDragging.current) return;
            const dx = dragStartX.current - e.touches[0].clientX;
            const totalWidth = track.scrollWidth / 2;
            manualOffset.current = ((dragScrollLeft.current + dx) % totalWidth + totalWidth) % totalWidth;
            track.style.transform = `translateX(-${manualOffset.current}px)`;
            e.preventDefault();
        };

        const onTouchEnd = () => {
            isDragging.current = false;
            autoScrollResumeTimer.current = setTimeout(() => startAutoScroll(), 800);
        };

        wrapper.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        wrapper.addEventListener('mouseleave', onMouseLeave);
        wrapper.addEventListener('touchstart', onTouchStart, { passive: true });
        wrapper.addEventListener('touchmove', onTouchMove, { passive: false });
        wrapper.addEventListener('touchend', onTouchEnd);

        return () => {
            stopAutoScroll();
            if (autoScrollResumeTimer.current) clearTimeout(autoScrollResumeTimer.current);
            wrapper.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            wrapper.removeEventListener('mouseleave', onMouseLeave);
            wrapper.removeEventListener('touchstart', onTouchStart);
            wrapper.removeEventListener('touchmove', onTouchMove);
            wrapper.removeEventListener('touchend', onTouchEnd);
        };
    }, [startAutoScroll, stopAutoScroll]);

    // IntersectionObserver to trigger animate__fadeInUp on scroll
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

    // Animated salary counter 1 to 30
    useEffect(() => {
        let start = 1;
        const end = 30;
        const duration = 1200; // 1.2s total
        const incrementTime = duration / (end - start);

        const timer = setInterval(() => {
            start += 1;
            setSalaryCount(start);
            if (start >= end) {
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, []);


    // Hero background image timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);


    // About slider auto-play timer (3.5 seconds)
    useEffect(() => {
        const timer = setInterval(() => {
            setAboutSlideIndex((prevIndex) => (prevIndex + 1) % aboutSlides.length);
        }, 3500);

        return () => clearInterval(timer);
    }, []);

    const handlePrevSlide = () => {
        setAboutSlideIndex((prev) => (prev === 0 ? aboutSlides.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setAboutSlideIndex((prev) => (prev + 1) % aboutSlides.length);
    };

    return (
        <>
            {/* 1. HERO SECTION */}
            <section className="hero-section">
                {/* Background Slideshow with Continuous Slow Zoom & Fade */}
                <div className="hero-bg-container">
                    {heroImages.map((img, index) => (
                        <div
                            key={index}
                            className={`hero-bg-slide ${index === currentImageIndex ? "active" : ""}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                    {/* Overlay gradient using green primary tone */}
                    <div className="hero-overlay" />
                </div>

                <div className="hero-container">
                    {/* Left Content */}
                    <div className="hero-content">
                        <div className="hero-badge">
                            LUDHIANA'S PREMIER PROFESSIONAL ACADEMY
                        </div>

                        <h1 className="hero-title">
                            <FoldText
                                text={"Secure Your Future With Premium Technical Training"}
                                splitBy="char"
                                hinge="top"
                                trigger="mount"
                                duration={0.65}
                                stagger={0.035}
                                ease="power3.out"
                                perspective={700}
                                creaseShading={0.55}
                            />
                        </h1>

                        <p className="hero-description">

                            Providing rigorous, industry-accredited coursework in Digital Marketing, Systems
                            Engineering, and Creative Leadership. Join over 500+ successful alumni globally.
                        </p>

                        {/* Placement Guarantee Card */}
                        <div className="hero-stat-card">
                            <div className="hero-stat-salary">
                                <span className="hero-stat-amount">₹{salaryCount}k</span>
                                <span className="hero-stat-label">/ MONTH AVG</span>
                            </div>
                            <div className="hero-stat-divider" />
                            <div className="hero-stat-info">
                                <h4>Highest Placement Guarantee</h4>
                                <p>Over 500+ student sailors successfully placed at leading digital corporate offices.</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Form Card */}
                    <div className="hero-form-wrapper">
                        <EnquiryForm />
                    </div>
                </div>
            </section>

            {/* 2. NOTICE ANNOUNCEMENT BAR (Above About Section) */}
            <div className="notice-announcement-bar">
                <div className="notice-content scroll-reveal">
                    <div className="notice-left">
                        <span className="notice-badge">NOTICE</span>
                        <span className="notice-text">
                            Generate your certified e-Certificate of Successful Completion for industry placements directly online.
                        </span>
                    </div>
                    <Link to="/certificate" className="notice-btn btn-effect">
                        Validate Certificate
                    </Link>
                </div>
            </div>

            {/* 3. ABOUT SAILORS ACADEMY SECTION */}
            <section className="about-section">
                <div className="about-container">
                    {/* Left Text Content */}
                    <div className="about-content scroll-reveal">
                        <span className="about-badge">FOUNDED ON EXCELLENCE</span>
                        <h2 className="about-title">About Sailors Academy</h2>

                        <div className="about-paragraphs">
                            <p>
                                Welcome to Sailor's Academy, Ludhiana's trusted destination for rigorous
                                digital competence. We deliver specialized executive programs in Information
                                Architecture, Social Media Ecosystems, Advanced Web Engineering, and Creative
                                Asset Production.
                            </p>
                            <p>
                                Whether preparing to step into contemporary tech enterprises or scaling your
                                existing strategic capability, we build hands-on, high-retention frameworks to
                                secure your career trajectory.
                            </p>
                        </div>

                        <Link to="/visit" className="about-cta-btn btn-effect">
                            Schedule Campus Visit
                        </Link>
                    </div>

                    {/* Right Slider with 6 Slides and Arrows */}
                    <div className="about-slider-wrapper scroll-reveal">
                        <div className="about-slider-card">
                            {aboutSlides.map((slide, idx) => (
                                <div
                                    key={idx}
                                    className={`about-slide-item ${idx === aboutSlideIndex ? "active" : ""}`}
                                >
                                    <img
                                        src={slide.image}
                                        alt={`Sailors Academy - ${slide.title}`}
                                        className="about-slide-img"
                                    />
                                    {/* Bottom Blackish Gradient Layer with Text */}
                                    <div className="about-slide-caption">
                                        <h4 className="about-caption-title">{slide.title}</h4>
                                        <p className="about-caption-desc">{slide.desc}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Prev / Next Arrows */}
                            <button
                                type="button"
                                className="about-slider-arrow prev"
                                onClick={handlePrevSlide}
                                aria-label="Previous image"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>

                            <button
                                type="button"
                                className="about-slider-arrow next"
                                onClick={handleNextSlide}
                                aria-label="Next image"
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>

                            {/* Slider Dots */}
                            <div className="about-slider-dots">
                                {aboutSlides.map((_, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        className={`about-slider-dot ${idx === aboutSlideIndex ? "active" : ""}`}
                                        onClick={() => setAboutSlideIndex(idx)}
                                        aria-label={`Slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. STATS METRICS COUNTER BAR */}
            <section className="stats-section">
    <div className="stats-container">

        {/* Card 1 */}
        <div className="stat-pill-card scroll-reveal">
            <div className="stat-circle-badge">
                <span>83%</span>
            </div>
            <div className="stat-pill-text">
                <h3>PLACEMENT SUCCESS RATE</h3>
                <Link to="/enroll" className="stat-enroll-link">
                    Enroll Now
                </Link>
            </div>
        </div>

        {/* Card 2 */}
        <div className="stat-pill-card scroll-reveal">
            <div className="stat-circle-badge">
                <span>50+</span>
            </div>
            <div className="stat-pill-text">
                <h3>INDUSTRY-READY MODULES</h3>
                <Link to="/enroll" className="stat-enroll-link">
                    Enroll Now
                </Link>
            </div>
        </div>

        {/* Card 3 */}
        <div className="stat-pill-card scroll-reveal">
            <div className="stat-circle-badge">
                <span>#1</span>
            </div>
            <div className="stat-pill-text">
                <h3>STUDENT-TRUSTED INSTITUTE</h3>
                <Link to="/enroll" className="stat-enroll-link">
                    Enroll Now
                </Link>
            </div>
        </div>

    </div>
</section>

            {/* 5. ACADEMIC TRACKS / COURSES GRID SECTION */}
            <section className="academic-tracks-section">
                <div className="tracks-container">
                    {/* Header row */}
                    <div className="tracks-header scroll-reveal">
                        <div className="tracks-header-left">
                            <span className="tracks-badge">PROFESSIONAL SYLLABUS</span>
                            <h2 className="tracks-title">Explore Our Core Academic Tracks</h2>
                        </div>
                        <Link to="/courses" className="brochure-download-btn btn-effect">
                            Explore All
                        </Link>
                    </div>

                    {/* 8 Tracks Cards Grid (4x4 layout) */}
                    <div className="tracks-grid">
                        {/* Card 1 */}
                        <div className="track-card scroll-reveal">
                            <div className="track-image-wrap">
                                <img src={course1} alt="Cyber Security & Networks" className="track-img" />
                            </div>
                            <div className="track-content">
                                <h3 className="track-name">Cyber Security & Networks</h3>
                                <p className="track-desc">
                                    Master defensive strategies, server hardened states, and structural threat analytics.
                                </p>
                                <div className="catalog-card-meta-block">
                                    <div className="catalog-meta-top-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faClock} className="catalog-info-icon" />
                                            <span>16 Weeks</span>
                                        </div>
                                        <span className="catalog-meta-dot">•</span>
                                        <div className="catalog-card-price-inline">
                                            <span>Starting from ₹6000 Only</span>
                                        </div>
                                    </div>
                                    <div className="catalog-meta-bottom-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faBookOpen} className="catalog-info-icon" />
                                            <span>48 Lessons</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="track-card-footer">
                                    <span className="track-status-badge badge-demanded">In Demand</span>
                                    <Link to="/enroll" className="track-enroll-btn btn-effect">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="track-card scroll-reveal">
                            <div className="track-image-wrap">
                                <img src={course2} alt="Performance Marketing" className="track-img" />
                            </div>
                            <div className="track-content">
                                <h3 className="track-name">Performance Marketing</h3>
                                <p className="track-desc">
                                    Direct client acquisition modeling, budget deployment strategies, and conversion tracking.
                                </p>
                                <div className="catalog-card-meta-block">
                                    <div className="catalog-meta-top-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faClock} className="catalog-info-icon" />
                                            <span>8 Weeks</span>
                                        </div>
                                        <span className="catalog-meta-dot">•</span>
                                        <div className="catalog-card-price-inline">
                                            <span>Starting from ₹3000 Only</span>
                                        </div>
                                    </div>
                                    <div className="catalog-meta-bottom-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faBookOpen} className="catalog-info-icon" />
                                            <span>24 Lessons</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="track-card-footer">
                                    <span className="track-status-badge badge-trending">Trending</span>
                                    <Link to="/enroll" className="track-enroll-btn btn-effect">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="track-card scroll-reveal">
                            <div className="track-image-wrap">
                                <img src={real2} alt="AI and Automation Professional Program" className="track-img" />
                            </div>
                            <div className="track-content">
                                <h3 className="track-name">AI and Automation Professional Program</h3>
                                <p className="track-desc">
                                   Professional training in corporate AI strategies and workflow automation.
                                </p>
                                <div className="catalog-card-meta-block">
                                    <div className="catalog-meta-top-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faClock} className="catalog-info-icon" />
                                            <span>16 Weeks</span>
                                        </div>
                                        <span className="catalog-meta-dot">•</span>
                                        <div className="catalog-card-price-inline">
                                            <span>Starting from ₹6000 Only</span>
                                        </div>
                                    </div>
                                    <div className="catalog-meta-bottom-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faBookOpen} className="catalog-info-icon" />
                                            <span>48 Lessons</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="track-card-footer">
                                    <span className="track-status-badge badge-popular">Most Popular</span>
                                    <Link to="/enroll" className="track-enroll-btn btn-effect">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="track-card scroll-reveal">
                            <div className="track-image-wrap">
                                <img src={course4} alt="Social Media Management" className="track-img" />
                            </div>
                            <div className="track-content">
                                <h3 className="track-name">Social Media Management</h3>
                                <p className="track-desc">
                                    Strategic brand positioning, distribution operations, and organic sentiment indexing.
                                </p>
                                <div className="catalog-card-meta-block">
                                    <div className="catalog-meta-top-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faClock} className="catalog-info-icon" />
                                            <span>8 Weeks</span>
                                        </div>
                                        <span className="catalog-meta-dot">•</span>
                                        <div className="catalog-card-price-inline">
                                            <span>Starting from ₹2500 Only</span>
                                        </div>
                                    </div>
                                    <div className="catalog-meta-bottom-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faBookOpen} className="catalog-info-icon" />
                                            <span>24 Lessons</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="track-card-footer">
                                    <span className="track-status-badge badge-seasonal">Seasonal</span>
                                    <Link to="/enroll" className="track-enroll-btn btn-effect">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="track-card scroll-reveal">
                            <div className="track-image-wrap">
                                <img src={course5} alt="Video Production & AI Editing" className="track-img" />
                            </div>
                            <div className="track-content">
                                <h3 className="track-name">Video Production & AI Editing</h3>
                                <p className="track-desc">
                                    Technical editing pipelines, compositing, and machine-assisted asset optimization.
                                </p>
                                <div className="catalog-card-meta-block">
                                    <div className="catalog-meta-top-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faClock} className="catalog-info-icon" />
                                            <span>8 Weeks</span>
                                        </div>
                                        <span className="catalog-meta-dot">•</span>
                                        <div className="catalog-card-price-inline">
                                            <span>Starting from ₹3000 Only</span>
                                        </div>
                                    </div>
                                    <div className="catalog-meta-bottom-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faBookOpen} className="catalog-info-icon" />
                                            <span>24 Lessons</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="track-card-footer">
                                    <span className="track-status-badge badge-trending">Trending</span>
                                    <Link to="/enroll" className="track-enroll-btn btn-effect">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="track-card scroll-reveal">
                            <div className="track-image-wrap">
                                <img src={course6} alt="SEO & Data Discovery" className="track-img" />
                            </div>
                            <div className="track-content">
                                <h3 className="track-name">SEO & Data Discovery</h3>
                                <p className="track-desc">
                                    Semantic search indexing, crawl architecture optimization, and competitive search modeling.
                                </p>
                                <div className="catalog-card-meta-block">
                                    <div className="catalog-meta-top-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faClock} className="catalog-info-icon" />
                                            <span>8 Weeks</span>
                                        </div>
                                        <span className="catalog-meta-dot">•</span>
                                        <div className="catalog-card-price-inline">
                                            <span>Starting from ₹2500 Only</span>
                                        </div>
                                    </div>
                                    <div className="catalog-meta-bottom-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faBookOpen} className="catalog-info-icon" />
                                            <span>24 Lessons</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="track-card-footer">
                                    <span className="track-status-badge badge-demanded">In Demand</span>
                                    <Link to="/enroll" className="track-enroll-btn btn-effect">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="track-card scroll-reveal">
                            <div className="track-image-wrap">
                                <img src={course7} alt="UI/UX Design with Figma" className="track-img" />
                            </div>
                            <div className="track-content">
                                <h3 className="track-name">UI/UX Design with Figma</h3>
                                <p className="track-desc">
                                    Design intuitive interfaces, interactive prototypes, and industry-standard design systems.
                                </p>
                                <div className="catalog-card-meta-block">
                                    <div className="catalog-meta-top-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faClock} className="catalog-info-icon" />
                                            <span>12 Weeks</span>
                                        </div>
                                        <span className="catalog-meta-dot">•</span>
                                        <div className="catalog-card-price-inline">
                                            <span>Starting from ₹3000 Only</span>
                                        </div>
                                    </div>
                                    <div className="catalog-meta-bottom-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faBookOpen} className="catalog-info-icon" />
                                            <span>36 Lessons</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="track-card-footer">
                                    <span className="track-status-badge badge-popular">Most Popular</span>
                                    <Link to="/enroll" className="track-enroll-btn btn-effect">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Card 8 */}
                        <div className="track-card scroll-reveal">
                            <div className="track-image-wrap">
                                <img src={course8} alt="Full Stack Web Development" className="track-img" />
                            </div>
                            <div className="track-content">
                                <h3 className="track-name">Full Stack Web Development</h3>
                                <p className="track-desc">
                                    Build scalable modern web applications from frontend interfaces to powerful backend APIs.
                                </p>
                                <div className="catalog-card-meta-block">
                                    <div className="catalog-meta-top-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faClock} className="catalog-info-icon" />
                                            <span>24 Weeks</span>
                                        </div>
                                        <span className="catalog-meta-dot">•</span>
                                        <div className="catalog-card-price-inline">
                                            <span>Starting from ₹6000 Only</span>
                                        </div>
                                    </div>
                                    <div className="catalog-meta-bottom-row">
                                        <div className="catalog-info-item">
                                            <FontAwesomeIcon icon={faBookOpen} className="catalog-info-icon" />
                                            <span>72 Lessons</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="track-card-footer">
                                    <span className="track-status-badge badge-demanded">In Demand</span>
                                    <Link to="/enroll" className="track-enroll-btn btn-effect">
                                        Enroll Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. STUDENT LIFE & SHARED VALUES SECTION (Tilted Marquee Gallery) */}
            <section className="student-life-section">
                <div className="student-life-container">
                    {/* Header row */}
                    <div className="student-life-header scroll-reveal">
                        <div className="student-life-header-left">
                            <span className="student-life-badge">CAMPUS ECOSYSTEM</span>
                            <h2 className="student-life-title">Student Life & Shared Values</h2>
                            <p className="student-life-desc">
                                Beyond strict technical execution, our student cohort thrives inside a robust peer community.
                                Collaborate in modern hack-labs, lead digital taskforces, and secure lifetime professional linkages.
                            </p>
                        </div>
                        <Link to="/student-life" className="student-guide-btn btn-effect">
                            Read Student Guide
                        </Link>
                    </div>
                </div>

                {/* Seamless Tilted Marquee Loop — drag/touch + auto-scroll */}
                <div className="marquee-wrapper scroll-reveal" ref={marqueeWrapRef}>
                    <div className="marquee-track" ref={marqueeTrackRef}>
                        {/* 1st set of 6 */}
                        {studentImages.map((img, idx) => (
                            <div key={`s1-${idx}`} className={`marquee-card tilt-${(idx % 3) + 1}`}>
                                <img src={img} alt={`Student Life ${idx + 1}`} className="marquee-img" />
                            </div>
                        ))}
                        {/* 2nd set of 6 for infinite seamless loop */}
                        {studentImages.map((img, idx) => (
                            <div key={`s2-${idx}`} className={`marquee-card tilt-${(idx % 3) + 1}`}>
                                <img src={img} alt={`Student Life ${idx + 1}`} className="marquee-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. NEWS & ACADEMIC EVENTS SECTION */}
            <section className="news-section">
                <div className="news-container">
                    {/* Header row */}
                    <div className="news-header scroll-reveal">
                        <h2 className="news-title">News & Academic Events</h2>
                        <Link to="/events" className="news-all-btn btn-effect">
                            View All Reports
                        </Link>
                    </div>

                    {/* 3 News Event Cards */}
                    <div className="news-grid">
                        {/* Card 1 */}
                        <div className="news-card scroll-reveal">
                            <div className="news-card-image-wrap">
                                <img src={news1} alt="Securing Market Relevance" className="news-card-img" />
                            </div>
                            <div className="news-card-body">
                                <div className="news-card-header">
                                    <span className="news-number">01</span>
                                    <span className="news-date">March 29, 2026</span>
                                </div>
                                <h3 className="news-card-title">
                                    Securing Market Relevance: Digital Competence in 2026
                                </h3>
                                <p className="news-card-desc">
                                    Discover the critical shift in operational algorithm pipelines and automated sentiment modeling transforming high-value commerce workflows this year.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="news-card scroll-reveal">
                            <div className="news-card-image-wrap">
                                <img src={news2} alt="Enterprise Production Guidelines" className="news-card-img" />
                            </div>
                            <div className="news-card-body">
                                <div className="news-card-header">
                                    <span className="news-number">02</span>
                                    <span className="news-date">January 16, 2026</span>
                                </div>
                                <h3 className="news-card-title">
                                    Enterprise Production Guidelines for Non-Technical Directors
                                </h3>
                                <p className="news-card-desc">
                                    A pragmatic overview outlining how corporate stakeholders successfully interface with developer ecosystems without deep engineering overhead.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="news-card scroll-reveal">
                            <div className="news-card-image-wrap">
                                <img src={news3} alt="Deploying Local Search Strategies" className="news-card-img" />
                            </div>
                            <div className="news-card-body">
                                <div className="news-card-header">
                                    <span className="news-number">03</span>
                                    <span className="news-date">December 18, 2025</span>
                                </div>
                                <h3 className="news-card-title">
                                    Deploying Local Search Strategies at Scale
                                </h3>
                                <p className="news-card-desc">
                                    Actionable frameworks outlining localized keyword capture, architecture optimization, and site structural authority audits.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            
        </>
    );
};

export default Home;






