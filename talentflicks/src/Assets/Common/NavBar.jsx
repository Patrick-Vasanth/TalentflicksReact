import React, { useContext, useState } from "react";
import { navData } from "../Services/Data.js";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./NavBar.css";
import Logo from "../Images/logo svg.svg";
import GetAppBtn from "./GetAppBtn";
import LogoutIcon from "@mui/icons-material/Logout";
import PortraitIcon from "@mui/icons-material/Portrait";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AuthContext } from "./Autenticate.jsx";

export default function NavBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { isLoggedIn, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  let logoutCredentials =()=>{
    logout()
    navigate("/")
    setIsProfileOpen((prev)=>!prev)
  }

  let showProfile = () => {
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="navBar">
      <div className="logo">
        <Link to="/">
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
         {isLoggedIn ? (
           <ul className={`profileList ${isProfileOpen ? "show" : ""}`}>
           <Link className="profilePage" to="/profile">
             <li>
               <PortraitIcon /> Profile
             </li>
           </Link>
           <li onClick={logoutCredentials}>
             <LogoutIcon /> Logout
           </li>
         </ul>
         ):(
          <ul className={`profileList ${isProfileOpen ? "show" : ""}`}>
          <Link className="account" to="/account">
            <li>
              <PortraitIcon /> SignIn/ SignUp
            </li>
          </Link>
        </ul>
         )}

          <div className="app">
            <GetAppBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
