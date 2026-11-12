import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <>
    <Navbar />
    <main className="contact-page">
      <section className="contact-content">
        <div className="contact-heading">
          <p className="contact-label">FEWTURE / CONNECT WITH US</p>
          <h1>LET'S CONNECT.</h1>
          <p className="contact-description">
            Got a question? Want to know more about our latest drops?
            Reach out to us through any of our platforms.
          </p>
        </div>

        <div className="social-links">
          <a
            href="https://www.instagram.com/YOUR_INSTAGRAM"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram />
            <span>INSTAGRAM</span>
            <span className="social-arrow">↗</span>
          </a>

          <a
            href="https://www.tiktok.com/@fewture.fashion"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaTiktok />
            <span>TIKTOK</span>
            <span className="social-arrow">↗</span>
          </a>

          <a
            href="https://wa.me/07069451201"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaWhatsapp />
            <span>WHATSAPP</span>
            <span className="social-arrow">↗</span>
          </a>
        </div>

        <p className="contact-footer">
          RESERVED FOR THE FEW. FEWTURE © 2024. ALL RIGHTS RESERVED.
        </p>
      </section>
    </main>

   <Footer /> 
    </>
  );
};

export default Contact;