import React from "react";
import NavBar from "../Common/NavBar";
import MainSlider from "./MainSlider";
import GetAppBtn from "../Common/GetAppBtn";
import Youtube from "./Youtube";

export default function HomePage() {
  return (
    <div>
      <div className="navSection">
        <NavBar />
      </div>
      <div className="sliderSection">
        <div className="innerSlide">
          <div className="sliderContent" data-aos="fade-up-right">
            <h1>"Dreams Come to life through the lens"</h1>
            <p>
              Some dreams can feel insignificant but can be a portal into a
              deeper understanding of who we are and what we need.
            </p>
            <div className="app">
              <GetAppBtn />
            </div>
          </div>
          <div className="sliderImage" data-aos="fade-up-left">
            <MainSlider />
          </div>
        </div>
      </div>
      <div className="youtubeContent">
        <Youtube />
      </div>
    </div>
  );
}
