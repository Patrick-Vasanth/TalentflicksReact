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
            <div className="comp-content" data-aos="fade-up-left">
              <h1>Competition</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              ratione nisi commodi autem, nam temporibus sed pariatur amet nemo
              officiis ullam quisquam nihil voluptate. Voluptate id quisquam
              perferendis quae officiis?
            </div>
          </div>
          <div className="winner">
            <div className="inner2" data-aos="fade-up-left"></div>
            <div className="winner-content" data-aos="fade-up-right">
              <h1>Winner</h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
              cupiditate odit temporibus voluptatem fuga, nisi illum maiores
              reprehenderit assumenda consectetur quas corporis accusamus
              voluptates enim provident debitis ullam consequatur tenetur.
            </div>
          </div>
          <div className="quiz">
            <div className="inner3" data-aos="fade-up-right"></div>
            <div className="quiz-content" data-aos="fade-up-left">
              <h1>Quiz</h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              rerum quis quo quae officiis? Voluptates sed laboriosam expedita
              error quidem porro iusto vitae, fugiat sint! Inventore non optio
              quos sapiente.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
