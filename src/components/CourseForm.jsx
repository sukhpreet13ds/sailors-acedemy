import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CourseForm = ({ courseTitle = "Generative AI & Prompt Engineering" }) => {
  return (
    <div className="course-form-card scroll-reveal">
      <h3 className="course-form-card-title">Schedule Your Free Demo Class</h3>

      <form onSubmit={(e) => e.preventDefault()} className="course-demo-form">
        <div className="course-form-grid-2">
          <div className="course-input-group">
            <label>FULL NAME</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="course-input-group">
            <label>PHONE NUMBER</label>
            <input type="tel" placeholder="+91 86993-XXXXX" required />
          </div>
        </div>

        <div className="course-input-group">
          <label>EMAIL ADDRESS</label>
          <input type="email" placeholder="name@example.com" required />
        </div>

        <div className="course-input-group">
          <label>COURSE OF INTEREST</label>
          <input type="text" value={courseTitle} disabled />
        </div>

        <div className="course-form-grid-2">
          <div className="course-input-group">
            <label>PREFERRED DATE</label>
            <select defaultValue="Select Preferred Date">
              <option disabled>Select Preferred Date</option>
              <option value="Today">Today / Tomorrow</option>
              <option value="This Weekend">This Weekend</option>
              <option value="Next Week">Next Week</option>
            </select>
          </div>
          <div className="course-input-group">
            <label>PREFERRED TIME SLOT</label>
            <select defaultValue="09:00 AM - 11:00 AM">
              <option value="09:00 AM - 11:00 AM">09:00 AM - 11:00 AM</option>
              <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
              <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
              <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
            </select>
          </div>
        </div>

        <button type="submit" className="course-form-submit-btn btn-effect">
          <span>Confirm and Book Now</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
