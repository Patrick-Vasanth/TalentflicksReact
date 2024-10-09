import React, { useState, useEffect } from "react";
import { sliderImage } from "../Services/Data.js";
import "./HomePage.css";

export default function MainSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startAutoSlide = () => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImage.length);
    }, 4000);
    setIntervalId(id);
  };

  useEffect(() => {
    startAutoSlide(); // Start the auto slide when the component mounts

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderImage.length) % sliderImage.length
    );
    resetInterval();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImage.length);
    resetInterval();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalId);
    startAutoSlide();
  };

  return (
    <div className="slider">
      <button onClick={goToPrevious} className="nav-button">
        &#10094;
      </button>
      <img
        src={sliderImage[currentIndex].path}
        alt={sliderImage[currentIndex].alt}
        className="slider-image"
      />
      <button onClick={goToNext} className="nav-button">
        &#10095;
      </button>
      <div className="indicator-container">
        {sliderImage.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
