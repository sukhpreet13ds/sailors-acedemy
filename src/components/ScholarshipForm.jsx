import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ScholarshipForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
    reason: "",
    attachment: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        attachment: e.target.files[0]
      });
    }
  };

  const validateStep1 = () => {
    if (!formData.fullName.trim()) {
      toast.error("Full Name is required.");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email Address is required.");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Phone Number is required.");
      return false;
    }
    return true;
  };

  const handleTabClick = (targetStep) => {
    if (targetStep === 2) {
      if (!validateStep1()) {
        return;
      }
      setStep(2);
    } else {
      setStep(1);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.course) {
      toast.error("Please select a course.");
      return;
    }
    toast.success("Scholarship Application submitted successfully!");
    console.log("Scholarship Form Submitted:", formData);
  };

  return (
    <div className="hero-form-card">
      <Toaster position="top-center" reverseOrder={false} containerStyle={{ zIndex: 999999 }} />

      <h2 className="form-title">Check Eligibility</h2>
      <p className="form-subtitle">
        Schedule a free diagnostic evaluation and advisory session.
      </p>

      {/* Step Tabs Indicator */}
      <div className="form-step-tabs">
        <button
          type="button"
          className={`step-tab ${step === 1 ? "active" : "completed"}`}
          onClick={() => handleTabClick(1)}
        >
          <span className="step-num">1</span>
          <span className="step-text">Personal Info</span>
        </button>

        <button
          type="button"
          className={`step-tab ${step === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <span className="step-num">2</span>
          <span className="step-text">Application Info</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="admission-form">
        {/* STEP 1: PERSONAL DETAILS (1 ROW PER FIELD) */}
        {step === 1 && (
          <>
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName">Full Name<span style={{color: "#ff1111"}}>*</span></label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Address */}
            <div className="form-group">
              <label htmlFor="email">Email Address<span style={{color: "#ff1111"}}>*</span></label>
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

            {/* Phone Number */}
            <div className="form-group">
              <label htmlFor="phone">Phone Number<span style={{color: "#ff1111"}}>*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="form-submit-btn btn-effect"
            >
              Next &gt;
            </button>
          </>
        )}

        {/* STEP 2: APPLICATION DETAILS */}
        {step === 2 && (
          <>
            {/* Select Course */}
            <div className="form-group">
              <label htmlFor="course">Select Course<span style={{color: "#ff1111"}}>*</span></label>
              <div className="select-wrapper">
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a course</option>

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

            {/* Highest Qualification */}
            <div className="form-group">
              <label htmlFor="qualification">Highest Qualification<span style={{color: "#ff1111"}}>*</span></label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                placeholder="e.g. Graduation, 12th, B.Tech, BCA"
                value={formData.qualification}
                onChange={handleChange}
              />
            </div>

            {/* Why do you want this scholarship? */}
            <div className="form-group">
              <label htmlFor="reason">Why do you want this scholarship?</label>
              <textarea
                id="reason"
                name="reason"
                placeholder="Explain briefly why you are applying"
                value={formData.reason}
                onChange={handleChange}
                rows={3}
                className="scholarship-textarea"
              />
            </div>

            {/* Attachment Upload */}
            <div className="form-group">
              <label htmlFor="attachment">Attachment / Supporting Documents<span style={{color: "#ff1111"}}>*</span></label>
              <p className="form-help-text">
                Attach academic mark sheets, parent income proofs, or portfolio samples for quick evaluation.
              </p>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="file-upload-input"
              />
            </div>

            {/* Step 2 Action Buttons: Back + Submit */}
            <div className="form-step-actions">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="form-back-btn"
              >
                &laquo; Back
              </button>

              <button
                type="submit"
                className="form-submit-btn btn-effect"
                style={{ flex: 1 }}
              >
                Apply for Scholarship
              </button>
            </div>
          </>
        )}

        <div className="form-footer-note">
          Privacy Guaranteed. Your data is protected by high-grade encryption.
        </div>
      </form>
    </div>
  );
};

export default ScholarshipForm;
