import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import p1 from "../Assets/project-1.PNG";
import p2 from "../Assets/project-2.PNG";
import p3 from "../Assets/project-3.PNG";
import p4 from "../Assets/project-4.PNG";
import p5 from "../Assets/jewel.PNG";
import p6 from "../Assets/movie-app.PNG";
import p7 from "../Assets/static.PNG";
import p8 from "../Assets/project-7.PNG";
import p9 from "../Assets/hotel.PNG";

const ITEMS = [
  { id: "delivery", src: p1, repoUrl: "https://vino994.github.io/delivery-app/", desc: "Delivery App — React + Bootstrap, cart flow demo" },
  { id: "business", src: p2, repoUrl: "https://vino994.github.io/ashvidha/", desc: "Business Landing Page — modern React design" },
  { id: "social", src: p3, repoUrl: "https://vino994.github.io/dhiya-social-app/", desc: "Social App — authentication + posts feed" },
  { id: "zoo", src: p4, repoUrl: "https://vino994.github.io/zooapp/", desc: "Zoo Info — gallery of animals, responsive" },
  { id: "jewel", src: p5, repoUrl: "https://vino994.github.io/Jewellery-/", desc: "Jewellery Showcase — elegant product display" },
  { id: "weather", src: p6, repoUrl: "https://vino994.github.io/weather_app/", desc: "Weather App — React Hooks + OpenWeather API" },
  { id: "construction", src: p8, repoUrl: "https://vino994.github.io/construction/", desc: "Construction Website — responsive React site" },
  { id: "static", src: p7, repoUrl: "https://vino994.github.io/Html-Css-Landingpage//", desc: "Static Site — HTML/CSS/React" },
  { id: "hotel", src: p9, repoUrl: "https://vino994.github.io/hotelbooking/", desc: "Hotel Booking — UI demo for booking system" }
];

export default function ProjectViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ITEMS.find((it) => it.id === id);

  // 🔥 Escape key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  if (!project) {
    return (
      <div className="container text-center py-5">
        <h3>⚠️ Project not found</h3>
        <button className="btn btn-danger mt-3" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    );
  }

 return (
  <div className="project-viewer" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    {/* Header with breadcrumb */}
    <div
      style={{
        padding: "10px 20px",
        background: "#111",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <button className="btn btn-danger mb-2" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Breadcrumb */}
      <div style={{ fontSize: "0.95rem", fontWeight: 500 }}>
        <Link to="/" style={{ color: "#bbb", textDecoration: "none" }}>
          Portfolio
        </Link>{" "}
        <span style={{ color: "#666" }}>›</span>{" "}
        <span style={{ color: "#fff", fontWeight: 600 }}>
          {project.desc.split("—")[0]}
        </span>
      </div>

      <a
        href={project.repoUrl}
        className="btn btn-outline-light mb-2"
        target="_blank"
        rel="noreferrer"
      >
        Open in new tab
      </a>
    </div>

    {/* Project preview */}
    <div className="container py-4 text-center">
      <img
        src={project.src}
        alt={project.desc}
        className="img-fluid rounded shadow mb-3"
        style={{ maxHeight: "300px", objectFit: "cover" }}
      />
      <p className="lead">{project.desc}</p>
    </div>

    {/* Iframe viewer */}
    <div style={{ flex: 1, borderTop: "1px solid #333" }}>
      <iframe
        src={project.repoUrl}
        title={project.desc}
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
    </div>

    {/* 👇 Responsive section: Show all projects */}
    <div className="container py-5">
      <h4 className="text-center mb-4">More Projects</h4>
      <div className="row g-4">
        {ITEMS.map((item) => (
          <div key={item.id} className="col-6 col-md-4 col-lg-3">
            <Link to={`/project/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.src}
                  alt={item.desc}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body p-2 text-center">
                  <small className="fw-bold">{item.desc.split("—")[0]}</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}
