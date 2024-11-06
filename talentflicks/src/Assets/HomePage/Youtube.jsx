import React, { useEffect } from "react";
import "./HomePage.css";
// Import the CSS file for AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Youtube() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can specify the animation duration here (in ms)
      easing: "ease-in-out", // Easing function for the animations
      once: false,
      loop: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="youtube">
      <div className="sticky-content">
        <h2 data-aos="zoom-in">Our Story</h2>
        <div className="scrollable-section">
          <div className="competition">
            <div className="inner1" data-aos="fade-up-right"></div>
          </div>
          <div className="winner">
            <div className="inner2" data-aos="fade-up-left"></div>
          </div>
          <div className="quiz">
            <div className="inner3" data-aos="fade-up-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
