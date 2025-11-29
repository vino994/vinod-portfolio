import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Education.css";

const EDUCATION = [
  {
    year: "2024 – Present",
    title: "Full Stack Development (MERN) — In Progress",
    place: "Guvi – IIT Madras (Online)",
    desc: "Upskilling in MERN (MongoDB, Express.js, React, Node.js) with real-world projects & REST API deployment.",
  },
  {
    year: "2016",
    title: "B.E. Computer Science — 72%",
    place: "Coimbatore Institute of Engineering and Technology, Coimbatore",
    desc: "Strong foundation in algorithms, data structures, DBMS, operating systems, and web technologies.",
  },
  {
    year: "2012",
    title: "Higher Secondary (12th) — 78%",
    place: "Govt. Boys Higher Secondary School, Aranthangi",
    desc: "Mathematics, Physics, Chemistry, and Computer Science specialization.",
  },
  {
    year: "2010",
    title: "Secondary School (10th) — 85%",
    place: "National High School, Perumarudhur",
    desc: "Excellent academic performance across all core subjects.",
  },
];

export default function Education() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const items = root.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="education-section py-5" ref={containerRef}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5 reveal fade-down">
          <h2 className="section-title underline-wipe">EDUCATION</h2>
          <div className="section-subtitle">Academic History</div>
        </div>

        {/* 🎯 Highlight Cards (only top 2) */}
        <div className="row g-4 mb-5">
          {EDUCATION.slice(0, 2).map((item, idx) => (
            <div className="col-12 col-md-6" key={idx}>
              <div className="highlight-card shadow-lg reveal fade-up">
                <div className="highlight-year">{item.year}</div>
                <h5 className="highlight-title">{item.title}</h5>
                <div className="highlight-place">{item.place}</div>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline (all items) */}
        <div className="timeline">
          {EDUCATION.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${idx % 2 === 0 ? "left" : "right"} reveal fade-up`}
              style={{ "--stagger": `${idx * 100}ms` }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content shadow-sm">
                <div className="timeline-year">{item.year}</div>
                <h5>{item.title}</h5>
                <div className="text-accent">{item.place}</div>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
