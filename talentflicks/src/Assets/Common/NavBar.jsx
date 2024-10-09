import React, { useState } from "react";
import { navData } from "../Services/Data.js";
import { Link, NavLink } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./NavBar.css";
import Logo from "../Images/logo svg.svg";
import GetAppBtn from "./GetAppBtn";
import LogoutIcon from "@mui/icons-material/Logout";
import PortraitIcon from "@mui/icons-material/Portrait";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function NavBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  let showProfile = () => {
    setIsProfileOpen((prev) => !prev);
    
  };
  return (
    <div className="navBar">
      <div className="logo">
        <Link to="/home">
          <img src={Logo} alt="Talentflicks Logo" />
        </Link>
      </div>
      <div className="menus">
        <div className="navList">
          <ul className="nav">
            {navData.map((data, index) => (
              <li key={index}>
                <NavLink
                  to={data.navLink}
                  className="lists"
                  activeclassname="active"
                >
                  {<data.icon />}
                  {data.navMenu}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile">
          <button className="btn profile-menu" onClick={showProfile}>
            <AccountCircleRoundedIcon className="profileIcon" />
            Profile
            <ExpandMoreIcon
              className={`menu-arrow-down ${isProfileOpen ? "open" : ""}`}
              id="arrow"
            />
          </button>
          <ul className={`profileList ${isProfileOpen ? 'show' : ''}`}>
            <li>
              <PortraitIcon /> My Account
            </li>
            <li>
              <LogoutIcon /> Logout
            </li>
          </ul>

          <div className="app">
            <GetAppBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
