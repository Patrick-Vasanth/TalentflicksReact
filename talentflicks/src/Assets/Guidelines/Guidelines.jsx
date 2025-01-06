import React from "react";
import NavBar from "../Common/NavBar";
import Whatsapp from "../Common/Whatsapp";
import ScrollTop from "../Common/ScrcollTop";

export default function Guidelines() {
  return (
    <div>
      <div className="navSection">
        <NavBar />
      </div>
      <div className="BottomIcons">
        <Whatsapp />
        <ScrollTop />
      </div>
    </div>
  );
}
