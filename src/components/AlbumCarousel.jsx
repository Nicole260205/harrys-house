import { useState, useEffect } from "react";
import AlbumSlide from "./AlbumSlide";
import albumData from "../data/albums";
import "../App.css";

function AlbumCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % albumData.length);
    }, 12000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-inner"
        style={{
          transform: `translateY(-${(100 / albumData.length) * currentIndex}%)`,
        }}
      >
        {albumData.map((album, index) => (
          <AlbumSlide key={index} {...album} />
        ))}
      </div>

      <div className="carousel-dots">
        {albumData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default AlbumCarousel;
