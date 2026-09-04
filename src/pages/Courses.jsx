import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock, faBookOpen, faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import sailor1 from "../assets/sailor1.JPG";
import sailor2 from "../assets/sailor2.JPG";
import sailor3 from "../assets/sailor3.JPG";
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";
import course6 from "../assets/course6.jpg";
import course7 from "../assets/course7.jpg";
import course8 from "../assets/course8.jpg";
import real1 from "../assets/AI Agent and Automation.jpg";
import real2 from "../assets/AI and Automation Professional Program.jpg";
import real3 from "../assets/ChatGPT for Business.jpg";
import real4 from "../assets/Generative AI & Prompt Engineering.jpg";
import real5 from "../assets/Generative AI and Agentic AI Track.jpg";
import real6 from "../assets/Prompt Engineering.jpg";
import review1 from "../assets/review1.jpg";
import review2 from "../assets/review2.avif";
import review3 from "../assets/review3.jpg";
import FoldText from "../components/FoldText";
import EnquiryForm from "../components/EnquiryForm";
import "./style/style.css";

const coursesHeroImages = [student1, student2, student3, sailor1, sailor2, sailor3];
const courseImages = [course1, course2, course3, course4, course5, course6, course7, course8];

const courseCategoriesData = [
  {
    category: "AI & Emerging Technologies",
    items: [
      {
        name: "Generative AI and Prompt Engineering",
        desc: "Learn generative AI and prompt engineering to scale operational workflows.",
        badge: "New",
        duration: "8 Weeks",
        lessons: "24 Lessons",
        price: "₹3000",
        image: real4
      },
      {
        name: "AI Agent and Automation",
        desc: "Build autonomous AI agents and automate business pipelines.",
        badge: "Trending",
        duration: "10 Weeks",
        lessons: "30 Lessons",
        price: "₹6000",
        image: real1
      },
      {
        name: "AI and Automation Professional Program",
        desc: "Professional training in corporate AI strategies and workflow automation.",
        badge: "Most Popular",
        duration: "16 Weeks",
        lessons: "48 Lessons",
        price: "₹6000",
        image: real2
      },
      {
        name: "Generative AI and Agentic AI Track",
        desc: "Master cutting-edge transformer models and multi-agent systems.",
        badge: "Advanced",
        duration: "12 Weeks",
        lessons: "36 Lessons",
        price: "₹6000",
        image: real5
      },
      {
        name: "Prompt Engineering",
        desc: "Master structured prompts and context management for modern AI tools.",
        badge: "Popular",
        duration: "6 Weeks",
        lessons: "18 Lessons",
        price: "₹2500",
        image: real6
      },
      {
        name: "ChatGPT for Business",
        desc: "Leverage ChatGPT for enterprise efficiency and content production.",
        badge: "Trending",
        duration: "4 Weeks",
        lessons: "12 Lessons",
        price: "₹2500",
        image: real3
      }
    ]
  },
  {
    category: "Web & Software Development",
    items: [
      {
        name: "Full Stack Web Development",
        desc: "Build modern full-stack web applications from UI to scalable backend APIs.",
        badge: "Popular",
        duration: "24 Weeks",
        price: "₹6000",
        lessons: "72 Lessons"
      },
      {
        name: "MERN Stack",
        desc: "Master MongoDB, Express.js, React.js, and Node.js for modern web apps.",
        badge: "Popular",
        duration: "16 Weeks",
        price: "₹2500",
        lessons: "48 Lessons"
      },
      {
        name: "Python Training",
        desc: "Learn core Python programming, data structures, and Django framework.",
        badge: "Trending",
        duration: "12 Weeks",
        price: "₹2500",
        lessons: "36 Lessons"
      },
      {
        name: "Java Training",
        desc: "Learn Core, Advanced Java, Spring Boot, and enterprise microservices.",
        badge: "Advanced",
        duration: "14 Weeks",
        price: "₹2500",
        lessons: "42 Lessons"
      },
      {
        name: "Web Development Internship",
        desc: "Gain hands-on practical web development experience on live client projects.",
        badge: "Internship",
        duration: "12 Weeks",
        price: "₹4500",
        lessons: "36 Lessons"
      },
      { 
        name: "Full Stack Development Internship",
        desc: "Build real-world full-stack products with complete agency mentorship.",
        badge: "Internship",
        duration: "24 Weeks",
        price: "₹8000",
        lessons: "72 Lessons"
      }
    ]
  },
  {
    category: "Digital Marketing",
    items: [
      {
        name: "Digital Marketing and Performance Ads",
        desc: "Learn comprehensive digital marketing, conversion funnels, and paid ads.",
        badge: "Flagship",
        duration: "12 Weeks",
        lessons: "36 Lessons"
      },
      {
        name: "Digital Marketing",
        desc: "Master SEO, social media marketing, content distribution, and strategy.",
        badge: "Popular",
        duration: "10 Weeks",
        lessons: "30 Lessons"
      },
      {
        name: "Performance Marketing",
        desc: "Master Google Ads, Meta Ads, client acquisition, and conversion tracking.",
        badge: "Trending",
        duration: "8 Weeks",
        lessons: "24 Lessons"
      },
      {
        name: "SEO Specialist",
        desc: "Master technical SEO, organic search growth, and crawl index architecture.",
        badge: "Popular",
        duration: "8 Weeks",
        lessons: "24 Lessons"
      },
      {
        name: "Google Ads Specialist",
        desc: "Create and optimize high-converting Google Search, Shopping, and Display campaigns.",
        badge: "Advanced",
        duration: "6 Weeks",
        lessons: "18 Lessons"
      },
      {
        name: "Meta Ads and Social Media Marketing",
        desc: "Run profitable Instagram & Facebook ad campaigns with viral social strategy.",
        badge: "Trending",
        duration: "8 Weeks",
        lessons: "24 Lessons"
      },
      {
        name: "Digital Marketing Internship",
        desc: "Gain real-world experience managing live ad budgets and campaign analytics.",
        badge: "Internship",
        duration: "12 Weeks",
        lessons: "36 Lessons"
      }
    ]
  },
  {
    category: "Design & Creative",
    items: [
      {
        name: "Content Creation and Reels Marketing",
        desc: "Learn viral video scripting, reel production, and audience growth tactics.",
        badge: "Trending",
        duration: "6 Weeks",
        lessons: "18 Lessons"
      },
      {
        name: "Video & Reels Editing",
        desc: "Master Premiere Pro, After Effects, and AI-powered video editing tools.",
        badge: "Popular",
        duration: "8 Weeks",
        lessons: "24 Lessons"
      },
      {
        name: "UI/UX with Figma",
        desc: "Design intuitive user interfaces, design systems, and interactive prototypes.",
        badge: "Flagship",
        duration: "12 Weeks",
        lessons: "36 Lessons"
      },
      {
        name: "UI/UX Design Internship",
        desc: "Work on live agency UI/UX briefs, wireframing, and user testing.",
        badge: "Internship",
        duration: "12 Weeks",
        lessons: "36 Lessons"
      },
      {
        name: "Graphic Design Internship",
        desc: "Build professional branding, social media post graphics, and visual design assets.",
        badge: "Internship",
        duration: "12 Weeks",
        lessons: "36 Lessons"
      }
    ]
  },
  {
    category: "Data, Cloud & Cybersecurity",
    items: [
      {
        name: "Data Analytics Professional",
        desc: "Learn SQL, PowerBI, Excel data modeling, and business visualization.",
        badge: "Popular",
        duration: "14 Weeks",
        lessons: "42 Lessons"
      },
      {
        name: "Data Analytics Internship",
        desc: "Analyze real datasets and build dashboard reports for corporate decision making.",
        badge: "Internship",
        duration: "12 Weeks",
        lessons: "36 Lessons"
      },
      {
        name: "Data Science / Machine Learning Training",
        desc: "Master Python, predictive machine learning algorithms, and neural networks.",
        badge: "Popular",
        duration: "20 Weeks",
        lessons: "60 Lessons"
      },
      {
        name: "Cloud and DevOps",
        desc: "Learn AWS, Docker, Kubernetes, CI/CD pipelines, and cloud architecture.",
        badge: "New",
        duration: "16 Weeks",
        lessons: "48 Lessons"
      },
      {
        name: "Advanced Cybersecurity",
        desc: "Master ethical hacking, network defense, penetration testing, and threat analysis.",
        badge: "Advanced",
        duration: "16 Weeks",
        lessons: "48 Lessons"
      },
      {
        name: "Cybersecurity Internship",
        desc: "Gain hands-on security auditing and vulnerability assessment experience.",
        badge: "Internship",
        duration: "12 Weeks",
        lessons: "36 Lessons"
      },
      {
        name: "Python and AI Internship",
        desc: "Build intelligent backend software and machine learning applications.",
        badge: "Trending",
        duration: "12 Weeks",
        lessons: "36 Lessons"
      }
    ]
  },
  {
    category: "Fast-Track & Specialized Programs",
    items: [
      {
        name: "Mobile App Development",
        desc: "Build native and cross-platform mobile apps for iOS and Android.",
        badge: "Popular",
        duration: "16 Weeks",
        lessons: "48 Lessons"
      },
      {
        name: "Mobile App Development Internship",
        desc: "Develop live mobile application features under senior lead mentorship.",
        badge: "Internship",
        duration: "12 Weeks",
        lessons: "36 Lessons"
      },
      {
        name: "6-Month Industrial Training",
        desc: "Complete 6-month hands-on industrial training required for degree programs.",
        badge: "Flagship",
        duration: "24 Weeks",
        lessons: "72 Lessons"
      },
      {
        name: "6-Weeks Industrial Training",
        desc: "Fast-track 6-week intensive practical training for college submission.",
        badge: "Popular",
        duration: "6 Weeks",
        lessons: "18 Lessons"
      },
      {
        name: "Winter Industrial Training",
        desc: "Specialized winter industrial training with hands-on capstone project.",
        badge: "New",
        duration: "6 Weeks",
        lessons: "18 Lessons"
      },
      {
        name: "Summer Training",
        desc: "Comprehensive summer industrial training covering modern agency tech stacks.",
        badge: "Trending",
        duration: "6 Weeks",
        lessons: "18 Lessons"
      },
      {
        name: "Final Year Project Training",
        desc: "Complete project architecture guidance and implementation for final year students.",
        badge: "Popular",
        duration: "8 Weeks",
        lessons: "24 Lessons"
      }
    ]
  }
];

const Courses = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("AI & Emerging Technologies");

    // Background slideshow timer (same as About page)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % coursesHeroImages.length);
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
    }, [activeCategory]);

    // Current category object
    const currentCategoryObj = courseCategoriesData.find(c => c.category === activeCategory) || courseCategoriesData[0];

    return (
        <div className="courses-page">
            {/* 1. COURSES HERO SECTION */}
            <section className="about-hero-section">
                {/* Background Slideshow with continuous slow zoom & crossfade */}
                <div className="about-hero-bg-container">
                    {coursesHeroImages.map((img, index) => (
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
                        <h1 className="about-hero-main-title courses-hero-title">
                            <FoldText
                                text={"COUR"}
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
                                    text={"SES"}
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
                            Empower your future with direct, practical mentorship in Punjab's premium digital academy. Go beyond theoretical slides with real client projects, modern workspace methodologies, and solid career placement support.
                        </p>

                        <div className="courses-hero-cta-row">
                            <Link to="/enroll" className="about-hero-btn btn-effect">
                                <span>Download Brochure</span>
                                <FontAwesomeIcon icon={faArrowRight} className="about-btn-arrow" />
                            </Link>

                            <div className="courses-hero-badge-item">
                                <span className="courses-badge-title">94% Placement</span>
                                <span className="courses-badge-desc">Active hiring partner ecosystem</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="hero-form-wrapper">
                        <EnquiryForm />
                    </div>
                </div>
            </section>

            {/* 2. COURSES CATALOG SECTION WITH 6 CATEGORY FILTERS */}
            <section className="courses-catalog-section">
                <div className="courses-catalog-container">
                    {/* Filter Header & 6 Category Pills */}
                    <div className="catalog-filter-header scroll-reveal">
                        <span className="catalog-filter-label">BROWSE BY CATEGORY</span>
                        <div className="catalog-filter-pills">
                            {courseCategoriesData.map((catObj) => (
                                <button
                                    key={catObj.category}
                                    type="button"
                                    className={`catalog-filter-pill ${activeCategory === catObj.category ? "active" : ""}`}
                                    onClick={() => setActiveCategory(catObj.category)}
                                >
                                    {catObj.category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Course Cards Grid (4 Columns) */}
                    <div className="catalog-courses-grid">
                        {currentCategoryObj.items.map((course, idx) => (
                            <div key={course.name} className="catalog-course-card scroll-reveal">
                                {/* Image */}
                                <div className="catalog-card-img-wrap">
                                    <img
                                        src={course.image || courseImages[idx % courseImages.length]}
                                        alt={course.name}
                                        className="catalog-card-img"
                                    />
                                </div>

                                {/* Content */}
                                <div className="catalog-card-body">
                                    <div className="catalog-card-top-content">
                                        <h3 className="catalog-card-title">{course.name}</h3>
                                        <p className="catalog-card-desc">{course.desc}</p>
                                    </div>

                                    <div>
                                        {/* Duration, Price & Lessons */}
                                        <div className="catalog-card-meta-block">
                                            <div className="catalog-meta-top-row">
                                                <div className="catalog-info-item">
                                                    <FontAwesomeIcon icon={faClock} className="catalog-info-icon" />
                                                    <span>{course.duration}</span>
                                                </div>
                                                <span className="catalog-meta-dot">•</span>
                                                <div className="catalog-card-price-inline">
                                                    <span>Starting from {course.price || "₹3000"} Only</span>
                                                </div>
                                            </div>

                                            <div className="catalog-meta-bottom-row">
                                                <div className="catalog-info-item">
                                                    <FontAwesomeIcon icon={faBookOpen} className="catalog-info-icon" />
                                                    <span>{course.lessons}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Footer: Badge on Left, Enroll Button on Right */}
                                        <div className="catalog-card-footer">
                                            {course.badge ? (
                                                <span className="catalog-card-badge">{course.badge}</span>
                                            ) : (
                                                <span />
                                            )}
                                            <Link to="/course" className="catalog-enroll-btn btn-effect">
                                                Enroll Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. THE SAILORS METHOD SECTION */}
            <section className="courses-method-section">
                <div className="courses-method-container">
                    {/* Header */}
                    <div className="courses-method-header scroll-reveal">
                        <div className="courses-method-header-left">
                            <span className="courses-method-tag">THE SAILORS METHOD</span>
                            <h2 className="courses-method-title">
                                Built differently for real professional outcomes.
                            </h2>
                        </div>
                        <p className="courses-method-header-desc">
                            We reject standard slides-only courses. Our programs are engineered with direct accountability, physical workshop structures, and active job market synchronization.
                        </p>
                    </div>

                    {/* 4 Feature Cards Grid */}
                    <div className="courses-method-grid">
                        <div
                            className="courses-method-card scroll-reveal"
                            style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(0, 0, 0, 0.53) 100%), url(${course1})` }}
                        >
                            <div className="courses-method-icon-box">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <h3 className="courses-method-card-title">Expert Instructors</h3>
                            <p className="courses-method-card-desc">
                                Learn directly from active industry veterans with years of experience leading projects at top tech and creative firms.
                            </p>
                        </div>

                        <div
                            className="courses-method-card scroll-reveal"
                            style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(0, 0, 0, 0.53) 100%), url(${course2})` }}
                        >
                            <div className="courses-method-icon-box">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <h3 className="courses-method-card-title">Hands-on Projects</h3>
                            <p className="courses-method-card-desc">
                                Build a robust professional portfolio by working on real client briefs and end-to-end practical project cycles.
                            </p>
                        </div>

                        <div
                            className="courses-method-card scroll-reveal"
                            style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(0, 0, 0, 0.53) 100%), url(${course3})` }}
                        >
                            <div className="courses-method-icon-box">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <h3 className="courses-method-card-title">Industry Certificates</h3>
                            <p className="courses-method-card-desc">
                                Graduate with a verified e-certificate of completion from Sailors Academy, highly recognized by leading employers.
                            </p>
                        </div>

                        <div
                            className="courses-method-card scroll-reveal"
                            style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.49) 0%, rgba(0, 0, 0, 0.53) 100%), url(${course4})` }}
                        >
                            <div className="courses-method-icon-box">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                            <h3 className="courses-method-card-title">Flexible Schedule</h3>
                            <p className="courses-method-card-desc">
                                Balance your professional life with interactive weekend batches, weekday evening slots, and offline support forums.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. UPCOMING IN-CLASSROOM BATCHES SECTION */}
            <section className="courses-batches-section">
                <div className="courses-batches-container">
                    <div className="courses-batches-header scroll-reveal">
                        <span className="courses-batches-tag">CALENDAR</span>
                        <h2 className="courses-batches-title">Upcoming In-Classroom Batches</h2>
                    </div>

                    <div className="courses-batches-table-wrapper scroll-reveal">
                        <div className="courses-batches-table">
                            {/* Table Header */}
                            <div className="batches-table-row batches-table-head">
                                <div className="batch-col col-name">COURSE NAME</div>
                                <div className="batch-col col-date">START DATE</div>
                                <div className="batch-col col-duration">DURATION</div>
                                <div className="batch-col col-availability">AVAILABILITY</div>
                                <div className="batch-col col-action">ACTION</div>
                            </div>

                            {/* Row 1 */}
                            <div className="batches-table-row scroll-reveal">
                                <div className="batch-col col-name font-bold">UX/UI Design Fundamentals</div>
                                <div className="batch-col col-date">April 05, 2026</div>
                                <div className="batch-col col-duration">12 Weeks</div>
                                <div className="batch-col col-availability">
                                    <span className="spot-dot dot-red">●</span> 4 Spots Left
                                </div>
                                <div className="batch-col col-action">
                                    <Link to="/enroll" className="batch-apply-btn btn-effect">Apply</Link>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="batches-table-row scroll-reveal">
                                <div className="batch-col col-name font-bold">Full-Stack Web Development</div>
                                <div className="batch-col col-date">April 12, 2026</div>
                                <div className="batch-col col-duration">24 Weeks</div>
                                <div className="batch-col col-availability">
                                    <span className="spot-dot dot-red">●</span> 2 Spots Left
                                </div>
                                <div className="batch-col col-action">
                                    <Link to="/enroll" className="batch-apply-btn btn-effect">Apply</Link>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="batches-table-row scroll-reveal">
                                <div className="batch-col col-name font-bold">Digital Marketing Strategy</div>
                                <div className="batch-col col-date">April 18, 2026</div>
                                <div className="batch-col col-duration">8 Weeks</div>
                                <div className="batch-col col-availability">
                                    <span className="spot-dot dot-green">●</span> 8 Spots Left
                                </div>
                                <div className="batch-col col-action">
                                    <Link to="/enroll" className="batch-apply-btn btn-effect">Apply</Link>
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="batches-table-row scroll-reveal">
                                <div className="batch-col col-name font-bold">Business Analytics & Data</div>
                                <div className="batch-col col-date">April 25, 2026</div>
                                <div className="batch-col col-duration">10 Weeks</div>
                                <div className="batch-col col-availability">
                                    <span className="spot-dot dot-red">●</span> 5 Spots Left
                                </div>
                                <div className="batch-col col-action">
                                    <Link to="/enroll" className="batch-apply-btn btn-effect">Apply</Link>
                                </div>
                            </div>

                            {/* Row 5 */}
                            <div className="batches-table-row scroll-reveal">
                                <div className="batch-col col-name font-bold">Brand Identity Design</div>
                                <div className="batch-col col-date">May 02, 2026</div>
                                <div className="batch-col col-duration">8 Weeks</div>
                                <div className="batch-col col-availability">
                                    <span className="spot-dot dot-green">●</span> 6 Spots Left
                                </div>
                                <div className="batch-col col-action">
                                    <Link to="/enroll" className="batch-apply-btn btn-effect">Apply</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TESTIMONIALS SECTION */}
            <section className="courses-testimonials-section">
                <div className="courses-testimonials-container">
                    <div className="courses-testimonials-header scroll-reveal">
                        <span className="courses-testimonials-tag">STUDENT OUTCOMES</span>
                        <h2 className="courses-testimonials-title">Real feedback from real graduates</h2>
                    </div>

                    <div className="courses-testimonials-grid">
                        {/* Card 1 */}
                        <div className="testimonial-card scroll-reveal">
                            <div className="testimonial-stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="testimonial-quote">
                                "The hands-on curriculum at Sailors Academy changed my entire career path. Within two months of graduating from the UI/UX course, I landed my dream role as a Product Designer."
                            </p>
                            <div className="testimonial-author">
                                <img src={review1} alt="Review by Amanpreet Singh" className="testimonial-avatar" />
                                <div className="testimonial-author-info">
                                    <h4 className="author-name">Amanpreet Singh</h4>
                                    <span className="author-role">UI/UX Design Graduate</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="testimonial-card scroll-reveal">
                            <div className="testimonial-stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="testimonial-quote">
                                "I came from a non-tech background, but the mentors made web development incredibly approachable. The project-based approach gave me real confidence to write clean code."
                            </p>
                            <div className="testimonial-author">
                                <img src={review2} alt="Review by Priya Sharma" className="testimonial-avatar" />
                                <div className="testimonial-author-info">
                                    <h4 className="author-name">Priya Sharma</h4>
                                    <span className="author-role">Full-Stack Web Dev Graduate</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="testimonial-card scroll-reveal">
                            <div className="testimonial-stars">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p className="testimonial-quote">
                                "The Performance Marketing course is worth every rupee. Learning how to manage actual budgets, set up retargeting funnels, and optimize campaigns has 3x'd our family business sales."
                            </p>
                            <div className="testimonial-author">
                                <img src={review3} alt="Review by Rohan Malhotra" className="testimonial-avatar" />
                                <div className="testimonial-author-info">
                                    <h4 className="author-name">Rohan Malhotra</h4>
                                    <span className="author-role">Digital Marketing Graduate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;