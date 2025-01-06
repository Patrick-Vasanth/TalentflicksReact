import React from "react";
import NavBar from "../Common/NavBar";
import MainSlider from "./MainSlider";
import GetAppBtn from "../Common/GetAppBtn";
import Youtube from "./Youtube";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import Whatsapp from "../Common/Whatsapp";
import ScrollTop from "../Common/ScrcollTop";
import OurApp from "./OurApp";
import HowWorks from "./HowWorks";

export default function HomePage() {
  useEffect(()=>{
    AOS.init({
      duration: 1000, // You can specify the animation duration here (in ms)
      easing: 'linear', // Easing function for the animations
      once: false,// Whether animation should happen only once - while scrolling down
    });
  },[])
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
      <div className="ourApp">
        <OurApp />
      </div>
      <div className="howWorks">
        <HowWorks />
      </div>
      <div className="BottomIcons">
        <Whatsapp />
        <ScrollTop />
      </div>
    </div>
  );
}
