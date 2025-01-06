import React, { useState, useEffect, useRef } from "react";
import { images, workContent } from "../Services/Data";

export default function HowWorks() {
  const [visibleIndices, setVisibleIndices] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleIndices((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="how-works">
      <h1>How it Works</h1>
      <div className="innerImg">
        <div className="work-content">
          {workContent.map((section, index) => (
            <div key={index} className={`work-content${index + 1} work`}>
              <div className="work-icon">
                <section.icon className="wIcon" />
              </div>
              <div className={`wrkContent${index + 1}`}>
                <h2>{section.h2content}</h2>
                <p>{section.pcontent}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="work-img">
          {images.map((image, index) => (
            <img
              key={image.id}
              ref={(el) => (imageRefs.current[index] = el)}
              src={image.src}
              alt={image.alt}
              className={visibleIndices.includes(index) ? "animated" : "hidden"}
              style={{
                display: "block",
                width: "150px",
                height: "150px",
                margin: "40px auto",
                transition: "opacity 0.5s, transform 0.5s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
