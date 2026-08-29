import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faXmark,
  faArrowRight,
  faGraduationCap,
  faBookOpen,
  faCertificate,
  faHouse,
  faCircleInfo,
  faUserGraduate,
  faPeopleGroup,
  faRobot,
  faCode,
  faBullhorn,
  faChartLine,
  faPenRuler
} from "@fortawesome/free-solid-svg-icons";
import logoImg from "../assets/sailors-logo.png";
import logoColorImg from "../assets/sailor-color-logo.png";
import menuImg from "../assets/menu.png";
import slide2Img from "../assets/slide2.JPG";
import slide3Img from "../assets/slide3.JPG";
import "./style/style.css";

const bannerSlides = [
  {
    image: menuImg,
    tag: "Excellence in Maritime Training",
    subtext: "Empowering the next generation of seafarers"
  },
  {
    image: slide2Img,
    tag: "Industry-Ready Tech & AI",
    subtext: "Hands-on project experience with modern technologies"
  },
  {
    image: slide3Img,
    tag: "Career & Placement Focused",
    subtext: "Upskill with high-demand professional certifications"
  }
];

const courseCategories = [
  {
    category: "AI & Emerging Technologies",
    icon: faRobot,
    items: [
      {
        name: "Generative AI and Prompt Engineering",
        desc: "Learn generative AI and prompt engineering",
        badge: "New"
      },
      {
        name: "AI Agent and Automation",
        desc: "Build AI agents and automate workflows",
        badge: "Trending"
      },
      {
        name: "AI and Automation Professional Program",
        desc: "Professional AI and automation training",
        badge: ""
      },
      {
        name: "Generative AI and Agentic AI Track",
        desc: "Learn generative and agentic AI",
        badge: "Advanced"
      },
      {
        name: "Prompt Engineering",
        desc: "Master prompts for modern AI tools",
        badge: ""
      },
      {
        name: "ChatGPT for Business",
        desc: "Use ChatGPT for business and productivity",
        badge: ""
      }
    ]
  },

  {
    category: "Web & Software Development",
    icon: faCode,
    items: [
      {
        name: "Full Stack Web Development",
        desc: "Build modern full-stack web applications",
        badge: "Popular"
      },
      {
        name: "MERN Stack",
        desc: "Learn MongoDB, Express, React and Node",
        badge: "Popular"
      },
      {
        name: "Python Training",
        desc: "Learn Python, Django and development",
        badge: ""
      },
      {
        name: "Java Training",
        desc: "Learn Core, Advanced Java and Spring",
        badge: ""
      },
      {
        name: "Web Development Internship",
        desc: "Gain practical web development experience",
        badge: "Internship"
      },
      {
        name: "Full Stack Development Internship",
        desc: "Build projects with frontend and backend",
        badge: ""
      }
    ]
  },

  {
    category: "Digital Marketing",
    icon: faBullhorn,
    items: [
      {
        name: "Digital Marketing and Performance Ads",
        desc: "Learn digital marketing and paid advertising",
        badge: "Flagship"
      },
      {
        name: "Digital Marketing",
        desc: "Learn SEO, social media and digital strategy",
        badge: "Popular"
      },
      {
        name: "Performance Marketing",
        desc: "Master Google Ads, Meta Ads and PPC",
        badge: ""
      },
      {
        name: "SEO Specialist",
        desc: "Master SEO and organic search growth",
        badge: ""
      },
      {
        name: "Google Ads Specialist",
        desc: "Learn and optimize Google Ads campaigns",
        badge: ""
      },
      {
        name: "Meta Ads and Social Media Marketing",
        desc: "Master Meta ads and social media marketing",
        badge: ""
      },
      {
        name: "Digital Marketing Internship",
        desc: "Gain hands-on digital marketing experience",
        badge: "Internship"
      }
    ]
  },

  {
    category: "Design & Creative",
    icon: faPenRuler,
    items: [
      {
        name: "Content Creation and Reels Marketing",
        desc: "Learn content creation and reels marketing",
        badge: ""
      },
      {
        name: "Video & Reels Editing",
        desc: "Learn video editing for digital platforms",
        badge: ""
      },
      {
        name: "UI/UX with Figma",
        desc: "Design modern interfaces with Figma",
        badge: ""
      },
      {
        name: "UI/UX Design Internship",
        desc: "Gain practical UI/UX design experience",
        badge: "Internship"
      },
      {
        name: "Graphic Design Internship",
        desc: "Build practical graphic design skills",
        badge: "Internship"
      }
    ]
  },

  {
    category: "Data, Cloud & Cybersecurity",
    icon: faChartLine,
    items: [
      {
        name: "Data Analytics Professional",
        desc: "Learn data analysis and visualization",
        badge: ""
      },
      {
        name: "Data Analytics Internship",
        desc: "Gain practical data analytics experience",
        badge: ""
      },
      {
        name: "Data Science / Machine Learning Training",
        desc: "Learn Python, ML and data science",
        badge: "Popular"
      },
      {
        name: "Cloud and DevOps",
        desc: "Learn cloud, deployment and DevOps",
        badge: "New"
      },
      {
        name: "Advanced Cybersecurity",
        desc: "Master advanced cybersecurity concepts",
        badge: ""
      },
      {
        name: "Cybersecurity Internship",
        desc: "Gain hands-on cybersecurity experience",
        badge: "Internship"
      },
      {
        name: "Python and AI Internship",
        desc: "Build projects with Python and AI",
        badge: ""
      }
    ]
  },

  {
    category: "Fast-Track & Specialized Programs",
    icon: faGraduationCap,
    items: [
      {
        name: "Mobile App Development",
        desc: "Learn practical mobile app development",
        badge: ""
      },
      {
        name: "Mobile App Development Internship",
        desc: "Build practical mobile applications",
        badge: ""
      },
      {
        name: "6-Month Industrial Training",
        desc: "Industry-focused training with projects",
        badge: "Popular"
      },
      {
        name: "6-Weeks Industrial Training",
        desc: "Short-term practical training with certification",
        badge: ""
      },
      {
        name: "Winter Industrial Training",
        desc: "Winter training with practical projects",
        badge: "Seasonal"
      },
      {
        name: "Summer Training",
        desc: "Practical technology training for students",
        badge: ""
      },
      {
        name: "Final Year Project Training",
        desc: "Project guidance for final-year students",
        badge: ""
      }
    ]
  }
];

const Navbar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const megaMenuRef = useRef(null);
  const coursesButtonRef = useRef(null);
  const location = useLocation();

  // Auto slide banner when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [mobileMenuOpen]);

  // Click outside listener to close desktop mega menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target) &&
        coursesButtonRef.current &&
        !coursesButtonRef.current.contains(event.target)
      ) {
        setMegaMenuOpen(false);
      }
    };

    if (megaMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [megaMenuOpen]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeAllMenus = () => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileCoursesOpen(false);
  };

  const toggleMegaMenu = (e) => {
    e.stopPropagation();
    setMegaMenuOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleMobileCourses = () => {
    setMobileCoursesOpen((prev) => !prev);
  };

  const toggleMobileSubCategory = (idx) => {
    setActiveMobileCategory(activeMobileCategory === idx ? null : idx);
  };

  return (
    <header className="main-header">
      <nav className="navbar-container">
        {/* Brand Logo Left */}
        <div className="navbar-brand">
          <Link to="/" className="brand-link" onClick={closeAllMenus}>
            <img src={logoImg} alt="Sailors Academy Logo" className="brand-logo-img" />
          </Link>
        </div>

        {/* Desktop Navigation Center */}
        <ul className="navbar-menu">
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              onClick={closeAllMenus}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              onClick={closeAllMenus}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav-item has-mega">
            <button
              ref={coursesButtonRef}
              className={`nav-link mega-trigger ${megaMenuOpen ? "active" : ""}`}
              onClick={toggleMegaMenu}
              type="button"
              aria-expanded={megaMenuOpen}
            >
              <span>COURSES</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`mega-chevron ${megaMenuOpen ? "rotate" : ""}`}
              />
            </button>
          </li>
          <li className="nav-item">
            <Link
              to="/admission"
              className={`nav-link ${location.pathname === "/admission" ? "active" : ""}`}
              onClick={closeAllMenus}
            >
              ADMISSION
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/student-life"
              className={`nav-link ${location.pathname === "/student-life" ? "active" : ""}`}
              onClick={closeAllMenus}
            >
              STUDENT LIFE
            </Link>
          </li>
        </ul>

        {/* Right CTA / Mobile Toggle */}
        <div className="navbar-actions">
          <Link to="/enroll" className="enroll-btn desktop-enroll-btn" onClick={closeAllMenus}>
            ENROLL AND START NOW
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-hamburger-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} />
          </button>
        </div>
      </nav>

      {/* Desktop Mega Menu Dropdown */}
      {megaMenuOpen && (
        <div className="desktop-mega-panel-wrapper" ref={megaMenuRef}>
          <div className="desktop-mega-panel">
            <div className="mega-panel-inner">
              {courseCategories.map((col, idx) => (
                <div key={idx} className="mega-column">
                  <div className="mega-column-header">
                    <span className="mega-column-title">{col.category}</span>
                  </div>
                  <div className="mega-items-list">
                    {col.items.map((item, iIdx) => (
                      <Link
                        to="/courses"
                        key={iIdx}
                        className="mega-item-link"
                        onClick={closeAllMenus}
                      >
                        <div className="mega-item-name-row">
                          <span className="mega-item-name">{item.name}</span>
                          {item.badge && (
                            <span className={`mega-badge ${item.badge.toLowerCase().replace(/\s+/g, "-")}`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="mega-item-desc">{item.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Footer strip in Mega Menu */}
            <div className="mega-panel-footer">
              <div className="mega-footer-text">
                {/* <FontAwesomeIcon icon={faAward} className="mega-footer-icon" />
                <span>DG Shipping Approved & ISO 9001:2015 Certified Maritime Academy</span> */}
              </div>
              <Link
                to="/courses"
                className="mega-footer-explore"
                onClick={closeAllMenus}
              >
                <span>View All 30+ Certified Programs</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Backdrop & Top Dropdown Slide Menu */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      />

      <aside className={`mobile-menu-drawer ${mobileMenuOpen ? "open" : ""}`}>
        {/* Top bar inside mobile drawer with Logo Left and Logo Right */}
        <div className="mobile-drawer-header">
          <div className="mobile-header-logo-left">
            <img src={logoColorImg} alt="Sailors Academy Left" className="mobile-logo-img" />
          </div>
          <button
            className="mobile-close-btn"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Sliding Image Banner above menu items */}
        <div className="mobile-drawer-banner-wrap">
          <div className="mobile-drawer-banner">
            <div
              className="mobile-slider-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {bannerSlides.map((slide, idx) => (
                <div key={idx} className="mobile-slide-item">
                  <img
                    src={slide.image}
                    alt={`Sailors Academy Slide ${idx + 1}`}
                    className="mobile-banner-img"
                  />
                  <div className="mobile-banner-overlay">
                    <span className="banner-tag">{slide.tag}</span>
                    <p className="banner-subtext">{slide.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Dots Indicator */}
            <div className="mobile-slider-dots">
              {bannerSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`mobile-slider-dot ${currentSlide === idx ? "active" : ""}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Navigation List (Brainwave-inspired sleek design) */}
        <div className="mobile-drawer-nav-scroll">
          <div className="mobile-nav-list">
            {/* Home */}
            <Link
              to="/"
              className={`mobile-nav-item ${location.pathname === "/" ? "active" : ""}`}
              onClick={closeAllMenus}
            >
              <div className="mobile-item-left">
                <div className="mobile-icon-box">
                  <FontAwesomeIcon icon={faHouse} />
                </div>
                <span className="mobile-item-label">Home</span>
              </div>
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`mobile-nav-item ${location.pathname === "/about" ? "active" : ""}`}
              onClick={closeAllMenus}
            >
              <div className="mobile-item-left">
                <div className="mobile-icon-box">
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div>
                <span className="mobile-item-label">About Us</span>
              </div>
            </Link>

            {/* Courses with Mega Accordion Options */}
            <div className="mobile-mega-container">
              <button
                type="button"
                className={`mobile-nav-item mobile-mega-toggle ${mobileCoursesOpen ? "expanded" : ""}`}
                onClick={toggleMobileCourses}
              >
                <div className="mobile-item-left">
                  <div className="mobile-icon-box courses-box">
                    <FontAwesomeIcon icon={faBookOpen} />
                  </div>
                  <span className="mobile-item-label">Courses & Programs</span>
                </div>
                <div className="mobile-badge-chevron">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`mobile-accordion-chevron ${mobileCoursesOpen ? "rotate" : ""}`}
                  />
                </div>
              </button>

              {/* Expandable Categories in Mobile */}
              {mobileCoursesOpen && (
                <div className="mobile-mega-sublist">
                  {courseCategories.map((cat, cIdx) => (
                    <div key={cIdx} className="mobile-category-group">
                      <button
                        type="button"
                        className="mobile-subcat-title-btn"
                        onClick={() => toggleMobileSubCategory(cIdx)}
                      >
                        <div className="mobile-subcat-left">
                          <span>{cat.category}</span>
                        </div>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`mobile-sub-chevron ${activeMobileCategory === cIdx ? "rotate" : ""}`}
                        />
                      </button>

                      {activeMobileCategory === cIdx && (
                        <div className="mobile-subcat-items">
                          {cat.items.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              to="/courses"
                              className="mobile-subitem-link"
                              onClick={closeAllMenus}
                            >
                              <div className="mobile-subitem-info">
                                <span className="mobile-subitem-name">{sub.name}</span>
                                <span className="mobile-subitem-desc">{sub.desc}</span>
                              </div>
                              {sub.badge && (
                                <span className="mobile-subitem-badge">{sub.badge}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <Link
                    to="/courses"
                    className="mobile-all-courses-link"
                    onClick={closeAllMenus}
                  >
                    <span>View Full Course Directory</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              )}
            </div>

            {/* Admission */}
            <Link
              to="/admission"
              className={`mobile-nav-item ${location.pathname === "/admission" ? "active" : ""}`}
              onClick={closeAllMenus}
            >
              <div className="mobile-item-left">
                <div className="mobile-icon-box">
                  <FontAwesomeIcon icon={faUserGraduate} />
                </div>
                <span className="mobile-item-label">Admission & Eligibility</span>
              </div>
            </Link>

            {/* Student Life */}
            <Link
              to="/student-life"
              className={`mobile-nav-item ${location.pathname === "/student-life" ? "active" : ""}`}
              onClick={closeAllMenus}
            >
              <div className="mobile-item-left">
                <div className="mobile-icon-box">
                  <FontAwesomeIcon icon={faPeopleGroup} />
                </div>
                <span className="mobile-item-label">Student Life</span>
              </div>
            </Link>

            {/* Certificate */}
            <Link
              to="/certificate"
              className={`mobile-nav-item ${location.pathname === "/certificate" ? "active" : ""}`}
              onClick={closeAllMenus}
            >
              <div className="mobile-item-left">
                <div className="mobile-icon-box">
                  <FontAwesomeIcon icon={faCertificate} />
                </div>
                <span className="mobile-item-label">Verify / e-Certificate</span>
              </div>
              <span className="mobile-badge-pill">Free</span>
            </Link>
          </div>

          {/* Drawer Footer CTA */}
          <div className="mobile-drawer-cta">
            <Link to="/enroll" className="mobile-enroll-btn" onClick={closeAllMenus}>
              <span>ENROLL AND START NOW</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            <div className="mobile-drawer-contact-info">
              <span>Helpline: +91 (0) 1234 567890</span>
              <span>DG Shipping Approved Institute</span>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;