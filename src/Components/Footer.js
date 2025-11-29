import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Footer.css";
import emailjs from "@emailjs/browser";

const CONTACT = {
  name: "Vinoth Sanjeevi",
  address: "Tamil Nadu, India",
  phone: "+91 938033 4317",
  email: "vinodsanjeev94@gmail.com",
};

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lilibt4",
        "template_oz519ja",
        form.current,
        "-ofppnO1dVjdcg5jI"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <footer className="site-footer py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Left: Contact Form */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="card glass flex-fill w-100">
              <div className="card-body">
                <h3 className="footer-title mb-3">Let’s Connect</h3>
                <p className="footer-info small mb-4">
                  Looking for a passionate Frontend Developer?  
                  Reach out below or send me a direct message.
                </p>

                {/* Contact Info */}
                <div className="contact-list mb-4">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt text-accent"></i>
                    <span>{CONTACT.address}</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone text-accent"></i>
                    <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope text-accent"></i>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </div>
                </div>

                {/* Form */}
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <input
                        name="user_name"
                        className="form-control form-control-dark"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control form-control-dark"
                        placeholder="Email address"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control form-control-dark"
                        rows="3"
                        placeholder="Message"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-danger w-100">
                        🚀 Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right: Resume + Quick Links */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="card glass flex-fill w-100 d-flex flex-column justify-content-center align-items-center p-4 text-center">
              <h4 className="mb-3">Quick Actions</h4>
   <a
  href={`${process.env.PUBLIC_URL}/vinod_fresher.pdf`}
  download="Vinoth_Sanjeevi_Resume.pdf"
  className="btn btn-danger mb-3 w-75 animate-fadeup pulse-glow"
>
  📄 Download Resume
</a>
           <a
  href="https://www.linkedin.com/in/vinoth-sanjeevi-7a2b1a392/"
  target="_blank"
  rel="noreferrer"
  className="btn btn-primary mb-3 w-75 animate-fadeup"
  style={{ animationDelay: "0.2s" }}  
>
  💼 Connect on LinkedIn
</a>
              <div className="social-links d-flex gap-3 justify-content-center">
               
                <a className="social" href="https://www.facebook.com/vinothkumar.sanjeevi/"><i className="bi bi-facebook" /></a>
                <a className="social" href="https://www.instagram.com/vinod_sanjeev/"><i className="bi bi-instagram" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom d-flex flex-column flex-md-row align-items-center justify-content-between mt-4 pt-3 text-center text-md-start">
          <div className="text-muted small contact-bottom">
            <i className="bi bi-envelope me-1"></i>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span className="mx-2">|</span>
            <i className="bi bi-telephone me-1"></i>
            <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
          </div>
          <div className="recruiter-tagline mt-2 mt-md-0">
            💡 Open to <strong>Frontend Developer</strong> roles — React, UI/UX, Remote & Onsite
          </div>
        </div>
      </div>
    </footer>
  );
}
