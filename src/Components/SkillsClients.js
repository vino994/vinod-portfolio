import React from "react";
import "../Styles/Skills.css";
import {
  FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt,
  FaBootstrap, FaGitAlt, FaGithub
} from "react-icons/fa";
import { SiRedux, SiMongodb, SiExpress, SiFigma, SiCanva } from "react-icons/si";

const TOP_SKILLS = [
  { name: "React.js", level: "Advanced", years: "5+ yrs", icon: <FaReact className="skill-big react" /> },
  { name: "JavaScript (ES6+)", level: "Advanced", years: "5+ yrs", icon: <FaJs className="skill-big js" /> },
  { name: "Node.js", level: "Intermediate", years: "3+ yrs", icon: <FaNodeJs className="skill-big node" /> },
];

const OTHER_SKILLS = [
  { name: "Redux", icon: <SiRedux /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Canva", icon: <SiCanva /> },
];

export default function SkillsClients() {
  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="section-title underline-wipe">
            CORE <span className="highlight">COMPETENCIES</span>
          </h2>
          <p className="section-subtitle">
            My strongest technical areas, validated through years of hands-on work
          </p>
        </div>

        {/* Top Skills */}
        <div className="row g-4 justify-content-center mb-5">
          {TOP_SKILLS.map((skill, idx) => (
            <div className="col-12 col-md-4" key={idx}>
              <div className="top-skill-card shadow-lg h-100">
                {skill.icon}
                <h4>{skill.name}</h4>
                <p className="skill-meta">
                  {skill.level} • {skill.years}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="other-skills">
          <h5 className="mb-3 text-accent">Other Tools & Technologies</h5>
          <div className="skill-badges">
            {OTHER_SKILLS.map((s, i) => (
              <div className="badge-skill" key={i}>
                {s.icon} <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
