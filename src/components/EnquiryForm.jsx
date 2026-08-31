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
              <option value="Cyber Security & Enterprise Networks">
                Cyber Security & Enterprise Networks
              </option>
              <option value="Digital Marketing & Growth">
                Digital Marketing & Growth
              </option>
              <option value="Systems Engineering & Cloud">
                Systems Engineering & Cloud
              </option>
              <option value="Creative Leadership & UI/UX">
                Creative Leadership & UI/UX
              </option>
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
