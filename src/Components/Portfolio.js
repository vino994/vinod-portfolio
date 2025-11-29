import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";   // 👈 add Link
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Portfolio.css";

import p1 from "../Assets/project-1.PNG";
import p2 from "../Assets/project-2.PNG";
import p3 from "../Assets/project-3.PNG";
import p4 from "../Assets/project-4.PNG";
import p5 from "../Assets/jewel.PNG";
import p6 from "../Assets/movie-app.PNG";
import p7 from "../Assets/static.PNG";
import p8 from "../Assets/project-7.PNG";
import p9 from "../Assets/hotel.PNG";

// Portfolio items
const ITEMS = [
  { id: "delivery", src: p1, title: "Delivery App", tags: ["React", "Bootstrap"], liveUrl: "https://vino994.github.io/delivery-app/", codeUrl: "https://github.com/vino994/delivery-app" },
  { id: "business", src: p2, title: "Business Landing", tags: ["React", "UI/UX"], liveUrl: "https://vino994.github.io/ashvidha/", codeUrl: "https://github.com/vino994/ashvidha" },
  { id: "social", src: p3, title: "Social App", tags: ["React", "API"], liveUrl: "https://vino994.github.io/dhiya-social-app/", codeUrl: "https://github.com/vino994/dhiya-social-app" },
  { id: "zoo", src: p4, title: "Zoo Info", tags: ["React"], liveUrl: "https://vino994.github.io/zooapp/", codeUrl: "https://github.com/vino994/zooapp" },
  { id: "jewel", src: p5, title: "Jewellery Showcase", tags: ["Responsive", "UI/UX"], liveUrl: "https://vino994.github.io/Jewellery-/", codeUrl: "https://github.com/vino994/Jewellery-" },
  { id: "weather", src: p6, title: "Movie App", tags: ["React", "API"], liveUrl: "https://j-movies-app.netlify.app/", codeUrl: "https://github.com/vino994/weather_app" },
  { id: "construction", src: p8, title: "Construction", tags: ["React"], liveUrl: "https://vino994.github.io/construction/", codeUrl: "https://github.com/vino994/construction" },
  { id: "static", src: p7, title: "Static Site", tags: ["HTML", "Responsive"], liveUrl: "https://vino994.github.io/Html-Css-Landingpage/", codeUrl: "https://github.com/vino994/Html-Css-Landingpage" },
  { id: "hotel", src: p9, title: "Hotel Booking", tags: ["React", "UI/UX"], liveUrl: "https://vino994.github.io/hotelbooking/", codeUrl: "https://github.com/vino994/hotelbooking" }
];

// animation
const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }
};

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "React", "API", "UI/UX", "Responsive"];
  const filtered = filter === "All" ? ITEMS : ITEMS.filter(it => it.tags.includes(filter));
  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section className="portfolio-dark py-5" id="portfolio">
      <div className="container text-center">
        {/* Section Title */}
        <motion.div
          className="mb-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="portfolio-title">PORTFOLIO</h2>
          <div className="portfolio-sub">MY WORK</div>
        </motion.div>

        {/* Filters */}
        <div className="filter-buttons mb-4 flex-wrap justify-content-center">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => { setFilter(cat); setShowAll(false); }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="row g-4">
          <AnimatePresence>
            {visible.map(item => (
              <motion.div
                key={item.id}
                className="col-12 col-sm-6 col-lg-4"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
              >
                <article className="portfolio-card h-100">
                  <img src={item.src} alt={item.title} className="portfolio-img" />
                  <div className="portfolio-body">
                    <h5 className="portfolio-name">{item.title}</h5>
                    <div className="portfolio-tags mb-2">
                      {item.tags.map((t, i) => (
                        <span key={i} className="tag-badge">{t}</span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      {/* 👇 Navigate inside app instead of new tab */}
                      <Link to={`/project/${item.id}`} className="btn btn-sm btn-danger">🔗 Live</Link>
                      <a href={item.codeUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-light">💻 Code</a>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More / Show Less */}
        {filtered.length > 6 && (
          <motion.div
            className="mt-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {!showAll ? (
              <button className="btn btn-outline-light px-4" onClick={() => setShowAll(true)}>Load More</button>
            ) : (
              <button
                className="btn btn-outline-light px-4"
                onClick={() => {
                  setShowAll(false);
                  window.scrollTo({ top: document.getElementById("portfolio").offsetTop - 60, behavior: "smooth" });
                }}
              >
                Show Less
              </button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
