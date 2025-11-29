import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import textBg from "../Assets/profile1.jpeg";
import Profile from "../Assets/profile2.png";

function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <div className="home-container d-flex position-relative">
      {/* Top-right actions (theme toggle + resume) */}
      <div className="top-actions">
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* Resume Download */}
        <a
          href={`${process.env.PUBLIC_URL}/vinod_fresher.pdf`}
          download="vinod_fresher.pdf"
          className="btn btn-danger"
          aria-label="Download Resume"
        >
          <span className="resume-text">📄 Resume</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="resume-icon"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M12 16a1 1 0 0 1-.7-.3l-5-5a1 1 0 0 1 1.4-1.4L11 12.6V3a1 1 0 0 1 2 0v9.6l3.3-3.3a1 1 0 0 1 1.4 1.4l-5 5a1 1 0 0 1-.7.3z"/>
            <path d="M5 20a2 2 0 0 1-2-2v-3a1 1 0 1 1 2 0v3h14v-3a1 1 0 1 1 2 0v3a2 2 0 0 1-2 2H5z"/>
          </svg>
          <span className="resume-tooltip">Download Resume</span>
        </a>
      </div>

      <div className="left-section d-flex justify-content-center align-items-center">
        <img src={Profile} alt="profile" className="profile-img" />
      </div>

      <div className="right-section d-flex justify-content-center align-items-center">
        <div>
          <h1
            className="fw-bold text-clip text-center"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.42), rgba(255,255,255,.42)), url(${textBg})`,
            }}
          >
            I'm <br />
            Vinoth <br />
            Sanjeevi
          </h1>
        </div>
      </div>

      {/* Corner Navigation */}
      <ScrollLink to="about" smooth duration={600} spy activeClass="active-corner" className="corner-text top-center">ABOUT</ScrollLink>
      <ScrollLink to="skills" smooth duration={600} spy activeClass="active-corner" className="corner-text right-center">STRENGTH</ScrollLink>
      <ScrollLink to="portfolio" smooth duration={600} spy activeClass="active-corner" className="corner-text left-center">PORTFOLIO</ScrollLink>
      <ScrollLink to="contact" smooth duration={600} spy activeClass="active-corner" className="corner-text bottom-center">CONTACT</ScrollLink>
    </div>
  );
}

export default Home;
