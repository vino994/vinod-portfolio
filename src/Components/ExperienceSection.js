import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ExperienceSection.css";
import { FaLaptopCode, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EXPERIENCE = [
  {
    year: "2023 – 2025",
    title: "MERN Stack Developer (Freelancer / Self Projects)",
    company: "Independent Developer",
    place: "Coimbatore, Tamil Nadu",
    icon: <FaReact className="exp-icon" />,
    desc: [
      "Built responsive web apps using React.js, Node.js, Express.js, and MongoDB.",
      "Developed real-time chat app, ecommerce mini app, and portfolio website.",
      "Integrated REST APIs, implemented authentication using JWT, and optimized UI rendering.",
    ],
  },
  {
    year: "2022 – 2023",
    title: "Frontend Developer (Freelancer)",
    company: "Local Clients / Remote",
    place: "Tamil Nadu, India",
    icon: <FaLaptopCode className="exp-icon" />,
    desc: [
      "Delivered landing pages and small business websites using React, HTML, CSS, and JavaScript.",
      "Implemented responsive UI, performance improvements, and bug fixes.",
      "Handled end-to-end project delivery including deployment on Netlify.",
    ],
  },
  {
    year: "2021 – 2022",
    title: "Learning Phase — HTML, CSS, JavaScript, React",
    company: "Self Learning / Online Courses",
    place: "Coimbatore, Tamil Nadu",
    icon: <FaHtml5 className="exp-icon" />,
    desc: [
      "Completed structured training on HTML5, CSS3, JavaScript (ES6), and React fundamentals.",
      "Built small UI components and practiced modern design patterns.",
      "Strengthened understanding of component-based architecture.",
    ],
  },
  {
    year: "2019 – 2021",
    title: "Self-Preparation & Web Development Exploration",
    company: "Independent",
    place: "Tamil Nadu, India",
    icon: <FaCss3Alt className="exp-icon" />,
    desc: [
      "Explored web development basics through online tutorials and mini projects.",
      "Experimented with UI layouts, CSS animations, and responsive design.",
      "Developed interest in moving into full-stack development.",
    ],
  },
  {
    year: "2017 – 2019",
    title: "Freelance HTML / CSS Helper Projects",
    company: "Local Small Businesses",
    place: "Coimbatore, Tamil Nadu",
    icon: <FaLaptopCode className="exp-icon" />,
    desc: [
      "Created simple static pages for small clients using HTML and CSS.",
      "Learned basics of client requirements, UI flow, and deployment.",
      "Built foundation for long-term interest in front-end development.",
    ],
  },
];



export default function ExperienceSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="experience-section py-5">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="section-title underline-wipe">
            EXPERIENCE <span className="highlight">HISTORY</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="timeline position-relative">
          {EXPERIENCE.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content shadow-lg">
                <div className="d-flex align-items-center mb-2">
                  {item.icon}
                  <h4 className="fw-bold ms-2 mb-0">{item.title}</h4>
                </div>
                <h6 className="company">{item.company}</h6>
                <div className="small place mb-2">{item.place}</div>
                <ul>
                  {item.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
