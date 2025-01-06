import React, { useEffect, useState } from "react";
import AppImage from "../Images/iPhone 13 (1.png";
import Aos from "aos";

export default function OurApp() {

  useEffect(() => {
    Aos.init({
      duration: 1500, // You can specify the animation duration here (in ms)
      easing: "ease-in-out", // Easing function for the animations
      once: false,
      loop: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  let rotate = () => {
    setIsHovered(true);
  };

  let leave = () => {
    setIsHovered(false);
  };

  const imageStyle = {
    transition: "transform .8s ease",
    transform: isHovered ? 'scaleX(-1)' : 'scaleX(1)',
  };

  return (
    <>
      <div className="apps">
        <div className="appContent" data-aos="flip-right">
          <h1>Coming Soon</h1>
          <p>
            Experience the thrill of short film competitions like never before!
            Watch captivating films, make your winning guess, and book tickets.
            Win exciting prizes by backing the winning film – it's cinema,
            excitement, and rewards, all in one app!
          </p>
        </div>
        <div className="appImage" data-aos="flip-left">
          <img
            src={AppImage}
            alt="appImage"
            id="image-app"
            width={350}
            height={600}
            style={imageStyle}
            onMouseOver={rotate}
            onMouseOut={leave}
          />
        </div>
      </div>
    </>
  );
}
