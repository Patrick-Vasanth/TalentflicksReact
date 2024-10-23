import React from "react";
import "./HomePage.css";
// Import the CSS file for AOS
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Youtube() {
  useEffect(() => {
    AOS.init({
      duration: 9000, // You can specify the animation duration here (in ms)
      easing: "ease-in-out", // Easing function for the animations
      once: false,
      loop: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="youtube">
      <div className="sticky-content">
        <div className="scrollable-section">
          
        </div>
      </div>
    </div>
  );
}
