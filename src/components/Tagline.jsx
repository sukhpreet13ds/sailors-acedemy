import React from "react";
import { Link } from "react-router-dom";
import "./style/style.css";

const Tagline = () => {
  return (
    <div className="tagline-container">
      <div className="tagline-content">
        <span className="tagline-text">
          Generate e-Certificate of Successfully Completion – Industry Visit at Sailors Academy
        </span>
        <Link to="/certificate" className="tagline-btn btn-effect">
          Get Your Certificate
        </Link>
      </div>
    </div>
  );
};

export default Tagline;