import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Scorecard</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Our products</a>
          </li>
          <li className="nav-item">
            <a href="#demo">Demo</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2022 Execute, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;