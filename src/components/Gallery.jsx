import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery">

      <div className="gallery-item">
        <img src="/images/real-tapin.jpeg" alt="Fewture collection" />
        <img src="/images/real-tapin2.jpeg" alt="Fewture collection" />
      </div>

      <div className="gallery-item">
        <img src="/images/mobile/hero5.jpeg" alt="Fewture collection" />
        <img src="/images/for-gallery3.jpeg" alt="Fewture collection" />
      </div>

      <div className="gallery-item">
        <img src="/images/gallery1.jpeg" alt="Fewture collection" />
        <img src="/images/gallery2.jpeg" alt="Fewture collection" />
      </div>

    </section>
  );
};

export default Gallery;