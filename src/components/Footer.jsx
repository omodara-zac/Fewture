import "./Footer.css"
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-brand">
        <h2>FEWTURE</h2>
        <p>Don't follow the future. Wear it.</p>
      </div>

      <div className="footer-links">
        <h3>EXPLORE</h3>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/contact">CONTACT US</Link>
      </div>

      <div className="footer-links">
        <h3>INFORMATION</h3>
        <Link to="/terms">TERMS OF SERVICE</Link>
        <Link to="/shipping">SHIPPING POLICY</Link>
        <Link to="/returns">RETURNS POLICY</Link>
        <Link to="/privacy">PRIVACY POLICY</Link>
      </div>

      <div className="footer-socials">
        <h3>FOLLOW FEWTURE</h3>

        <div className="social-icons">
          <a
            href="https://www.instagram.com/fewture_fashion24"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>

          <a
            href="https://wa.me/+2347069451201"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} FEWTURE. ALL RIGHTS RESERVED.
        </p>
        <p>RESERVED FOR THE FEW!</p>
      </div>

    </footer>
  );
};

export default Footer;
