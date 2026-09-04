import React, { useState } from "react";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    fieldOfInterest: "Cyber Security & Enterprise Networks"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="hero-form-card">
      <h2 className="form-title">Request Admission Info</h2>
      <p className="form-subtitle">
        Schedule a free diagnostic evaluation and advisory session.
      </p>

      <form onSubmit={handleSubmit} className="admission-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your first and last name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="name@domain.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
     
        <div className="form-group">
          <label htmlFor="fieldOfInterest">Select Field of Interest</label>
          <div className="select-wrapper">
            <select
              id="fieldOfInterest"
              name="fieldOfInterest"
              value={formData.fieldOfInterest}
              onChange={handleChange}
            >
              <option value="">Select a field of interest</option>

              {/* AI & Emerging Technologies */}
              <optgroup label="AI & Emerging Technologies">
                <option value="Generative AI and Prompt Engineering">
                  Generative AI and Prompt Engineering
                </option>
                <option value="AI Agent and Automation">
                  AI Agent and Automation
                </option>
                <option value="AI and Automation Professional Program">
                  AI and Automation Professional Program
                </option>
                <option value="Generative AI and Agentic AI Track">
                  Generative AI and Agentic AI Track
                </option>
                <option value="Prompt Engineering">
                  Prompt Engineering
                </option>
                <option value="ChatGPT for Business">
                  ChatGPT for Business
                </option>
              </optgroup>

              {/* Web & Software Development */}
              <optgroup label="Web & Software Development">
                <option value="Full Stack Web Development">
                  Full Stack Web Development
                </option>
                <option value="MERN Stack">
                  MERN Stack
                </option>
                <option value="Python Training">
                  Python Training
                </option>
                <option value="Java Training">
                  Java Training
                </option>
                <option value="Web Development Internship">
                  Web Development Internship
                </option>
                <option value="Full Stack Development Internship">
                  Full Stack Development Internship
                </option>
              </optgroup>

              {/* Digital Marketing */}
              <optgroup label="Digital Marketing">
                <option value="Digital Marketing and Performance Ads">
                  Digital Marketing and Performance Ads
                </option>
                <option value="Digital Marketing">
                  Digital Marketing
                </option>
                <option value="Performance Marketing">
                  Performance Marketing
                </option>
                <option value="SEO Specialist">
                  SEO Specialist
                </option>
                <option value="Google Ads Specialist">
                  Google Ads Specialist
                </option>
                <option value="Meta Ads and Social Media Marketing">
                  Meta Ads and Social Media Marketing
                </option>
                <option value="Digital Marketing Internship">
                  Digital Marketing Internship
                </option>
              </optgroup>

              {/* Design & Creative */}
              <optgroup label="Design & Creative">
                <option value="Content Creation and Reels Marketing">
                  Content Creation and Reels Marketing
                </option>
                <option value="Video & Reels Editing">
                  Video & Reels Editing
                </option>
                <option value="UI/UX with Figma">
                  UI/UX with Figma
                </option>
                <option value="UI/UX Design Internship">
                  UI/UX Design Internship
                </option>
                <option value="Graphic Design Internship">
                  Graphic Design Internship
                </option>
              </optgroup>

              {/* Data, Cloud & Cybersecurity */}
              <optgroup label="Data, Cloud & Cybersecurity">
                <option value="Data Analytics Professional">
                  Data Analytics Professional
                </option>
                <option value="Data Analytics Internship">
                  Data Analytics Internship
                </option>
                <option value="Data Science / Machine Learning Training">
                  Data Science / Machine Learning Training
                </option>
                <option value="Cloud and DevOps">
                  Cloud and DevOps
                </option>
                <option value="Advanced Cybersecurity">
                  Advanced Cybersecurity
                </option>
                <option value="Cybersecurity Internship">
                  Cybersecurity Internship
                </option>
                <option value="Python and AI Internship">
                  Python and AI Internship
                </option>
              </optgroup>

              {/* Fast-Track & Specialized Programs */}
              <optgroup label="Fast-Track & Specialized Programs">
                <option value="Mobile App Development">
                  Mobile App Development
                </option>
                <option value="Mobile App Development Internship">
                  Mobile App Development Internship
                </option>
                <option value="6-Month Industrial Training">
                  6-Month Industrial Training
                </option>
                <option value="6-Weeks Industrial Training">
                  6-Weeks Industrial Training
                </option>
                <option value="Winter Industrial Training">
                  Winter Industrial Training
                </option>
                <option value="Summer Training">
                  Summer Training
                </option>
                <option value="Final Year Project Training">
                  Final Year Project Training
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        <button type="submit" className="form-submit-btn btn-effect">
          Submit Enrollment Form
        </button>

        <div className="form-footer-note">
          Privacy Guaranteed. Your data is protected by high-grade encryption.
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;
