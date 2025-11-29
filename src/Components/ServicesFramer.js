import React, { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import "../Styles/ServicesFramer.css";
import webdevVideo from "../Assets/web-development.mp4"; // <-- your video

/* Tool icons simplified */
function ToolIcon({ name, size = 16 }) {
  return (
    <span style={{ fontSize: size, lineHeight: 1 }}>
      {name === "React" && "⚛️"}
      {name === "Redux" && "🌀"}
      {name === "Node.js" && "🟢"}
      {name === "Figma" && "🎨"}
      {name === "Photoshop" && "🖌️"}
    </span>
  );
}

const SERVICES = [
  {
    title: "UI/UX Design",
    text: "Crafting clean, user-friendly interfaces with Figma & Photoshop, following modern design standards.",
    icon: "bi-vector-pen",
    tools: ["Figma", "Photoshop", "Wireframes"],
  },
  {
    title: "Creative Media & Editing",
    text: "Photography, AI-driven edits, and video editing for professional web and social media presence.",
    icon: "bi-camera",
    tools: ["Photoshop", "AI", "Video"],
  },
  {
    title: "Web Development",
    text: "Building responsive web apps with React, Redux & Node.js — scalable, fast, and production-ready.",
    icon: "bi-code-slash",
    tools: ["React", "Redux", "Node.js"],
  },
  {
    title: "Digital Marketing & Branding",
    text: "Helping businesses grow with logo, posters, campaigns & digital-first branding strategies.",
    icon: "bi-megaphone",
    tools: ["Branding", "Logo", "Campaigns"],
  },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const fadeDown = { hidden: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const liftIn = { hidden: { opacity: 0, y: 20, scale: 0.95 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } } };
const container = (delay = 0) => ({ hidden: {}, show: { transition: { delay, staggerChildren: 0.1, when: "beforeChildren" } } });

function StatCount({ to }) {
  const numRef = useRef(null);
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { if (numRef.current) numRef.current.textContent = Math.floor(v).toString(); },
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={wrapRef}><span ref={numRef}>0</span></span>;
}

export default function ServicesFramer() {
  return (
    <section className="services-section py-5">
      <div className="container">
        {/* Heading */}
        <motion.div className="text-center mb-5" variants={fadeDown} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="services-title underline-wipe mb-3">SERVICES</h2>
          <div className="services-sub">WHAT I DO</div>
        </motion.div>

        <div className="row align-items-center g-4">
          {/* Left Side: Video instead of image */}
          <div className="col-12 col-lg-5 d-flex justify-content-center">
            <motion.div className="video-wrap" variants={liftIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <video
                src={webdevVideo}
                autoPlay
                loop
                muted
                playsInline
                className="services-video"
              />
            </motion.div>
          </div>

          {/* Right Side: Services */}
          <motion.div className="col-12 col-lg-7" variants={container(.1)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="row g-4">
              {SERVICES.map((s, i) => (
                <div className="col-12 col-md-6" key={i}>
                  <motion.div className="service-card" variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }}>
                    <div className="service-icon"><i className={`bi ${s.icon}`} /></div>
                    <h6 className="mb-1">{s.title}</h6>
                    <p className="mb-2 small service-info">{s.text}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {s.tools.map((t, idx) => (
                        <span key={idx} className="tool-pill"><ToolIcon name={t} /> {t}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-strip mt-5">
        <div className="container">
          <motion.div className="row text-center g-4" variants={container(0)} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="col-4">
              <motion.div className="stat" variants={fadeUp}>
                <span className="icon bi-briefcase" />
                <span className="num glow"><StatCount to={5} /></span>
                <small>Years Experience</small>
              </motion.div>
            </div>
            <div className="col-4">
              <motion.div className="stat" variants={fadeUp}>
                <span className="icon bi-check2-circle" />
                <span className="num glow"><StatCount to={7} /></span>
                <small>Projects Delivered</small>
              </motion.div>
            </div>
            <div className="col-4">
              <motion.div className="stat" variants={fadeUp}>
                <span className="icon bi-building" />
                <span className="num glow"><StatCount to={4} /></span>
                <small>Companies Worked</small>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
