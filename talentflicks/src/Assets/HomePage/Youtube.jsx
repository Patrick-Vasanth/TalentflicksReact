import React, { useEffect, useRef } from "react";
import "./HomePage.css";
// Import the CSS file for AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Youtube() {

  const scrollableRef = useRef(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 9000, // You can specify the animation duration here (in ms)
      easing: "ease-in-out", // Easing function for the animations
      once: false,
      loop: true, // Whether animation should happen only once - while scrolling down
    });
    const handleScroll = () => {
      const stickyElement = stickyRef.current;
      const scrollableElement = scrollableRef.current;

      if (stickyElement && scrollableElement) {
        // Get the position of the sticky element
        const stickyRect = stickyElement.getBoundingClientRect();

        // If the sticky element is out of view (above the viewport), reset the scrollable section
        if (stickyRect.bottom < 0) {
          scrollableElement.scrollTop = 0; // Scroll back to top
        }
      }
    }


    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="youtube">
      <div className="sticky-content" ref={stickyRef}>
        <div className="scrollable-section"  ref={scrollableRef}>
          <div className="competition">

          </div>
          <div className="winner">

          </div>
          <div className="quiz">

          </div>
          <div className="price">
            
          </div>
        </div>
      </div>
    </div>
  );
}
