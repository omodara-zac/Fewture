import "./Hero.css";
import { useState, useEffect } from "react";

const desktopImages = [
  "/images/desktop/hero4.jpeg",
  "/images/desktop/hero5.jpeg",
  "/images/desktop/hero6.jpeg",
];

const mobileImages = [
  "/images/mobile/hero5.jpeg",
  "/images/mobile/hero6.jpeg",
  // "/images/mobile/real-tapin.jpeg",
  "/images/mobile/hero2.jpeg",
];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1024px)").matches
  );

  const [currentImage, setCurrentImage] = useState(0);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleResize = (event) => {
      setIsMobile(event.matches);
      setCurrentImage(0);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="hero">
      <img
        key={images[currentImage]}
        src={images[currentImage]}
        alt="Fewture fashion collection"
        className="hero-image"
      />

      <div className="hero-content">
        <h1>FEWTURE</h1>
        <p>Reserved for the FEW!</p>
        <a href="#products" className="btn">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;