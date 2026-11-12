
import React from "react";
import { Link } from "react-router-dom";
import "./LegalPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LegalPage = ({ title, intro, sections }) => {
  return (
    <>
    <Navbar />
    <main className="legal-page">
      <div className="legal-container">
        <p className="legal-label">FEWTURE / LEGAL</p>

        <h1>{title}</h1>

        <p className="legal-intro">{intro}</p>

        <p className="legal-updated">
          LAST UPDATED: NOVEMBER 2026
        </p>

        {sections.map((section, index) => (
          <section className="legal-section" key={index}>
            <h2>
              {String(index + 1).padStart(2, "0")}. {section.heading}
            </h2>

            {section.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {section.link && (
              <Link to={section.link.to} className="legal-link">
                {section.link.label} ↗
              </Link>
            )}
          </section>
        ))}

        <div className="legal-bottom">
          <p>FEWTURE — RESERVED FOR THE FEW!</p>
        </div>
      </div>
    </main>

    <Footer />
    </>
  );
};

export default LegalPage;
